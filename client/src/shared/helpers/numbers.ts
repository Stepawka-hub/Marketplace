import { LOCALE_MAP } from "@/shared/constants";

export const formattedWithSpace = (number: number, locale = "ru") =>
  new Intl.NumberFormat(LOCALE_MAP[locale], {
    style: "decimal",
  }).format(number);

export const calculateTotalPrice = <T extends { id: K; price: number }, K>(
  products: T[],
  selectedIds: K[]
) =>
  products
    .filter((p) => selectedIds.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0);
