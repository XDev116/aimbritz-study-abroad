import { BrandPromise } from "@/components/home/brand-promise";
import { Destinations } from "@/components/home/destinations";
import { FeaturedUniversities } from "@/components/home/featured-universities";
import { ReelsEditorial } from "@/components/home/reels-editorial";
import { CeoModule } from "@/components/home/ceo-module";
import { CtaBold } from "@/components/home/cta-bold";
import { UniversityMarquee } from "@/components/home/university-marquee";
import { AimedicosBanner } from "@/components/home/aimmedicos-banner";

export default function HomePage() {
  return (
    <>
      <BrandPromise />
      <Destinations />
      <FeaturedUniversities />
      <ReelsEditorial />
      <CeoModule />
      <AimedicosBanner />
      <UniversityMarquee />
      <CtaBold />
    </>
  );
}
