import { ROLES } from '../enums/roles.enum';
import 'reflect-metadata';

describe('Roles Decorator (mocked)', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should return mocked metadata', () => {
    const mockRoles = [ROLES.MANAGER, ROLES.CLIENT];

    const getMetadataSpy = jest
      .spyOn(Reflect, 'getMetadata')
      .mockReturnValue(mockRoles);

    const metadata = Reflect.getMetadata('roles', {});

    expect(getMetadataSpy).toHaveBeenCalledWith('roles', {});
    expect(metadata).toEqual(mockRoles);
  });
});
