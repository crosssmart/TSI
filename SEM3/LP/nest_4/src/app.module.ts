import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoModule } from './produto/produto.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { AuthMiddleware } from './auth/auth.middleware.js';

@Module({
  imports: [
    // Carrega o .env ANTES de tudo (isGlobal: true → não precisa
    // importar ConfigModule nos outros módulos)
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    ProdutoModule,
    UsuariosModule,

    // forRootAsync garante que o ConfigService já esteja pronto
    // quando a conexão for criada
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mongodb',
        url: config.get<string>('URL_BD'),
        autoLoadEntities: true,
        synchronize: true, // somente em DEV
        logging: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'usuarios', method: RequestMethod.POST },
        { path: 'usuarios/login', method: RequestMethod.POST },
      )
      .forRoutes('produtos', 'usuarios');
  }
}
