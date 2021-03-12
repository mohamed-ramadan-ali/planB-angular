import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.css']
})
export class GallerySliderComponent implements OnInit {
  slides = [
  {img: "../../../assets/imgs/gallery slider/1.jpg"},
  {img: "../../../assets/imgs/gallery slider/2.jpg"},
  {img: "../../../assets/imgs/gallery slider/3.jpg"},
  {img: "../../../assets/imgs/gallery slider/4.jpg"},
  {img: "../../../assets/imgs/gallery slider/5.jpg"},
  {img: "../../../assets/imgs/gallery slider/6.jpg"},
  {img: "../../../assets/imgs/gallery slider/7.jpg"},
  {img: "../../../assets/imgs/gallery slider/8.jpg"},
  {img: "../../../assets/imgs/gallery slider/9.jpg"},
  {img: "../../../assets/imgs/gallery slider/10.jpg"},
  {img: "../../../assets/imgs/gallery slider/11.jpg"},
  {img: "../../../assets/imgs/gallery slider/12.jpg"},
  {img: "../../../assets/imgs/gallery slider/13.jpg"},
  {img: "../../../assets/imgs/gallery slider/14.jpg"},
  {img: "../../../assets/imgs/gallery slider/15.jpg"},
  {img: "../../../assets/imgs/gallery slider/16.jpg"},
  {img: "../../../assets/imgs/gallery slider/17.jpg"},
  {img: "../../../assets/imgs/gallery slider/18.jpg"},
  {img: "../../../assets/imgs/gallery slider/19.jpg"},
  {img: "../../../assets/imgs/gallery slider/20.jpg"},
  {img: "../../../assets/imgs/gallery slider/21.jpg"},
  {img: "../../../assets/imgs/gallery slider/22.jpg"},
  {img: "../../../assets/imgs/gallery slider/23.jpg"},
  {img: "../../../assets/imgs/gallery slider/24.jpg"},
  {img: "../../../assets/imgs/gallery slider/25.jpg"},
  {img: "../../../assets/imgs/gallery slider/26.jpg"},

 
 
  
];
slideConfig = { "slidesToScroll": 1,  "arrows": true,
"centerMode": true,
"autoplay":true,
"autoplaySpeed":1000,
"infinite": true,
"centerPadding": '300px',
"slidesToShow": 1,
"speed": 2000,
"dots": false,
'responsive': [
  {
    'breakpoint': 767,
     'settings': {
      "slidesToScroll": 1,  "arrows": false,
"centerMode": true,
"infinite": true,
"centerPadding": '0px',
"slidesToShow": 1,
"autoplay":true,
"autoplaySpeed":1000,
"speed": 4000,
"dots": false,
            }
          }
        ]


};

addSlide() {
  this.slides.push({img: "http://placehold.it/350x150/777777"})
}

removeSlide() {
  this.slides.length = this.slides.length - 1;
}

slickInit(e) {
  console.log('slick initialized');
}

breakpoint(e) {
  console.log('breakpoint');
}



  

  constructor() {
    
}

  ngOnInit(): void {
  }


  
};
