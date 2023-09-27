import { UserFavoritesModel } from "../entities/model";

class userFavoritesDB {
  async add(movie: { id: string }, userId: string) {
    const userFavorites = await UserFavoritesModel.findOne({ userId });
    if (userFavorites) {
      if (
        userFavorites.favorites.find(
          (movieFromDB) => movieFromDB.id === movie.id
        )
      )
        return userFavorites;
      userFavorites.favorites.push(movie);
      return await userFavorites.save();
    } else {
      const newFavorites = new UserFavoritesModel({
        favorites: [movie],
        userId,
      });
      return await newFavorites.save();
    }
  }
  async getById(userId: string) {
    const userFavorites = await UserFavoritesModel.findOne({ userId });
    return userFavorites ? userFavorites.favorites : [];
  }
  async unFavorite(movieId: string, userId: string) {
    const userFavorites = await UserFavoritesModel.findOne({ userId });
    if (!userFavorites) return [];
    const moviesWithoutThis = userFavorites.favorites.filter(
      (movieFromDB) => movieFromDB.id != movieId
    );
    userFavorites.favorites = moviesWithoutThis;
    return await userFavorites.save();
  }
}

export default new userFavoritesDB();
