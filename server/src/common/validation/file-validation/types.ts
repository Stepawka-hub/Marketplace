export type TBaseValidationOptions = {
  maxFileSize?: number;
  maxImageSize?: number;
  maxVideoSize?: number;
  allowedMimeTypes?: string[];
};

export type TFilesValidationOptions = TBaseValidationOptions & {
  minCount?: number;
  maxCount?: number;
};

export type TFileValidationOptions = TBaseValidationOptions & {
  required?: boolean;
};
