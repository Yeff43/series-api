import { Schema } from 'mongoose';
export const SerieSchema = new Schema({
  titulo: String,
  categorias: [String],
  numeroDeCapitulos: String,
  anioEmision: String,
  sinopsis: String,
  puntuacion: Number,
  imagenes: [String],
});
