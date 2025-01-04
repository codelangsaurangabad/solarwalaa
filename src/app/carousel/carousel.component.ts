import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }

  activeSlides!: SlidesOutputData;

  slidesStore: any = [
    {
      id: 1, src: "https://th.bing.com/th/id/OIP.FfuILwnK53p9wEbdSUOm4AAAAA?w=474&h=306&rs=1&pid=ImgDetMain",
      heading1: 'All types of Solar Projects & Maintenance', btn1: 'Read More', btn2: 'Join Now', heading2: 'Able Technoficient opc pvt ltd', heading3: "India's top most solar sales & maintenance company"
    },
    { id: 2, src: "https://wallpapercave.com/wp/wp8084883.jpg",
      heading1: 'Available for world', btn1: 'Read More', btn2: 'Join Now', heading2: 'Working world wide', heading3: 'Now it is easy to do solar installation in the world of solar.' 
    }
  ];
  constructor() { }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

}
