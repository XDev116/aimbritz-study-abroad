import { MastheadHero } from "@/components/home/masthead-hero";
import { BrandPromise } from "@/components/home/brand-promise";
import { Destinations } from "@/components/home/destinations";
import { FeaturedUniversities } from "@/components/home/featured-universities";
import { JourneyPinned } from "@/components/home/journey-pinned";
import { StatsEditorial } from "@/components/home/stats-editorial";
import { ReelsEditorial } from "@/components/home/reels-editorial";
import { CeoModule } from "@/components/home/ceo-module";
import { CtaBold } from "@/components/home/cta-bold";

export default function HomePage() {
  return (
    <>
      <MastheadHero />
      <BrandPromise />
      <Destinations />
      <FeaturedUniversities />
      <JourneyPinned />
      <StatsEditorial />
      <ReelsEditorial />
      <CeoModule />
      <CtaBold />
    </>
  );
}
