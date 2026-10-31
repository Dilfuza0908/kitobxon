import { BOOKS } from "./data/books";

export const getBook = (id) => BOOKS.find((b) => b.id === id);
export const money = (n) => n.toLocaleString("ru-RU").replace(/\u00a0/g, " ") + " so'm";
// 150 000 so'mdan yuqori buyurtmada yetkazib berish bepul
export const shipping = (sum) => (sum >= 150000 ? 0 : 15000);