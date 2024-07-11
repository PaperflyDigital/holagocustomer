import LatestProducts from "@/components/pageSection/HomePage/LatestProducts";
import MoreExplore from "@/components/pageSection/HomePage/MoreExplore";
import Refresh from "@/components/pageSection/HomePage/Refresh";
import TopBanner from "@/components/pageSection/HomePage/TopBanner";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <MoreExplore />
      <LatestProducts />
      <Refresh />
    </main>
  );
}
