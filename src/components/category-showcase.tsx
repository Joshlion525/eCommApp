import { getMenuCategories } from "@/lib/data";
import { gradientFor } from "@/lib/placeholder";
import { Container, Eyebrow } from "./ui";
import { ArrowUpRightIcon } from "./icons";

export async function CategoryShowcase() {
  const categories = await getMenuCategories();

  return (
    <section id="menu" className="py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Explore the menu</Eyebrow>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink">
              What are you craving?
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Six sections, one kitchen — from wood-fired pizza and small plates to
            bowls, desserts and a proper drinks list.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#featured"
              className="group relative flex aspect-4/3 flex-col justify-end overflow-hidden rounded-2xl p-5 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
              style={{ background: gradientFor(category.slug) }}
            >
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-surface/70 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
              <h3 className="font-display text-xl font-medium text-ink">
                {category.name}
              </h3>
              <p className="mt-0.5 text-sm text-ink/60">
                {category.itemCount} dishes
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
