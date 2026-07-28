import { Hero } from "@/components/hero";
import { ValueProps } from "@/components/value-props";
import { CategoryShowcase } from "@/components/category-showcase";
import { FeaturedDishes } from "@/components/featured-dishes";
import { StoryBanner } from "@/components/story-banner";
import { VisitInfo } from "@/components/visit-info";
import { Newsletter } from "@/components/newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <CategoryShowcase />
      <FeaturedDishes />
      <StoryBanner />
      <VisitInfo />
      <Newsletter />
    </>
  );
}
