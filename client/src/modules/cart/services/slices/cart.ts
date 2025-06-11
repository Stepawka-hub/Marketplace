import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleArrayItem } from "@shared/helpers/array-helper";
import { TProduct } from "@types";
import { TCartState } from "./types";

const initialState: TCartState = {
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
  ],
  selectedIds: [],
  isLoadingProducts: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleSelectedProduct: (state, { payload }: PayloadAction<string>) => {
      state.selectedIds = toggleArrayItem(state.selectedIds, payload);
    },
    addProduct: (state, { payload }: PayloadAction<TProduct>) => {
      state.products = [...state.products, payload];
    },
    removeProduct: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== payload);
      state.selectedIds = state.selectedIds.filter((id) => id !== payload);
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getCartTotalItems: (state) => state.products.length,
    getIsLoadingProducts: (state) => state.isLoadingProducts,
    getSelectedIds: (state) => state.selectedIds,
    getSelectedItemsCount: (state) => state.selectedIds.length,
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, toggleSelectedProduct } = cartSlice.actions;
export const {
  getProducts,
  getSelectedIds,
  getIsLoadingProducts,
  getCartTotalItems,
  getSelectedItemsCount,
} = cartSlice.selectors;
