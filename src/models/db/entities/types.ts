import { Document } from "mongoose";

export interface IUserFavorites extends Document {
  userId: string;
  favorites: { id: string }[];
}
