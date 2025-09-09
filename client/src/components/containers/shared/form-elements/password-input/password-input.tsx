import { FC, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TPasswordInputProps } from "./type";
import { PasswordInputUI } from "@/components/elements";

export const PasswordInput: FC<TPasswordInputProps> = ({
  name,
  label,
  placeholder,
  ...props
}) => {
  const { t } = useTranslation();
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name, control });
  const [showPassword, setShowPassword] = useState(false);

  const onTogglePassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <PasswordInputUI
      {...props}
      name={name}
      label={label || t("form.fields.password.label")}
      placeholder={placeholder || t("form.fields.password.placeholder")}
      value={field.value || ""}
      error={fieldState.invalid}
      helperText={fieldState.error?.message}
      showPassword={showPassword}
      onTogglePassword={onTogglePassword}
      onChange={field.onChange}
    />
  );
};
