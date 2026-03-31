import { FC, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  userData: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onSuccess: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const EditProfileModal: FC<EditProfileModalProps> = ({
  open,
  userData,
  onSuccess,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  //const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const isLoading = false;

  useEffect(() => {
    if (open) {
      reset({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone || "",
      });
    }
  }, [open, userData, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      //await updateProfile({ id: userData.id, ...data }).unwrap();
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Ошибка обновления:", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="edit-profile-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 480 },
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Редактирование профиля</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="Имя"
              fullWidth
              {...register("firstName", { required: "Имя обязательно" })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              label="Фамилия"
              fullWidth
              {...register("lastName", { required: "Фамилия обязательна" })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
            <TextField
              label="Email"
              fullWidth
              type="email"
              {...register("email", {
                required: "Email обязателен",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Неверный формат email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Телефон"
              fullWidth
              {...register("phone")}
              placeholder="+7 XXX XXX-XX-XX"
              error={!!errors.phone}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isLoading}
              sx={{ mt: 1 }}
            >
              {isLoading ? "Сохранение..." : "Сохранить"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};