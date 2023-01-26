import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Serie } from '../../interfaces/serie/serie.interface';
import { SerieDto } from '../../dto/serie.dto/serie.dto';

@Injectable()
export class SerieService {
  constructor(@InjectModel('Serie') private serieModel: Model<Serie>) {}
  async create(createSerieDTO: SerieDto): Promise<Serie> {
    const createdSerie = new this.serieModel(createSerieDTO);
    return await createdSerie.save();
  }

  async getSeries(): Promise<Serie[]> {
    const series = await this.serieModel.find();
    return series;
  }
  async getSerie(idSerie: string): Promise<Serie> {
    const serie = this.serieModel.findOne({ _id: idSerie });
    return serie;
  }
  async getByName(nombre: string): Promise<Serie[]> {
    const serie = this.serieModel.find({ titulo: { $regex: nombre } });
    return serie;
  }
  async getCategorias(categoria: string): Promise<Serie[]> {
    const serie = this.serieModel.find().where('categorias').equals(categoria);
    return serie;
  }
  async updateSerie(idSerie: string, serieDTO: SerieDto): Promise<Serie> {
    return await this.serieModel.findOneAndUpdate({ _id: idSerie }, serieDTO);
  }
  async deleteSerie(idSerie: string): Promise<Serie> {
    const serie = new this.serieModel({ _id: idSerie });
    return await serie.deleteOne();
  }
}
