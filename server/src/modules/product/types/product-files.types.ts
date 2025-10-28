export type TProductFilesFields = {
  preview?: Express.Multer.File[];
  media?: Express.Multer.File[];
};

export type TProductFiles = {
  preview: Express.Multer.File;
  media: Express.Multer.File[];
};
