import { TBid } from "@/shared/types";

export type TBidsListUIProps = {
  items: TBid[];
  handleCardClick: (id: string) => void;
  handleDelete: (id: string) => void;
};
