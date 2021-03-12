import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-talks',
  templateUrl: './our-talks.component.html',
  styleUrls: ['./our-talks.component.css']
})
export class OurTalksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SlideOptions = { items: 3,   responsive:{
    0:{
        items:1,
        dots: false,
        nav:false,
        loop:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
        loop:true
    }
} };  
  CarouselOptions = { items: 3, dots: true, nav: true };
}
