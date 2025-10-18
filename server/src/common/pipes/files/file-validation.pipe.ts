import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { BaseFileValidation } from './base-file-validation';
import { TFileValidationOptions } from './types';

@Injectable()
export class FileValidationPipe
  extends BaseFileValidation
  implements PipeTransform
{
  constructor(private readonly options: TFileValidationOptions = {}) {
    super();
  }

  transform(file: Express.Multer.File): Express.Multer.File {
    this.validateFileExists(file);
    this.validateFileType(file, this.options.allowedMimeTypes);
    this.validateFileSize(file, this.options);

    return file;
  }

  private validateFileExists(file: Express.Multer.File) {
    if (!file && this.options.required) {
      throw new BadRequestException('File is required');
    }
  }
}
