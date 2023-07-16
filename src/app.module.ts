import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './shared/services/prisma.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client', 'build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
