import { FC } from "react";
import { useDisableAutoBidMutation } from "@/services";
import { DisableAutoBidButtonUI } from "@/components/elements";
import { TDisableAutoBidButtonProps } from "./types";

export const DisableAutoBidButton: FC<TDisableAutoBidButtonProps> = ({
  lotId,
}) => {
  const [disableAutoBid, { isLoading: isDisabling }] =
    useDisableAutoBidMutation();

  const onClick = () => {
    disableAutoBid({
      lotId,
    });
  };

  return (
    <DisableAutoBidButtonUI isDisabling={isDisabling} handleAction={onClick} />
  );
};
