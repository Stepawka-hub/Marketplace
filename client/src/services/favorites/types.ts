import { TLotListItem } from "@/shared/types";
import { TPaginatedResponse } from "../base";

export type TFavoritesResponse = TPaginatedResponse<TLotListItem>["data"];
