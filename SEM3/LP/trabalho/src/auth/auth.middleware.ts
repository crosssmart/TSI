import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { CHAVE_JWT } from '../jwt.config.js';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('[ERRO]: Token não enviado');
    }

    // Remove o prefixo Bearer
    const token = authHeader.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('[ERRO]: Formato do token inválido');
    }

    try {
      const tokenDescriptografado = jwt.verify(token, CHAVE_JWT);

      // Disponibiliza os dados do usuário na requisição
      (req as any).usuario = tokenDescriptografado;

      next();
    } catch (erro) {
      throw new UnauthorizedException('[ERRO]: Token inválido ou expirado');
    }
  }
}
