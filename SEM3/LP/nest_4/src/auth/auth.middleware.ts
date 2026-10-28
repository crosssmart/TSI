import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const CHAVE_JWT = process.env.CHAVE_JWT || 'fallback-dev-only';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    //const token = req.headers.authorization;
    if (!token) throw new UnauthorizedException('[ERRO]: Token nao enviado');

    try {
      const tokenDescriptografado = await jwt.verify(token, CHAVE_JWT);
      //req['usuario'] = tokenDescriptografado;
      next();
    } catch (erro) {
      throw new UnauthorizedException('[ERRO]: Token inválido ou expirado');
    }
  }
}
