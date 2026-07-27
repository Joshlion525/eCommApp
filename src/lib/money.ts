const DEFAULT_CURRENCY = "USD";

export function formatPrice(
  cents: number,
  currency: string = DEFAULT_CURRENCY,
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export function parsePriceToCents(input: string | number): number {
  const value = typeof input === "number" ? input : parseFloat(input);
  if (Number.isNaN(value)) return 0;
  return Math.round(value * 100);
}

export function centsToDecimal(cents: number): number {
  return Math.round(cents) / 100;
}
