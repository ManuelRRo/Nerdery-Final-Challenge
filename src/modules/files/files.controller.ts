import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { FileInput } from './inputs/files.input';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller('files')
@UseFilters(HttpExceptionFilter)
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('upload')
  async uploadFile(@Body() input: FileInput): Promise<string | null> {
    if (!input) {
      throw new Error('No file uploaded');
    }
    return await this.filesService.getSignUrl(input.key_id);
  }
}
