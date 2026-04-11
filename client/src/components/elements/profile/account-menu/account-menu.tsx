import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, IconButton, Menu, Tooltip } from "@mui/material";
import { menuBoxStyle, menuPaperStyle } from "./styles";
import { TAccountMenuProps } from "./type";

export const AccountMenuUI: FC<TAccountMenuProps> = ({
  isOpen,
  anchorEl,
  items,
  avatar,
  onClick,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={menuBoxStyle}>
        <Tooltip title={t("profile.account-menu.tool-tip")}>
          <IconButton
            size="small"
            aria-controls={isOpen ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}
            onClick={onClick}
          >
            {avatar}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={isOpen}
        slotProps={{
          paper: {
            elevation: 0,
            sx: menuPaperStyle,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={onClose}
        onClick={onClose}
      >
        {items}
      </Menu>
    </>
  );
};
