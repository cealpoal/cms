import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const fs = require('fs');
  const bcrypt = require("bcryptjs");
  const crypto = require("crypto");
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
