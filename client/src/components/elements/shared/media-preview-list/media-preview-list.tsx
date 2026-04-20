import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography } from "@mui/material";
import { MediaThumbnail } from "@/components/elements";
import { captionStyle, containerStyle, stackStyle } from "./styles";
import { TMediaPreviewListUIProps } from "./types";

export const MediaPreviewListUI: FC<TMediaPreviewListUIProps> = ({
  files,
  mainImageIndex,
  onSetMainImage,
  onRemove,
  getPreviewUrl,
}) => {
  const { t } = useTranslation();

  if (!files.length) {
    return null;
  }

  return (
    <Box sx={containerStyle}>
      <Typography variant="subtitle2" gutterBottom>
        {t("media-preview.title", {
          count: files.length,
        })}
        <Typography component="span" variant="caption" sx={captionStyle}>
          {t("media-preview.title-caption")}
        </Typography>
      </Typography>

      <Stack sx={stackStyle}>
        {files.map((file, idx) => {
          const isMain = mainImageIndex === idx;

          return (
            <MediaThumbnail
              key={idx}
              file={file}
              isMain={isMain}
              mainBadgeLabel={t("media-preview.main-badge")}
              previewUrl={getPreviewUrl(file)}
              onSelect={() => onSetMainImage(idx)}
              onRemove={() => onRemove(idx)}
            />
          );
        })}
      </Stack>
    </Box>
  );
};
