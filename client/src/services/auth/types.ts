export type TRegisterPayload = {
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TAuthResponse = {
  accessToken: string;
};
