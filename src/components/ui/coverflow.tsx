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
  scrollThreshold = 100,
  className,
  onItemClick,
  onIndexChange,
}: CoverFlowProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // --- LÓGICA RESPONSIVA ---
  const [dims, setDims] = useState({
    width: itemWidth,
    height: itemHeight,
    gap: centerGap,
    spacing: stackSpacing
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) { // Móvil
        const mobileW = width * 0.85;
        setDims({
          width: mobileW,
          height: mobileW * (9 / 16), // Mantiene proporción 16:9
          gap: width * 0.4,
          spacing: 50
        });
      } else { // Desktop
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
  // -------------------------

  const enableScrollRef = useRef(enableScroll);
  const scrollThresholdRef = useRef(scrollThreshold);
  const scrollX = useMotionValue(initialIndex);
  const springX = useSpring(scrollX, {
    stiffness: 150,
    damping: 30,
    mass: 1,
  });

  useEffect(() => {
    if (initialIndex !== activeIndex) {
      setActiveIndex(initialIndex);
      scrollX.set(initialIndex);
    }
  }, [initialIndex, activeIndex, scrollX]);

  useEffect(() => {
    onIndexChange?.(activeIndex);
  }, [activeIndex, onIndexChange]);

  useEffect(() => {
    enableScrollRef.current = enableScroll;
    scrollThresholdRef.current = scrollThreshold;
  }, [enableScroll, scrollThreshold]);

  const jumpToIndex = useCallback(
    (index: number) => {
      const clamped = Math.min(Math.max(index, 0), items.length - 1);
      setActiveIndex(clamped);
      scrollX.set(clamped);
    },
    [items.length, scrollX],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelAccumulator = 0;
    let lastWheelTime = Date.now();

    const handleWheel = (e: WheelEvent) => {
      if (!enableScrollRef.current) return;
      const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (isVerticalScroll) return;

      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime > 200) wheelAccumulator = 0;
      lastWheelTime = now;
      wheelAccumulator += e.deltaX;

      if (Math.abs(wheelAccumulator) > scrollThresholdRef.current) {
        const currentIndex = Math.round(scrollX.get());
        jumpToIndex(wheelAccumulator > 0 ? currentIndex + 1 : currentIndex - 1);
        wheelAccumulator = 0;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [jumpToIndex, scrollX]);

  const onDragStart = () => setIsDragging(true);

  const onDrag = (_: any, info: PanInfo) => {
    // Sensibilidad dinámica basada en el gap actual
    const deltaIndex = -info.delta.x / (dims.gap * 0.8);
    scrollX.set(springX.get() + deltaIndex);
  };

  const onDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const projected = springX.get() - info.velocity.x * 0.002;
    const targetIndex = Math.round(projected);
    jumpToIndex(targetIndex);
  };

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") jumpToIndex(activeIndex - 1);
      if (e.key === "ArrowRight") jumpToIndex(activeIndex + 1);
    },
    [activeIndex, jumpToIndex],
  );

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-transparent focus:outline-none touch-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      } ${className ?? ""}`}
      style={{ perspective: 2000 }}
      tabIndex={0}
      onKeyDown={onKeyDown}
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

// --- CARD COMPONENT ---
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
}: CardProps) {
  const position = useTransform(scrollX, (value) => index - value);
  const zIndex = useTransform(position, (pos) => 1000 - Math.abs(pos) * 10);

  const t = useTransform(position, (pos) => {
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
  const brightness = useTransform(position, (pos) => (Math.abs(pos) < 0.5 ? 1 : 0.5));

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