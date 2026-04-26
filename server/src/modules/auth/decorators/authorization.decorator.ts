import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from '../guards';
import { RolesGuard } from '../guards/roles.guard';
import { TUserRole } from '@/modules/user/types';

export const ROLES_KEY = 'roles';

export const Auth = (...roles: TUserRole[]) => {
  const decorators: MethodDecorator[] = [
    applyDecorators(UseGuards(JwtGuard), ApiBearerAuth()),
  ];

  if (roles.length > 0) {
    decorators.push(
      applyDecorators(UseGuards(RolesGuard), SetMetadata(ROLES_KEY, roles)),
    );
  }

  return applyDecorators(...decorators);
};
