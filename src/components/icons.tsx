import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Base>
);

export const SearchIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Base>
);

export const BagIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 8h12l-1 12H7L6 8Z" />
    <path d="M9 8a3 3 0 0 1 6 0" />
  </Base>
);

export const UserIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20a8 8 0 0 1 16 0" />
  </Base>
);

export const HeartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5 6 5c2 0 3.2 1.2 4 2.5C10.8 6.2 12 5 14 5c3.5 0 5 3.5 3.5 6.5C19 15.65 12 20 12 20Z" />
  </Base>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5Z" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);

export const TruckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const ReturnIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 8a9 9 0 1 1-1 4" />
    <path d="M3 4v4h4" />
  </Base>
);

export const SupportIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" />
    <path d="M20 19a3 3 0 0 1-3 3h-3" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12 5 5 9-11" />
  </Base>
);

export const LeafIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16-1 0-2-1-2-2Z" />
    <path d="M9 15c3-3 5-5 8-7" />
  </Base>
);

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </Base>
);

export const XSocialIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4l16 16M20 4 4 20" />
  </Base>
);

export const TiktokIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 4v9.5a4 4 0 1 1-4-4" />
    <path d="M14 6a5 5 0 0 0 5 5" />
  </Base>
);

export const PlusIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const ClockIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);

export const UtensilsIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 3v8a2 2 0 0 0 2 2v8M7 3v6M10 3v6" />
    <path d="M17 3c-1.5 1-2 3-2 6s.5 4 2 4v8" />
  </Base>
);

export const ChefHatIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 20h10M6 20a4 4 0 0 1-1-7.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 6.5A4 4 0 0 1 18 20" />
    <path d="M8 16h8" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21c4-4.5 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 3 6.5 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5c0 8 7 15 15 15l1-4-5-2-2 2a12 12 0 0 1-5-5l2-2-2-5-4 1Z" />
  </Base>
);

export const CalendarIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 10h16M9 3v4M15 3v4" />
  </Base>
);

export const FlameIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3c3 3 5 5.5 5 9a5 5 0 0 1-10 0c0-1.6.7-2.8 1.6-3.8C9 9.5 9 8 9 8c1 .5 2 1.4 2.4 2.6C12 8.5 12 5.5 12 3Z" />
  </Base>
);

export const SproutIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20v-8" />
    <path d="M12 12c0-3-2-5-6-5 0 3 2 5 6 5Z" />
    <path d="M12 11c0-3 2-5 6-5 0 3-2 5-6 5Z" />
  </Base>
);
