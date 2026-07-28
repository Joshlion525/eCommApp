import { Container } from "./ui";
import { ClockIcon, LeafIcon, SproutIcon, TruckIcon } from "./icons";

const items = [
  {
    icon: LeafIcon,
    title: "Locally sourced",
    text: "Produce from farms within 50 miles, delivered daily.",
  },
  {
    icon: TruckIcon,
    title: "Fast delivery",
    text: "Hot to your door in about 30 minutes, free over $40.",
  },
  {
    icon: ClockIcon,
    title: "Order ahead",
    text: "Skip the wait — schedule pickup for any time slot.",
  },
  {
    icon: SproutIcon,
    title: "Something for everyone",
    text: "Vegan, veggie and gluten-free options on every menu.",
  },
];

export function ValueProps() {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
