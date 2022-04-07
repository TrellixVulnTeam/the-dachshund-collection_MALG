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
  loading = true;
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
      window.alert('This image has already been added to your Favourites')
    } else {
      this.favouritesService.addToFavourites(image);
      window.alert('Image added to your Favourites.');
    }
    // replace regular heart icon with solid heart icon
    // const heart = document.getElementById("regular-heart");
    // const newElement = document.createElement('fa-icon');
    // newElement.innerHTML = '[icon]="fasHeart"';
    // heart.parentNode.replaceChild(newElement, heart);
  }

  reload () {
    // reload five random non-duplicate images
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
    // Set five random non-duplicate images
    let randomIndex = 0;
    const randomImages = new Array();

    while (randomImages.length < 5) {
      randomIndex = Math.floor(Math.random() * this.images.length);
      if (this.images[randomIndex].used === false) {
        this.images[randomIndex].used = true;
        randomImages.push(this.images[randomIndex]);
        // reset 'used' property to false
      } else if (this.images.every(image => image.used === true) === true) {
        this.images.map((img) => {
          img.used = false
        })
      }
    }

    // Show a loading state to avoid a flash of empty content
    setTimeout(() => {
      this.images = randomImages
      this.loading = false;
    }, 1000)
  }

}
