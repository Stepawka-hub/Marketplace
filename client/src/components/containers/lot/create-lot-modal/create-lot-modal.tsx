import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "@/store";
import {
  closeLotCreationModal,
  getIsLotCreationModalOpen,
  getLotCreationProductData,
} from "@/store/slices/lot";
import { ROUTES } from "@/config/routes";
import { CREATE_LOT_FIELDS } from "./constants";
import {
  requiredValidation,
  positiveNumberValidation,
  futureDateValidation,
  dateAfterValidation,
} from "@/shared/helpers";

import { Input } from "@/components/containers";
import { Form, Modal, SelectedProductCard } from "@/components/elements";
import { SubmitButton } from "@/components/ui";
import {
  AttachMoney as MoneyIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";
import { formStyle } from "./styles";
import { TCreateLotForm } from "./type";

export const CreateLotModal: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsLotCreationModalOpen);
  const { productId, productName, productPreview } = useSelector(
    getLotCreationProductData,
  );

  const { START_PRICE, MIN_BID_INCREMENT, START_TIME, END_TIME } =
    CREATE_LOT_FIELDS;

  // const [createLot, { isLoading }] = useCreateLotMutation();
  const isLoading = false;

  const methods = useForm<TCreateLotForm>({ mode: "onChange" });
  const { register, handleSubmit } = methods;

  const getFieldTranslation = (field: string, type: "label" | "placeholder") =>
    t(`create-lot.form.fields.${field}.${type}`);

  const onModalClose = () => {
    dispatch(closeLotCreationModal());
  };

  const onSubmit = handleSubmit(async (formData) => {
    // await createLot({
    //   productId,
    //   ...formData,
    // });
    onModalClose();
    navigate(ROUTES.PROFILE_MY_LOTS);
  });

  return (
    <Modal
      title={t("create-lot.form.title")}
      isOpen={isModalOpen}
      onClose={onModalClose}
    >
      <FormProvider {...methods}>
        <Form sx={formStyle} onSubmit={onSubmit}>
          <SelectedProductCard
            name={productName}
            preview={productPreview || ""}
          />

          <Input
            label={getFieldTranslation(START_PRICE, "label")}
            placeholder={getFieldTranslation(START_PRICE, "placeholder")}
            type="number"
            {...register(START_PRICE, {
              ...requiredValidation(t),
              ...positiveNumberValidation(t),
            })}
            startIcon={<MoneyIcon />}
          />

          <Input
            label={getFieldTranslation(MIN_BID_INCREMENT, "label")}
            placeholder={getFieldTranslation(MIN_BID_INCREMENT, "placeholder")}
            type="number"
            {...register(MIN_BID_INCREMENT, {
              ...requiredValidation(t),
              ...positiveNumberValidation(t),
            })}
            startIcon={<TrendingUpIcon />}
          />

          <Input
            label={getFieldTranslation(START_TIME, "label")}
            placeholder={getFieldTranslation(START_TIME, "placeholder")}
            type="datetime-local"
            {...register(START_TIME, {
              ...requiredValidation(t),
              ...futureDateValidation(t),
            })}
            startIcon={<ScheduleIcon />}
          />

          <Input
            label={getFieldTranslation(END_TIME, "label")}
            placeholder={getFieldTranslation(END_TIME, "placeholder")}
            type="datetime-local"
            {...register(END_TIME, {
              ...requiredValidation(t),
              ...dateAfterValidation(START_TIME, t),
            })}
            startIcon={<ScheduleIcon />}
          />

          <SubmitButton disabled={isLoading}>
            {t(isLoading ? "common.actions.saving" : "common.actions.create")}
          </SubmitButton>
        </Form>
      </FormProvider>
    </Modal>
  );
};
