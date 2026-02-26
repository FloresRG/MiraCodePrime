import { useCallback, useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type PanInfo,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

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

export interface CoverFlowRef {
  next: () => void;
  prev: () => void;
  jumpToIndex: (index: number) => void;
}

export const CoverFlow = forwardRef<CoverFlowRef, CoverFlowProps>(({
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
}, ref) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
        const mobileH = mobileW * (10 / 16);
        setDims({
          width: mobileW,
          height: mobileH,
          gap: width * 0.35,
          spacing: 40
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
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });

  const jumpToIndex = useCallback(
    (index: number) => {
      let target = index;
      if (index >= items.length) target = 0;
      if (index < 0) target = items.length - 1;

      setActiveIndex(target);
      onIndexChange?.(target);
      scrollX.set(target);
    },
    [items.length, scrollX, onIndexChange],
  );

  useImperativeHandle(ref, () => ({
    next: () => jumpToIndex(activeIndex + 1),
    prev: () => jumpToIndex(activeIndex - 1),
    jumpToIndex,
  }), [activeIndex, jumpToIndex]);

  useEffect(() => {
    if (!autoplay || isDragging || isHovered) return;
    const interval = setInterval(() => {
      jumpToIndex(activeIndex + 1);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, activeIndex, isDragging, isHovered, jumpToIndex, autoplayInterval]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enableScroll) return;

    let wheelAccumulator = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && !e.shiftKey) {
        return;
      }

      e.preventDefault();
      wheelAccumulator += delta;

      if (Math.abs(wheelAccumulator) > scrollThreshold) {
        isScrollingRef.current = true;
        if (wheelAccumulator > 0) jumpToIndex(activeIndex + 1);
        else jumpToIndex(activeIndex - 1);
        wheelAccumulator = 0;
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 300);
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
      className={cn(
        "relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-transparent focus:outline-none touch-none transition-all duration-300",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        className
      )}
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
    </motion.div>
  );
});

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
  const zIndex = useTransform(position, (pos: number) => 1000 - Math.floor(Math.abs(pos) * 10));

  const t = useTransform(position, (pos: number) => {
    const absPos = Math.abs(pos);
    let rY = pos < -0.5 ? rotation : pos > 0.5 ? -rotation : -pos * (rotation * 2);

    let x = 0;
    const stackIndex = Math.max(0, absPos - 1);
    if (pos < 0) x = absPos < 1 ? pos * centerGap : -centerGap - stackIndex * stackSpacing;
    else x = absPos < 1 ? pos * centerGap : centerGap + stackIndex * stackSpacing;

    const z = absPos > 0.5 ? -300 : Math.abs(pos) * -500;
    return { rotateY: rY, x, z };
  });

  const rotateY = useTransform(t, (v) => v.rotateY);
  const x = useTransform(t, (v) => v.x);
  const z = useTransform(t, (v) => v.z);

  const filter = useTransform(position, (pos: number) => {
    const b = Math.abs(pos) < 0.5 ? 1 : 0.7;
    const s = Math.abs(pos) < 0.5 ? 1 : 0.8;
    return `brightness(${b}) saturate(${s})`;
  });

  return (
    <motion.div
      className={cn(
        "absolute top-1/2 left-1/2 preserve-3d will-change-transform rounded-2xl overflow-hidden",
        isDragging ? "cursor-grabbing" : (isActive || enableClickToSnap ? "cursor-pointer" : "cursor-grab")
      )}
      style={{
        width,
        height,
        marginTop: -height / 2,
        marginLeft: -width / 2,
        x, z, rotateY, zIndex,
        filter: filter,
        pointerEvents: "auto",
      }}
      onClick={onClick}
      whileHover={isActive ? { scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full h-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-card border border-white/10 group overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-110"
          draggable={false}
        />
        {/* Shadow Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500",
          isActive ? "opacity-30" : "opacity-60"
        )} />

        {/* Project Label */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center justify-center transition-all duration-500",
          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase text-center drop-shadow-lg">
            {item.title}
          </span>
          <span className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mt-1 animate-pulse">
            Ver Proyecto
          </span>
        </div>

        {/* Side card hints */}
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <span className="text-white/60 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-center">
              {item.title}
            </span>
          </div>
        )}
      </div>

      {enableReflection && (
        <div
          className="absolute left-0 right-0 overflow-hidden pointer-events-none"
          style={{ top: "100%", width, height: height * 0.35, marginTop: "8px" }}
        >
          <div className="relative w-full h-full opacity-20" style={{ transform: "scaleY(-1)" }}>
            <img src={item.image} alt="" className="w-full h-full object-cover blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-transparent" />
          </div>
        </div>
      )}
    </motion.div>
  );
}