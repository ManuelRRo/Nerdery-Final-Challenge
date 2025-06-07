import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext } from '@nestjs/common';
import { GqlThrottlerGuard } from './gql-throttler.guard';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';

describe('GqlThrottlerGuard', () => {
  let guard: GqlThrottlerGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ThrottlerModule.forRoot()],
      providers: [GqlThrottlerGuard],
    }).compile();

    guard = module.get<GqlThrottlerGuard>(GqlThrottlerGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('getRequestResponse', () => {
    it('should extract req and res from gql context', () => {
      const mockReq = { res: {} };
      const mockCtx = {
        getContext: () => ({ req: mockReq }),
      } as unknown as GqlExecutionContext;

      // Override GqlExecutionContext.create to return our mock
      jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(mockCtx);

      const mockExecutionContext = {} as ExecutionContext;
      const result = guard.getRequestResponse(mockExecutionContext);

      expect(result.req).toBe(mockReq);
      expect(result.res).toBe(mockReq.res);
    });
  });
});
