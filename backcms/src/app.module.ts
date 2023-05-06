import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerlinController } from './merlin/merlin.controller';
import { MerlinService } from './services/merlin/merlin.service';
import { BaseService } from './services/base/base.service';

@Module({
  imports: [],
  controllers: [AppController, MerlinController],
  providers: [AppService, MerlinService, BaseService],
})
export class AppModule {}
