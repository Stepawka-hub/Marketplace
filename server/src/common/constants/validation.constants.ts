// Todo: Подправить паттерны
export const PATTERNS = {
  NAME: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
} as const;
