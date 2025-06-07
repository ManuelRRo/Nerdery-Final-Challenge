import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { FilesService } from './files.service';
import { AppService } from '../app.service';
import { Files, Prisma } from '../../generated/prisma';

const mockAppService = {
  configAwsBucket: jest.fn(),
  configAwsRegion: jest.fn(),
  configAwsAccessKeyId: jest.fn(),
  configAwsSecretAccessKey: jest.fn(),
};
const data: Prisma.FilesCreateInput = {
  file_url:
    'https://bucketshirtsimg.s3.us-east-2.amazonaws.com/e4fcba29-a2f3-4f57-a873-1e256aba7db9',
};

const file: Files = {
  id: '38485ebe-5d67-47c0-9fc9-f2d3d4b91dde',
  key: 'e4fcba29-a2f3-4f57-a873-1e256aba7db9',
  file_url:
    'https://bucketshirtsimg.s3.us-east-2.amazonaws.com/e4fcba29-a2f3-4f57-a873-1e256aba7db9',
};
describe('', () => {
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let service: FilesService;
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilesService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: AppService, useValue: mockAppService },
      ],
    }).compile();

    service = module.get<FilesService>(FilesService);
    mockPrismaService.files.create.mockClear();
    mockPrismaService.files.update.mockClear();
  });

  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(mockPrismaService).toBeDefined();
  });

  describe('addNewFile', () => {
    it('Should be called with data', async () => {
      mockPrismaService.files.create.mockResolvedValueOnce(file);

      const result = await service.addNewFile(data.file_url as string);

      expect(result).toEqual(file);
    });
  });
  describe('updateFileUrl', () => {
    it('Should be called with where and data parameters', async () => {
      mockPrismaService.files.update.mockResolvedValueOnce(file);

      const result = await service.updateFileUrl(file);

      expect(result).toEqual(file);
    });
  });
});
