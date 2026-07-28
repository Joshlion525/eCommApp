import { ButtonLink, Container } from "./ui";
import { ArrowRightIcon, FlameIcon } from "./icons";
import { gradientFor } from "@/lib/placeholder";

export function StoryBanner() {
  return (
    <section id="story" className="bg-ink py-20 text-white">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div
          className="relative aspect-5/4 overflow-hidden rounded-3xl ring-1 ring-white/10"
          style={{ background: gradientFor("our-story") }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl italic text-ink/30">
              est. 2014
            </span>
          </div>
        </div>

        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            <FlameIcon className="h-4 w-4" /> Our story
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            From our kitchen to your table.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Saffron started as a tiny corner kitchen with one wood-fired oven and
            a simple belief: good food is made from good ingredients, cooked with
            care. A decade later, we still cook everything from scratch — and we
            still know most of our regulars by name.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-semibold">10 yrs</p>
              <p className="text-sm text-white/60">Serving the block</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">18</p>
              <p className="text-sm text-white/60">Local farm partners</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">100%</p>
              <p className="text-sm text-white/60">Made in-house</p>
            </div>
          </div>

          <ButtonLink
            href="#visit"
            className="mt-8 bg-white text-ink hover:bg-white/90 border-white"
          >
            Reserve a table
            <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
