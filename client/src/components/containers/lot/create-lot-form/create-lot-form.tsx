import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/elements";
import { CenteredBox, SubmitButton } from "@/components/ui";
import { CREATE_LOT_FIELDS } from "./constants";
import { TCreateLotForm } from "./type";

export const CreateLotForm: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const methods = useForm<TCreateLotForm>({ mode: "onChange" });
  const { register, handleSubmit, } =
    methods;

  const getFieldTranslation = (field: string, type: "label" | "placeholder") =>
    t(`create-product.form.fields.${field}.${type}`);

  const onSubmit = handleSubmit(async (formData) => {
  });

  return (
    <CenteredBox>
      <FormProvider {...methods}>
        <Form title={t("create-product.form.title")} onSubmit={onSubmit}>
          <SubmitButton>
            {t("common.actions.save")}
          </SubmitButton>
        </Form>
      </FormProvider>
    </CenteredBox>
  );
};
