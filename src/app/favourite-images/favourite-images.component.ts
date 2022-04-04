import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image, images } from '../images';
import { FavouritesService } from '../favourites.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-favourite-images',
  templateUrl: './favourite-images.component.html',
  styleUrls: ['./favourite-images.component.scss']
})

export class FavouriteImagesComponent implements OnInit {

  image: Image | undefined;
  faHouse = faHouse;
  fasHeart = fasHeart;

  @Input() images:any;

  constructor(
    private route: ActivatedRoute,
    private favouritesService: FavouritesService
    ) { }

    addToFavourites(image: Image) {
      // Exclude adding duplicates to Favourites
      const favourites = this.favouritesService.getFavouriteImages();
      if (favourites.includes(image)) {
        window.alert('This image has already been added to your Favourites')
      } else {
        this.favouritesService.addToFavourites(image);
        window.alert('Image added to your Favourites.');
      }
    }

  ngOnInit() {
     // Get the image id from the current route
    //  Access the route parameters with route.snapshot
    const routeParams = this.route.snapshot.paramMap;
    const imageIdFromRoute = Number(routeParams.get('imageId'));

    // Find the image that correspond with the id provided in route.
    this.image = images.find(image => image.id === imageIdFromRoute);
  }

}
