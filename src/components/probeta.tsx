
import { CoverFlow, type CoverFlowItem } from "@/components/ui/coverflow";

const animeItems: CoverFlowItem[] = [
  { id: 1, image: "/anime/Sanemi.jpeg", title: "Sanemi Sanemi" },
  { id: 2, image: "/anime/Obanai.jpeg", title: "Obanai Iguro" },
  { id: 3, image: "/anime/Mitsuri.jpeg", title: "Mitsuri Kanroji" },
  { id: 4, image: "/anime/giyu.jpeg", title: "Giyu Tomioka" },
  { id: 5, image: "/anime/Shinobu.jpeg", title: "Shinobu Kocho" },
  { id: 6, image: "/anime/kanao.jpeg", title: "Kanao Tsuyuri" },
  { id: 7, image: "/anime/Tanjiro.jpeg", title: "Tanjiro Kamado" },
  { id: 8, image: "/anime/Nezuko.jpeg", title: "Nezuko Kamado" },
  { id: 9, image: "/anime/Zenitsu.jpeg", title: "Zenitsu Agatsuma" },
  { id: 10, image: "/anime/Inosuke.jpeg", title: "Inosuke Hashibira" },
  { id: 11, image: "/anime/tokitou.jpeg", title: "Muichiro Tokito" },
];

export default function CoverFlowDemo() {
  return (
    <div className="h-[400px] w-full border-b border-border/40 relative bg-background">
      <CoverFlow
        items={animeItems}
        itemWidth={250}
        itemHeight={250}
        initialIndex={5}
        enableScroll={true}
        scrollThreshold={60}
        centerGap={180}
        stackSpacing={60}
        enableReflection={true}
      />
    </div>
  );
}
