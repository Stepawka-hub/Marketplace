import { TProductDetails, TProductListItem } from "@/shared/types";
import { TPaginatedResponse, TServerResponse } from "../base";

export type TCreateProductRequest = FormData;

export type TCreateProductResponse = TServerResponse<TProductDetails>;

export type TProductsResponse = TPaginatedResponse<TProductListItem>["data"];
