import { Injectable } from '@angular/core';
import { Image } from './images';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favouriteImages: Image[] = [];

  constructor() { }

  addToFavourites(image: Image) {
    this.favouriteImages.push(image);
  }

  getFavouriteImages() {
    return this.favouriteImages;
  }

  clearFavourites() {
    this.favouriteImages = [];
    return this.favouriteImages;
  }
}
