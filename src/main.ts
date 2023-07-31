import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './shared/services/prisma.service';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    index: false,
    prefix: '/public',
  });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const server = await app.listen(process.env.PORT || 8000);
  console.log('Server is running on port 8000');

  server.prependListener('request', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  });
}

bootstrap();
