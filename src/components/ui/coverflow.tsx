import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type PanInfo,
  MotionValue,
} from "motion/react";

export interface CoverFlowItem {
  id: string | number;
  image: string;
  title: string;
  subtitle?: string;
}

export interface CoverFlowProps {
  items: CoverFlowItem[];
  itemWidth?: number;
  itemHeight?: number;
  stackSpacing?: number;
  centerGap?: number;
  rotation?: number;
  initialIndex?: number;
  enableReflection?: boolean;
  enableClickToSnap?: boolean;
  enableScroll?: boolean;
  scrollThreshold?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  onItemClick?: (item: CoverFlowItem, index: number) => void;
  onIndexChange?: (index: number) => void;
}

export function CoverFlow({
  items,
  itemWidth = 800,
  itemHeight = 450,
  stackSpacing = 150,
  centerGap = 500,
  rotation = 45,
  initialIndex = 0,
  enableReflection = true,
  enableClickToSnap = true,
  enableScroll = true,
  scrollThreshold = 60,
  autoplay = true,
  autoplayInterval = 5000,
  className,
  onItemClick,
  onIndexChange,
}: CoverFlowProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Ref para controlar el bloqueo de scroll rápido
  const isScrollingRef = useRef(false);

  const [dims, setDims] = useState({
    width: itemWidth,
    height: itemHeight,
    gap: centerGap,
    spacing: stackSpacing
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        const mobileW = width * 0.85;
        setDims({
          width: mobileW,
          height: mobileW * (9 / 16),
          gap: width * 0.4,
          spacing: 50
        });
      } else {
        setDims({
          width: itemWidth,
          height: itemHeight,
          gap: centerGap,
          spacing: stackSpacing
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemWidth, itemHeight, centerGap, stackSpacing]);

  const scrollX = useMotionValue(initialIndex);
  const springX = useSpring(scrollX, {
    stiffness: 150,
    damping: 30,
    mass: 1,
  });

  const jumpToIndex = useCallback(
    (index: number) => {
      let target = index;
      if (index >= items.length) target = 0;
      if (index < 0) target = items.length - 1;
      
      setActiveIndex(target);
      scrollX.set(target);
    },
    [items.length, scrollX],
  );

  useEffect(() => {
    if (!autoplay || isDragging || isHovered) return;
    const interval = setInterval(() => {
      jumpToIndex(activeIndex + 1);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, activeIndex, isDragging, isHovered, jumpToIndex, autoplayInterval]);

  // --- SCROLL PROTEGIDO (UNO A LA VEZ) ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enableScroll) return;

    let wheelAccumulator = 0;

    const handleWheel = (e: WheelEvent) => {
      // Si ya se está ejecutando un cambio de tarjeta, ignorar el resto del scroll
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      
      // Permitir scroll vertical normal si no hay shift presionado
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && !e.shiftKey) {
          return;
      }

      e.preventDefault();
      wheelAccumulator += delta;

      if (Math.abs(wheelAccumulator) > scrollThreshold) {
        isScrollingRef.current = true; // Bloqueamos

        if (wheelAccumulator > 0) jumpToIndex(activeIndex + 1);
        else jumpToIndex(activeIndex - 1);
        
        wheelAccumulator = 0;

        // Desbloqueamos después de 250ms para permitir el siguiente "paso"
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 250);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [enableScroll, activeIndex, jumpToIndex, scrollThreshold]);

  const onDragStart = () => setIsDragging(true);
  const onDrag = (_: any, info: PanInfo) => {
    const deltaIndex = -info.delta.x / (dims.gap * 0.8);
    scrollX.set(scrollX.get() + deltaIndex);
  };
  const onDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const velocity = info.velocity.x;
    const current = scrollX.get();
    const targetIndex = Math.round(current - velocity * 0.001);
    jumpToIndex(targetIndex);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-transparent focus:outline-none touch-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      } ${className ?? ""}`}
      style={{ perspective: 2000 }}
      tabIndex={0}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      <div
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item, index) => (
          <CoverFlowItemCard
            key={item.id}
            item={item}
            index={index}
            scrollX={springX}
            width={dims.width}
            height={dims.height}
            stackSpacing={dims.spacing}
            centerGap={dims.gap}
            rotation={rotation}
            isActive={index === activeIndex}
            enableReflection={enableReflection}
            enableClickToSnap={enableClickToSnap}
            isDragging={isDragging}
            onClick={() => {
              if (index === activeIndex) onItemClick?.(item, index);
              else if (enableClickToSnap) jumpToIndex(index);
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center pointer-events-none z-40">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeIndex}
          className="text-center px-4"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground drop-shadow-md">
            {items[activeIndex]?.title}
          </h3>
          {items[activeIndex]?.subtitle && (
            <p className="text-foreground/60 text-xs md:text-sm mt-1 font-medium">
              {items[activeIndex]?.subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

// El componente CoverFlowItemCard se mantiene igual...
function CoverFlowItemCard({
  item,
  index,
  scrollX,
  width,
  height,
  stackSpacing,
  centerGap,
  rotation,
  isActive,
  enableReflection,
  enableClickToSnap,
  isDragging,
  onClick,
}: any) {
  const position = useTransform(scrollX, (value: number) => index - value);
  const zIndex = useTransform(position, (pos: number) => 1000 - Math.abs(pos) * 10);

  const t = useTransform(position, (pos: number) => {
    const absPos = Math.abs(pos);
    let rY = pos < -0.5 ? rotation : pos > 0.5 ? -rotation : -pos * (rotation * 2);
    
    let x = 0;
    const stackIndex = Math.max(0, absPos - 1);
    if (pos < 0) x = absPos < 1 ? pos * centerGap : -centerGap - stackIndex * stackSpacing;
    else x = absPos < 1 ? pos * centerGap : centerGap + stackIndex * stackSpacing;

    const z = absPos > 0.5 ? -200 : Math.abs(pos) * -400;
    return { rotateY: rY, x, z };
  });

  const rotateY = useTransform(t, (v) => v.rotateY);
  const x = useTransform(t, (v) => v.x);
  const z = useTransform(t, (v) => v.z);
  const brightness = useTransform(position, (pos: number) => (Math.abs(pos) < 0.5 ? 1 : 0.5));

  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 preserve-3d will-change-transform ${
        isDragging ? "cursor-grabbing" : (isActive || enableClickToSnap ? "cursor-pointer" : "cursor-grab")
      }`}
      style={{
        width,
        height,
        marginTop: -height / 2,
        marginLeft: -width / 2,
        x, z, rotateY, zIndex,
        filter: useTransform(brightness, (b) => `brightness(${b})`),
        pointerEvents: "auto",
      }}
      onClick={onClick}
    >
      <div className="relative w-full h-full rounded-xl shadow-2xl bg-black overflow-hidden border border-white/10">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {enableReflection && (
        <div
          className="absolute left-0 right-0 overflow-hidden pointer-events-none"
          style={{ top: "100%", width, height: height * 0.35, marginTop: "2px" }}
        >
          <div className="relative w-full h-full opacity-30" style={{ transform: "scaleY(-1)" }}>
            <img src={item.image} alt="" className="w-full h-full object-cover blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

interface CardProps {
  item: CoverFlowItem;
  index: number;
  scrollX: MotionValue<number>;
  width: number;
  height: number;
  stackSpacing: number;
  centerGap: number;
  rotation: number;
  isActive: boolean;
  enableReflection: boolean;
  enableClickToSnap: boolean;
  isDragging: boolean;
  onClick: () => void;
}