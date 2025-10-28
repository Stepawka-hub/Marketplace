import {
  BaseFileValidation,
  TFilesValidationOptions,
  TFileValidationOptions,
} from '@/common/validation';
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TProductFiles, TProductFilesFields } from '../types';

@Injectable()
export class ProductFilesValidationPipe
  extends BaseFileValidation
  implements PipeTransform
{
  constructor(
    private readonly previewFileOptions: TFileValidationOptions,
    private readonly mediaFilesOptions: TFilesValidationOptions,
  ) {
    super();
  }

  transform(files: TProductFilesFields): TProductFiles {
    const previewFile = files.preview?.[0];

    if (!previewFile) {
      throw new BadRequestException('Preview file is required');
    }

    // Валидируем preview file
    this.validateFileType(
      previewFile,
      this.previewFileOptions.allowedMimeTypes,
    );
    this.validateFileSize(previewFile, this.previewFileOptions);

    // Валидируем media files
    const mediaFiles = files.media || [];

    this.validateFilesCount(mediaFiles, this.mediaFilesOptions);

    mediaFiles.forEach((file) => {
      this.validateFileType(file, this.mediaFilesOptions.allowedMimeTypes);
      this.validateFileSize(file, this.mediaFilesOptions);
    });

    return {
      preview: previewFile,
      media: mediaFiles,
    };
  }
}
