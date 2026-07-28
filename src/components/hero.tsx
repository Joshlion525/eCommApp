import { ButtonLink, Container, Eyebrow } from "./ui";
import { ArrowRightIcon, FlameIcon, StarIcon, ClockIcon } from "./icons";
import { gradientFor } from "@/lib/placeholder";

const tiles = [
  { seed: "pizza", label: "Wood-fired" },
  { seed: "mains", label: "From the grill" },
  { seed: "desserts", label: "Something sweet" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
          <Eyebrow>
            <FlameIcon className="h-4 w-4" /> Fresh · Seasonal · Wood-fired
          </Eyebrow>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Real food, made with{" "}
            <span className="italic text-brand-700">fire</span> &amp; love.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A neighbourhood kitchen serving honest, seasonal plates — cooked over
            open flame and delivered to your door, hot and fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#menu">
              View the menu
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#visit" variant="secondary">
              Book a table
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <dt className="text-2xl font-semibold text-ink">4.9★</dt>
              <dd className="text-sm text-muted">2,400+ reviews</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-ink">30 min</dt>
              <dd className="text-sm text-muted">Avg. delivery</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-ink">Est. 2014</dt>
              <dd className="text-sm text-muted">In the neighbourhood</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="col-span-1 row-span-2 flex aspect-3/4 items-end rounded-3xl p-6 shadow-sm ring-1 ring-black/5"
              style={{ background: gradientFor(tiles[0].seed) }}
            >
              <span className="font-display text-xl font-medium text-ink/70">
                {tiles[0].label}
              </span>
            </div>
            <div
              className="flex aspect-square items-end rounded-3xl p-5 shadow-sm ring-1 ring-black/5"
              style={{ background: gradientFor(tiles[1].seed) }}
            >
              <span className="font-display text-lg font-medium text-ink/70">
                {tiles[1].label}
              </span>
            </div>
            <div
              className="flex aspect-square items-end rounded-3xl p-5 shadow-sm ring-1 ring-black/5"
              style={{ background: gradientFor(tiles[2].seed) }}
            >
              <span className="font-display text-lg font-medium text-ink/70">
                {tiles[2].label}
              </span>
            </div>
          </div>

          <div className="absolute -left-4 top-8 hidden rounded-2xl bg-surface px-4 py-3 shadow-lg ring-1 ring-black/5 sm:block">
            <div className="flex items-center gap-1 text-brand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5" />
              ))}
            </div>
            <p className="mt-1 text-xs font-medium text-ink">
              “Best pizza in the city”
            </p>
          </div>

          <div className="absolute -bottom-4 right-6 flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-lg ring-1 ring-black/5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-700">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">Delivered in 30 min</p>
              <p className="text-xs text-muted">Free over $40</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
