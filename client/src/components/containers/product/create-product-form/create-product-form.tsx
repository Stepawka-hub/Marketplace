import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateProductMutation } from "@/services";
import { requiredValidation } from "@/shared/helpers";

import { Input, FileUpload, MediaPreviewList } from "@/components/containers";
import { Form } from "@/components/elements";
import { CenteredBox, SubmitButton } from "@/components/ui";
import {
  Title as TitleIcon,
  Description as DescriptionIcon,
  Category as CategoryIcon,
  Image as ImageIcon,
} from "@mui/icons-material";
import { CREATE_PRODUCT_FIELDS } from "./constants";
import { TCreateProductForm } from "./type";

export const CreateProductForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TCreateProductForm>({ mode: "onChange" });
  const { register, handleSubmit, setValue } = methods;

  const [createProduct, { isLoading }] = useCreateProductMutation();
  const { NAME, SHORT_DESCRIPTION, DESCRIPTION, CATEGORY, MEDIA } =
    CREATE_PRODUCT_FIELDS;

  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);

  const getFieldTranslation = (field: string, type: "label" | "placeholder") =>
    t(`create-product.form.fields.${field}.${type}`);

  const handleMediaUpload = (files: File[]) => {
    setMediaFiles(files);
    setValue(MEDIA, files);

    if (files.length > 0 && mainImageIndex === -1) {
      setMainImageIndex(0);
    }
  };

  const handleRemoveMedia = (index: number) => {
    const newMediaFiles = mediaFiles.filter((_, i) => i !== index);
    setMediaFiles(newMediaFiles);
    setValue(MEDIA, newMediaFiles);

    if (index === mainImageIndex) {
      setMainImageIndex(newMediaFiles.length > 0 ? 0 : -1);
    } else if (index < mainImageIndex) {
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  const onSubmit = handleSubmit(async (formData) => {
    const submitData = new FormData();
    submitData.append(NAME, formData[NAME]);
    submitData.append(SHORT_DESCRIPTION, formData[SHORT_DESCRIPTION]);
    submitData.append(DESCRIPTION, formData[DESCRIPTION] || "");
    submitData.append(CATEGORY, formData[CATEGORY]);
    submitData.append("mainImageIndex", String(mainImageIndex));

    if (formData[MEDIA] && Array.isArray(formData[MEDIA])) {
      formData[MEDIA].forEach((file: File) => {
        submitData.append(MEDIA, file);
      });
    }

    await createProduct(submitData);
  });

  return (
    <CenteredBox>
      <FormProvider {...methods}>
        <Form title={t("create-product.form.title")} onSubmit={onSubmit}>
          <Input
            label={getFieldTranslation(NAME, "label")}
            placeholder={getFieldTranslation(NAME, "placeholder")}
            {...register(NAME, {
              ...requiredValidation(t),
            })}
            startIcon={<TitleIcon />}
          />

          <Input
            label={getFieldTranslation(SHORT_DESCRIPTION, "label")}
            placeholder={getFieldTranslation(SHORT_DESCRIPTION, "placeholder")}
            {...register(SHORT_DESCRIPTION, {
              ...requiredValidation(t),
            })}
            startIcon={<DescriptionIcon />}
          />

          <Input
            label={getFieldTranslation(DESCRIPTION, "label")}
            placeholder={getFieldTranslation(DESCRIPTION, "placeholder")}
            {...register(DESCRIPTION)}
            multiline
            rows={4}
            startIcon={<DescriptionIcon />}
          />

          <Input
            label={getFieldTranslation(CATEGORY, "label")}
            placeholder={getFieldTranslation(CATEGORY, "placeholder")}
            {...register(CATEGORY, {
              ...requiredValidation(t),
            })}
            startIcon={<CategoryIcon />}
          />

          <FileUpload
            label={getFieldTranslation(MEDIA, "label")}
            placeholder={getFieldTranslation(MEDIA, "placeholder")}
            accept="image/*"
            startIcon={<ImageIcon />}
            multiple
            onFileSelect={handleMediaUpload}
          />

          <MediaPreviewList
            files={mediaFiles}
            mainImageIndex={mainImageIndex}
            onSetMainImage={setMainImageIndex}
            onRemove={handleRemoveMedia}
          />

          <SubmitButton disabled={isLoading}>
            {t(isLoading ? "common.actions.saving" : "common.actions.save")}
          </SubmitButton>
        </Form>
      </FormProvider>
    </CenteredBox>
  );
};
