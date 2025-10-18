import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TFilesValidationOptions } from './types';
import { BaseFileValidation } from './base-file-validation';

@Injectable()
export class FilesValidationPipe
  extends BaseFileValidation
  implements PipeTransform
{
  constructor(private readonly options: TFilesValidationOptions = {}) {
    super();
  }

  transform(files: Express.Multer.File[]): Express.Multer.File[] {
    this.validateFilesCount(files);

    files.forEach((file) => {
      this.validateFileType(file, this.options.allowedMimeTypes);
      this.validateFileSize(file, this.options);
    });

    return files;
  }

  private validateFilesCount(files: Express.Multer.File[]) {
    if (!files || !files.length) {
      if (this.options.minCount && this.options.minCount > 0) {
        throw new BadRequestException(
          `Minimum ${this.options.minCount} file(s) required`,
        );
      }

      return;
    }

    if (this.options.minCount && files.length < this.options.minCount) {
      throw new BadRequestException(
        `Minimum ${this.options.minCount} file(s) required`,
      );
    }

    if (this.options.maxCount && files.length > this.options.maxCount) {
      throw new BadRequestException(
        `Maximum ${this.options.maxCount} file(s) allowed`,
      );
    }
  }
}
