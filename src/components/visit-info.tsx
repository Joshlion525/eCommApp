import { Container, Eyebrow, ButtonLink } from "./ui";
import { CalendarIcon, MapPinIcon, PhoneIcon } from "./icons";
import { gradientFor } from "@/lib/placeholder";

const hours = [
  { days: "Monday – Thursday", time: "12:00 – 22:00" },
  { days: "Friday – Saturday", time: "12:00 – 23:30" },
  { days: "Sunday", time: "12:00 – 21:00" },
];

export function VisitInfo() {
  return (
    <section id="visit" className="py-20">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col">
            <Eyebrow>
              <MapPinIcon className="h-4 w-4" /> Visit us
            </Eyebrow>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink">
              Come say hi
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Find us on the corner of Elm &amp; 5th. Walk-ins are always welcome,
              but we recommend booking ahead for dinner and weekends.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <dd className="text-ink">
                  128 Elm Street, Cornerstone District, NY 10012
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <dd className="text-ink">(212) 555-0142</dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
              <h3 className="text-sm font-semibold text-ink">Opening hours</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex justify-between gap-4 text-muted"
                  >
                    <span>{row.days}</span>
                    <span className="font-medium text-ink">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#visit">
                <CalendarIcon className="h-4 w-4" />
                Book a table
              </ButtonLink>
              <ButtonLink href="#featured" variant="secondary">
                Order for delivery
              </ButtonLink>
            </div>
          </div>

          <div
            className="relative min-h-72 overflow-hidden rounded-3xl ring-1 ring-black/5"
            style={{ background: gradientFor("map-location") }}
          >
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-lg ring-4 ring-white/60">
                <MapPinIcon className="h-6 w-6" />
              </span>
              <p className="mt-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-ink">
                Saffron · Elm &amp; 5th
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
