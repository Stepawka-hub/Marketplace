import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Form, Modal } from "@/components/elements";
import { SubmitButton } from "@/components/ui";
import { CREATE_LOT_FIELDS } from "./constants";
import { TCreateLotForm } from "./type";
import { useDispatch, useSelector } from "@/store";
import {
  closeLotCreationModal,
  getIsLotCreationModalOpen,
  getLotCreationProductData,
} from "@/store/slices/lot";
import { ROUTES } from "@/config/routes";

export const CreateLotModal: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsLotCreationModalOpen);
  const { productId, productName, productPreview } = useSelector(
    getLotCreationProductData,
  );

  //const [createLot, { isLoading }] = useCreateLotMutation();

  const methods = useForm<TCreateLotForm>({ mode: "onChange" });
  const { register, handleSubmit } = methods;

  const getFieldTranslation = (field: string, type: "label" | "placeholder") =>
    t(`create-product.form.fields.${field}.${type}`);
  const isLoading = false;

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
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <FormProvider {...methods}>
        <Form title={t("create-product.form.title")} onSubmit={onSubmit}>
          <SubmitButton>
            {t(isLoading ? "common.actions.saving" : "common.actions.save")}
          </SubmitButton>
        </Form>
      </FormProvider>
    </Modal>
  );
};
