import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SeriesModule } from './series/series.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:toor@cluster0.f6ewd94.mongodb.net/test',
    ),
    SeriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
