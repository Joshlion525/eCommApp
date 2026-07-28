import type { Dish, Diet } from "@/lib/data";
import { formatPrice } from "@/lib/money";
import { gradientFor, monogram } from "@/lib/placeholder";
import { ChefHatIcon, FlameIcon, StarIcon } from "./icons";
import { AddToOrderButton } from "./dish-actions";

const tagStyles: Record<NonNullable<Dish["tag"]>, string> = {
  popular: "bg-brand-600 text-white",
  new: "bg-ink text-white",
  chef: "bg-brand-100 text-brand-800",
};

const tagLabel: Record<NonNullable<Dish["tag"]>, string> = {
  popular: "Popular",
  new: "New",
  chef: "Chef's pick",
};

const dietLabel: Record<Diet, string> = {
  veg: "Veggie",
  vegan: "Vegan",
  gf: "Gluten-free",
  spicy: "Spicy",
};

function DietChip({ diet }: { diet: Diet }) {
  const spicy = diet === "spicy";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
        spicy ? "bg-spicy/10 text-spicy" : "bg-veg/10 text-veg"
      }`}
    >
      {spicy && <FlameIcon className="h-3 w-3" />}
      {dietLabel[diet]}
    </span>
  );
}

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group flex flex-col">
      <div
        className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl ring-1 ring-black/5"
        style={{ background: gradientFor(dish.slug) }}
      >
        <span className="select-none font-display text-5xl font-semibold text-ink/15">
          {monogram(dish.name)}
        </span>

        {dish.tag && (
          <span
            className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${tagStyles[dish.tag]}`}
          >
            {dish.tag === "chef" && <ChefHatIcon className="h-3.5 w-3.5" />}
            {tagLabel[dish.tag]}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <StarIcon className="h-4 w-4 text-brand-500" />
          <span className="font-medium text-ink">{dish.rating}</span>
          <span>({dish.reviewCount})</span>
        </div>

        <h3 className="mt-1.5 text-base font-semibold text-ink">{dish.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {dish.description}
        </p>

        {dish.diet.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {dish.diet.map((d) => (
              <DietChip key={d} diet={d} />
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-ink">
            {formatPrice(dish.priceCents)}
          </span>
          <AddToOrderButton dishName={dish.name} />
        </div>
      </div>
    </article>
  );
}
