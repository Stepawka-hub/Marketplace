import { ThemeSwitcherUI } from "@/components/elements";
import { useMenu } from "@/hooks/useMenu";
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/providers";
import { FC } from "react";

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const { isOpen, anchorRef, handleOpen, handleClose } = useMenu();

  const handleMenuItemClick = (value: Theme) => {
    setTheme(value);
    handleClose();
  };

  return (
    <ThemeSwitcherUI
      value={theme}
      isOpen={isOpen}
      anchorRef={anchorRef}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleClick={handleMenuItemClick}
    />
  );
};
