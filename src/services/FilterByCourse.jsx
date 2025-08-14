import { menu } from "../data/Menu.jsx";

export const forrett = menu.filter(item => item.kategori === "Forrett");
export const hovedrett = menu.filter(item => item.kategori === "Hovedrett");
export const desserts = menu.filter(item => item.kategori === "Dessert");