import { Component, OnInit } from '@angular/core';
import { Image, images } from '../images';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCameraRetro, faPlus, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { FavouritesService } from '../favourites.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {
  // loading = true;
  images = images;
  fasHeart = fasHeart;
  faHeart = faHeart;
  faCameraRetro = faCameraRetro;
  faPlus = faPlus;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private favouritesService: FavouritesService
    ) { }

  addToFavourites(image: Image) {
    // Exclude adding duplicates to Favourites
    const favs = this.favouritesService.getFavouriteImages();
    if (favs.includes(image)) {
      window.alert('This image has already been added to your Favourites.')
    } else {
      this.favouritesService.addToFavourites(image);
      window.alert('Image added to your Favourites.');
    }
  }

  reload () {
    // Load five random non-duplicate images
    let newImages = new Array();
    let index = 0;

    while (newImages.length < 5) {
      index = Math.floor(Math.random() * images.length);
      if (images[index].used === false) {
        images[index].used = true;
        newImages.push(images[index]);
        // reset 'used' property to false
        // (as otherwise reload() would be limited to 4 reloads only until all images 'used' property were equal to 'true' and then would need to break out of the loop)
      } else if (images.every(image => image.used === true) === true) {
        images.map((img) => {
          img.used = false
        })
      }
    }

    this.images = newImages;
  }

  ngOnInit() {
    // Load five random non-duplicate images on initial page load/refresh
    this.reload();

    // Show a loading state to avoid a flash of empty content
    // setTimeout(() => {

      // this.loading = false;
    // }, 1000)
  }

}
