import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerlinController } from './merlin/merlin.controller';

@Module({
  imports: [],
  controllers: [AppController, MerlinController],
  providers: [AppService],
})
export class AppModule {}
