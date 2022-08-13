import { Module } from '@nestjs/common';
import { RolesGuard } from './guard/roles.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Module({
  providers: [RolesGuard, JwtAuthGuard],
  exports: [RolesGuard, JwtAuthGuard]
})
export class AuthCommonModule { }
export { RolesGuard, JwtAuthGuard };
