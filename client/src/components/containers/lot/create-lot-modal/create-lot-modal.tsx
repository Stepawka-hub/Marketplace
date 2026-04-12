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
import { CREATE_LOT_FIELDS, LOT_VALIDATION } from "./constants";
import {
  requiredValidation,
  priceValidation,
  minValidation,
  futureDateValidation,
  maxValidation,
  endTimeRangeValidation,
} from "@/shared/helpers";
import { useCreateLotMutation } from "@/services/lot";

import { Input } from "@/components/containers";
import {
  Form,
  Modal,
  NotFound,
  SelectedProductCard,
} from "@/components/elements";
import { SubmitButton } from "@/components/ui";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import {
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

  const [createLot, { isLoading }] = useCreateLotMutation();

  const methods = useForm<TCreateLotForm>({
    mode: "onChange",
    defaultValues: {
      startPrice: 1000,
      minBidIncrement: 100,
      endTime: "",
    },
  });
  const { register, handleSubmit, reset } = methods;

  if (!productId) {
    return <NotFound />;
  }

  const onModalClose = () => {
    reset();
    dispatch(closeLotCreationModal());
  };

  const onSubmit = handleSubmit(async (formData) => {
    const { startPrice, minBidIncrement, endTime } = formData;
    const endTimeISO = new Date(endTime).toISOString();

    await createLot({
      productId,
      startPrice,
      minBidIncrement,
      endTime: endTimeISO,
    });
    reset();
    onModalClose();
    navigate(ROUTES.PROFILE_MY_LOTS);
  });

  const getFieldTranslation = (
    field: string,
    type: "label" | "placeholder" | "helper-text",
    options?: Record<string, string | number>,
  ) => t(`create-lot.form.fields.${field}.${type}`, options);

  const { START_PRICE, MIN_BID_INCREMENT, END_TIME } = CREATE_LOT_FIELDS;

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
            type="number"
            step="1"
            label={getFieldTranslation(START_PRICE, "label")}
            placeholder={getFieldTranslation(START_PRICE, "placeholder")}
            helperText={getFieldTranslation(START_PRICE, "helper-text", {
              min: LOT_VALIDATION.PRICE.MIN,
              max: LOT_VALIDATION.PRICE.MAX,
            })}
            {...register(START_PRICE, {
              ...requiredValidation(t),
              ...priceValidation(
                LOT_VALIDATION.PRICE.MIN,
                LOT_VALIDATION.PRICE.MAX,
                t,
              ),
            })}
            startIcon={<CurrencyRubleIcon />}
          />

          <Input
            type="number"
            step="1"
            label={getFieldTranslation(MIN_BID_INCREMENT, "label")}
            placeholder={getFieldTranslation(MIN_BID_INCREMENT, "placeholder")}
            helperText={getFieldTranslation(MIN_BID_INCREMENT, "helper-text", {
              min: LOT_VALIDATION.MIN_BID_INCREMENT.MIN,
              max: LOT_VALIDATION.MIN_BID_INCREMENT.MAX,
            })}
            {...register(MIN_BID_INCREMENT, {
              ...requiredValidation(t),
              ...minValidation(LOT_VALIDATION.MIN_BID_INCREMENT.MIN, t),
              ...maxValidation(LOT_VALIDATION.MIN_BID_INCREMENT.MAX, t),
            })}
            startIcon={<TrendingUpIcon />}
          />

          <Input
            type="datetime-local"
            label={getFieldTranslation(END_TIME, "label")}
            placeholder={getFieldTranslation(END_TIME, "placeholder")}
            {...register(END_TIME, {
              ...requiredValidation(t),
              ...futureDateValidation(t),
              ...endTimeRangeValidation(
                LOT_VALIDATION.END_TIME.MIN_DAYS,
                LOT_VALIDATION.END_TIME.MAX_DAYS,
                t,
                {
                  min: "create-lot.form.validation.end-time-min",
                  max: "create-lot.form.validation.end-time-max",
                },
              ),
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
