import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLotState, TProductPreviewData } from "./types";

const initialState: TLotState = {
  isCreationModalOpen: false,
  productData: {
    productId: null,
    productName: "",
    productPreview: null,
  },
};

const lotSlice = createSlice({
  name: "lot",
  initialState,
  reducers: {
    openLotCreationModal: (
      state,
      { payload }: PayloadAction<TProductPreviewData>,
    ) => {
      const { productId, productName, productPreview = null } = payload;

      state.isCreationModalOpen = true;
      state.productData = {
        productId,
        productName,
        productPreview,
      };
    },
    closeLotCreationModal: (state) => {
      state.isCreationModalOpen = false;
      state.productData = {
        productId: null,
        productName: "",
        productPreview: null,
      };
    },
  },
  selectors: {
    getIsLotCreationModalOpen: (state) => state.isCreationModalOpen,
    getLotCreationProductData: (state) => state.productData,
  },
});

export const { openLotCreationModal, closeLotCreationModal } = lotSlice.actions;

export const { getIsLotCreationModalOpen, getLotCreationProductData } =
  lotSlice.selectors;

export default lotSlice.reducer;
