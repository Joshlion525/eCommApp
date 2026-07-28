import { Container } from "./ui";
import { InstagramIcon, FlameIcon, TiktokIcon, XSocialIcon } from "./icons";

const columns = [
  {
    title: "Menu",
    links: ["Starters", "Wood-fired pizza", "Mains", "Bowls & salads", "Desserts", "Drinks"],
  },
  {
    title: "Visit",
    links: ["Book a table", "Opening hours", "Find us", "Private events", "Gift cards"],
  },
  {
    title: "Company",
    links: ["Our story", "Careers", "Suppliers", "Press", "Contact"],
  },
];

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "TikTok", Icon: TiktokIcon },
  { label: "X", Icon: XSocialIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="font-display text-2xl font-semibold text-ink">
            Saffron
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            A neighbourhood kitchen serving honest, seasonal food cooked over open
            flame. Dine in, pick up, or order delivery.
          </p>
          <p className="mt-4 text-sm text-muted">
            128 Elm Street, NY 10012
            <br />
            (212) 555-0142
          </p>
          <div className="mt-6 flex items-center gap-2">
            {socials.map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Saffron. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
            <span className="inline-flex items-center gap-1">
              <FlameIcon className="h-3.5 w-3.5 text-brand-600" />
              Cooked with fire
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
