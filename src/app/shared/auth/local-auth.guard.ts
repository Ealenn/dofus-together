import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClsService } from 'nestjs-cls';
import { IS_PUBLIC_KEY } from './public';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(
    private reflector: Reflector,
    private readonly clsService: ClsService,
  ) {
    super();
  }

  public override canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  public override handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    this.clsService.set('user', user);
    return super.handleRequest<TUser>(err, user, info, context, status);
  }
}
