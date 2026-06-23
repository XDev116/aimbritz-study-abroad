import { BrandPromise } from "@/components/home/brand-promise";
import { Destinations } from "@/components/home/destinations";
import { FeaturedUniversities } from "@/components/home/featured-universities";
import { ReelsEditorial } from "@/components/home/reels-editorial";
import { CeoModule } from "@/components/home/ceo-module";
import { CtaBold } from "@/components/home/cta-bold";
import { UniversityMarquee } from "@/components/home/university-marquee";

export default function HomePage() {
  return (
    <>
      {/* Combined Hero → Promise: hero shrinks into card, fades, signature takes over */}
      <BrandPromise />
      <Destinations />
      <FeaturedUniversities />
      <ReelsEditorial />
      <CeoModule />
      <UniversityMarquee />
      <CtaBold />
    </>
  );
}
