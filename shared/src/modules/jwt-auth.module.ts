import { DynamicModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SharedJwtStrategy } from '../strategies/shared-jwt.strategy';
import { JwtGlobalGuard } from '../guards/jwt-global.guard';

@Module({})
export class JwtAuthModule {
  static forRoot(jwtSecret: string): DynamicModule {
    return {
      module: JwtAuthModule,
      imports: [PassportModule],
      providers: [
        {
          provide: SharedJwtStrategy,
          useFactory: () => new SharedJwtStrategy(jwtSecret),
        },
        JwtGlobalGuard,
      ],
      exports: [JwtGlobalGuard, SharedJwtStrategy],
    };
  }
}