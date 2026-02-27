import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class SharedJwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(jwtSecret: string) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: any) {
    // This gets attached to req.user in every protected route
    return { id: payload.sub, email: payload.email, roles: payload.roles };
  }
}