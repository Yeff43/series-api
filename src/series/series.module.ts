import { Module } from '@nestjs/common';
import { SerieService } from './services/serie/serie.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SerieSchema } from './schemas/serie.schema/serie.schema';
import { SeriesController } from './series.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Serie', schema: SerieSchema }]),
  ],
  providers: [SerieService],
  controllers: [SeriesController],
})
export class SeriesModule {}
