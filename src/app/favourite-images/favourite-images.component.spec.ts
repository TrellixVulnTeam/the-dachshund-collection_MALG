import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteImagesComponent } from './favourite-images.component';

describe('FavouriteImagesComponent', () => {
  let component: FavouriteImagesComponent;
  let fixture: ComponentFixture<FavouriteImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
