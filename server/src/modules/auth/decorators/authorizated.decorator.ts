import { UserEntity } from '@/modules/user/entities';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const Authorizated = createParamDecorator(
  (data: keyof UserEntity, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    const user = request.user as UserEntity | undefined;

    if (!user) return null;

    return data ? user[data] : user;
  },
);
