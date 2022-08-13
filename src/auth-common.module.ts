import { Module } from '@nestjs/common';
import { RolesGuard } from './guard/roles.guard';
import { Public } from './guard/public.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { Roles } from './decorator/roles.decorator';
import { CurrentUser } from './decorator/current-user.decorator';

@Module({
  exports: [RolesGuard, Public, JwtAuthGuard, Roles, CurrentUser]
})
export class AuthCommon {}
