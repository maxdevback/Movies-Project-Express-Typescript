import { Schema } from "mongoose";
import { IUserFavorites } from "./types";

export const userFavoritesSchema = new Schema<IUserFavorites>({
  userId: { type: String, required: true },
  favorites: { type: [Object], required: true, default: [] },
});
