import LatestProducts from "@/components/pageSection/HomePage/LatestProducts";
import MoreExplore from "@/components/pageSection/HomePage/MoreExplore";
import Refresh from "@/components/pageSection/HomePage/Refresh";
import TopBanner from "@/components/pageSection/HomePage/TopBanner";
import Trading from "@/components/pageSection/HomePage/Trending";
import Vintage from "@/components/pageSection/HomePage/Vintage";

export default function Home() {
  return (
    <main className="mx-auto">
      <TopBanner />
      <MoreExplore />
      <LatestProducts />
      <Refresh />
      <Trading />
      <Vintage />
    </main>
  );
}
