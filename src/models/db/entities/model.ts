import { model } from "mongoose";
import { IUserFavorites } from "./types";
import { userFavoritesSchema } from "./schema";

export const UserFavoritesModel = model<IUserFavorites>(
  "user",
  userFavoritesSchema
);
