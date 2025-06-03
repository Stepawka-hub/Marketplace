import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCatalogState, TFilter } from "../types/types";

const initialState: TCatalogState = {
  products: [
    {
      id: "1",
      name: "Смартфон iPhone 15 Pro",
      description:
        "Новый флагманский смартфон с процессором A17 Pro и камерой 48 МП",
      shortDescription: "Флагман 2023 года с динамическим островом",
      category: "category 1",
      image: "https://example.com/iphone15.jpg",
      price: 99999,
      owner: {
        id: "user1",
        name: "Apple Store",
      },
      createdAt: "2023-09-20",
      updatedAt: "2023-10-15",
    },
    {
      id: "2",
      name: "Ноутбук MacBook Air M2",
      description: "Ультратонкий ноутбук с дисплеем Retina и чипом Apple M2",
      shortDescription: '13.6", 8-core GPU, 8GB RAM',
      category: "category 1",
      image: "https://example.com/macbook-air.jpg",
      price: 89990,
      owner: {
        id: "user1",
        name: "Apple Store",
      },
      createdAt: "2022-07-15",
    },
    {
      id: "3",
      name: "Беспроводные наушники Sony WH-1000XM5",
      description:
        "Наушники с шумоподавлением и 30-часовой работой от аккумулятора",
      category: "category 1",
      image: "https://example.com/sony-xm5.jpg",
      price: 34990,
      owner: {
        id: "user2",
        name: "Sony Center",
      },
      createdAt: "2023-05-10",
    },
    {
      id: "4",
      name: "Умные часы Samsung Galaxy Watch 6",
      description: "Смарт-часы с измерением ЭКГ, пульса и давления",
      category: "category 2",
      image: "https://example.com/galaxy-watch6.jpg",
      price: 29990,
      owner: {
        id: "user3",
        name: "Samsung Official",
      },
      createdAt: "2023-08-12",
    },
    {
      id: "5",
      name: "Электросамокат Xiaomi Pro 2",
      description: "Мощный электросамокат с запасом хода 45 км",
      shortDescription: "30 км/ч, 45 км пробег, вес 14.2 кг",
      category: "category 1",
      image: "https://example.com/xiaomi-pro2.jpg",
      price: 42990,
      owner: {
        id: "user4",
        name: "Xiaomi Russia",
      },
      createdAt: "2023-03-05",
    },
    {
      id: "6",
      name: "Фотоаппарат Canon EOS R6 Mark II",
      description: "Зеркальная камера с матрицей 24.2 МП и 6K видео",
      category: "category 2",
      image: "https://example.com/canon-r6.jpg",
      price: 189990,
      owner: {
        id: "user5",
        name: "Canon Pro",
      },
      createdAt: "2022-11-30",
    },
    {
      id: "7",
      name: "Игровая консоль PlayStation 5",
      description: "Консоль нового поколения с SSD и 4K графикой",
      shortDescription: "825GB SSD, 4K/120fps, Blu-ray",
      category: "category 2",
      image: "https://example.com/ps5.jpg",
      price: 64990,
      owner: {
        id: "user6",
        name: "GameWorld",
      },
      createdAt: "2023-01-20",
    },
    {
      id: "8",
      name: "Электронная книга PocketBook 740",
      description: "7.8-дюймовый ридер с подсветкой и защитой от воды",
      category: "category 2",
      image: "https://example.com/pocketbook740.jpg",
      price: 24990,
      owner: {
        id: "user7",
        name: "BookStore",
      },
      createdAt: "2023-07-18",
    },
    {
      id: "9",
      name: "Электронная книга PocketBook 740",
      description: "7.8-дюймовый ридер с подсветкой и защитой от воды",
      category: "category 2",
      image: "https://example.com/pocketbook740.jpg",
      price: 24990,
      owner: {
        id: "user7",
        name: "BookStore",
      },
      createdAt: "2023-07-18",
    },
    {
      id: "10",
      name: "Электронная книга PocketBook 740",
      description: "7.8-дюймовый ридер с подсветкой и защитой от воды",
      category: "category 2",
      image: "https://example.com/pocketbook740.jpg",
      price: 24990,
      owner: {
        id: "user7",
        name: "BookStore",
      },
      createdAt: "2023-07-18",
    },
    {
      id: "11",
      name: "Электронная книга PocketBook 740",
      description: "7.8-дюймовый ридер с подсветкой и защитой от воды",
      category: "category 2",
      image: "https://example.com/pocketbook740.jpg",
      price: 24990,
      owner: {
        id: "user7",
        name: "BookStore",
      },
      createdAt: "2023-07-18",
    },
    {
      id: "12",
      name: "Электронная книга PocketBook 740",
      description: "7.8-дюймовый ридер с подсветкой и защитой от воды",
      category: "category 2",
      image: "https://example.com/pocketbook740.jpg",
      price: 24990,
      owner: {
        id: "user7",
        name: "BookStore",
      },
      createdAt: "2023-07-18",
    },
  ],
  searchQuery: "",
  filters: {
    price: {
      min: 0,
      max: 10000,
    },
    category: "category 1",
  },
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setFilters: (state, { payload }: PayloadAction<TFilter>) => {
      state.filters = payload;
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getSearchQuery: (state) => state.searchQuery,
    getFilters: (state) => state.filters,
  },
});

export default catalogSlice.reducer;
export const { setSearchQuery, setFilters } = catalogSlice.actions;
export const { getProducts, getSearchQuery, getFilters } =
  catalogSlice.selectors;
