import { Body, Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { Files, Prisma } from 'generated/prisma';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3ObjectModel } from './models/s3object.model';
import { AppService } from '../app.service';
@Injectable()
export class FilesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly appService: AppService,
  ) {}
  async getSignUrl(key: string): Promise<string> {
    const s3Config: S3ObjectModel = {
      bucket: this.appService.configAwsBucket() as string,
      region: this.appService.configAwsRegion() as string,
    };

    const { region, bucket } = s3Config;

    const client = new S3Client({
      region,
      credentials: {
        accessKeyId: this.appService.configAwsAccessKeyId() as string,
        secretAccessKey: this.appService.configAwsSecretAccessKey() as string,
      },
    });

    const command = new PutObjectCommand({ Bucket: bucket, Key: key });

    return getSignedUrl(client, command, { expiresIn: 3600 });
  }

  async addNewFile(file_url: string | null): Promise<Files | null> {
    const data: Prisma.FilesCreateInput = {
      file_url,
    };
    return await this.prisma.files.create({ data });
  }

  async updateFileUrl(data: Files): Promise<Files | null> {
    return await this.prisma.files.update({
      where: { id: data.id },
      data: { file_url: data.file_url as string },
    });
  }
}
