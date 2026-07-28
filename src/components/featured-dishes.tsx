import { getFeaturedDishes } from "@/lib/data";
import { ButtonLink, Container, Eyebrow } from "./ui";
import { ArrowRightIcon } from "./icons";
import { DishCard } from "./dish-card";

export async function FeaturedDishes() {
  const dishes = await getFeaturedDishes();

  return (
    <section id="featured" className="bg-surface py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Guest favourites</Eyebrow>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink">
              Straight from the pass
            </h2>
          </div>
          <ButtonLink href="#menu" variant="ghost" className="px-0">
            See the full menu
            <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </Container>
    </section>
  );
}
