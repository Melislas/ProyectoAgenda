import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { TurnosModule } from './turnos/turnos.module';
import { ClienteModule } from './cliente/cliente.module';
import { AuthModule } from './auth/auth.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { AppController } from './app.controller';
@Module({
 imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TurnosModule,
    ClienteModule,
    AuthModule,
    ProfesionalModule,
  ],
 controllers: [AppController],
})
export class AppModule {}
