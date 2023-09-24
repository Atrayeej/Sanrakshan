import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"
import { NavController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {

  newsUpdates = [
    { title: 'Rains in Gujarat', description: 'Rainfall and floods in some regions of Guajarat' },
    { title: 'Sanrakshan conducts awareness programme', description: 'Sanrakshan team conduscts awareness programme in flood-prone areas.' },
    { title: 'Three ways to protect yourself in Disastrous condition', description: 'Click here to know more' },
    { title: 'Earthquake hits Bhuj', description: 'A 4.3 magnitude earthquake hit Bhuj on Sunday. ' }
    
  ];

  trustedVideoUrlArray: SafeResourceUrl[] = [];
  youtubeUrlsArray = [
    {
      link: "https://www.youtube.com/embed/HaEmIakO7f4"
    },
    {
      link: "https://www.youtube.com/embed/HbyTyOglw1w"
    }
  ]

  maxVisibleVideos: number = 1;

  constructor(private domSatizer:DomSanitizer, public navCtrl: NavController) { }

  swiperSlideChange(e: any)
  {
    console.log('changed', e);
  }

  toggleVideos() {
    // Increase the number of visible videos when the "View More" button is clicked
    this.maxVisibleVideos += 1;
  }

  onNewsUpdateClick(news: any) {
    
    console.log('Clicked on news update:', news);
    }

  ngOnInit() {
    for (let item of this.youtubeUrlsArray) {
      this.trustedVideoUrlArray.push(this.domSatizer.bypassSecurityTrustResourceUrl(item.link));
    }
      }

}
