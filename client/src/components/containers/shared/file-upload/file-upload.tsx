import { ChangeEvent, FC, useRef } from "react";
import { FileUploadUI } from "@/components/elements";
import { TFileUploadProps } from "./type";

export const FileUpload: FC<TFileUploadProps> = ({
  onFileSelect,
  multiple = false,
  ...props
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      if (multiple) {
        const filesArray = Array.from(files);
        onFileSelect(filesArray);
      } else {
        onFileSelect([files[0]]);
      }
    }
    event.target.value = "";
  };

  return (
    <FileUploadUI
      {...props}
      fileRef={fileInputRef}
      multiple={multiple}
      handleClick={handleClick}
      handleChange={handleChange}
    />
  );
};
