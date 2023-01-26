import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SerieService } from './services/serie/serie.service';
import { SerieDto } from './dto/serie.dto/serie.dto';

@Controller('api')
export class SeriesController {
  constructor(private readonly seriesService: SerieService) {}

  @Post('series/register')
  async register(@Body() createSerieDTO: SerieDto) {
    const serie = await this.seriesService.create(createSerieDTO);
    return serie;
  }
  @Get('series')
  async getSeries() {
    const series = await this.seriesService.getSeries();
    return series;
  }
  @Get('series/:idSerie')
  async getSerie(@Param('idSerie') idSerie: string) {
    const serie = await this.seriesService.getSerie(idSerie);
    return serie;
  }
  @Get('series/title/:titulo')
  async getSeriesByName(@Param('titulo') titulo: string) {
    return await this.seriesService.getByName(titulo);
  }
  @Get('series/categorias/:catSerie')
  async getSerieCat(@Param('catSerie') catSerie: string) {
    return await this.seriesService.getCategorias(catSerie);
  }
  @Put('series/:idSerie')
  async updateSerie(
    @Body() serieDTO: SerieDto,
    @Param('idSerie') idSerie: string,
  ) {
    return await this.seriesService.updateSerie(idSerie, serieDTO);
  }
  @Delete('series/:idSerie')
  async deleteSerie(@Param('idSerie') idSerie: string) {
    const serie = await this.seriesService.deleteSerie(idSerie);
    return {
      idSerie: serie._id,
      deleted: true,
    };
  }
}
