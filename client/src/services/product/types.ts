import { TProductListItem } from "@/shared/types";
import { TPaginatedResponse } from "../base";

export type TProductsResponse = TPaginatedResponse<TProductListItem>["data"];
