import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TrainersService } from 'src/app/Services/trainers.service';
import {Category} from 'src/app/Models/Category';
import {Course} from 'src/app/Models/Course';
import { CourseServicesService } from 'src/app/Services/course-services.service';
import { ThemePalette } from '@angular/material/core';

import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-instractores-slider',
  templateUrl: './instractores-slider.component.html',
  styleUrls: ['./instractores-slider.component.css']
})



export class InstractoresSliderComponent implements OnInit {
  trainersArr: [];

  constructor(private route: ActivatedRoute, private router: Router,
    private _TrainersService: TrainersService) {





    _TrainersService.getTrainers(40, 1).subscribe((trainersData) => {

      this.trainersArr = trainersData;




    })







  }


  ngOnInit(): void {


  };





  pageNumber(event) {
    
    var x = event.target.innerText;





    this._TrainersService.getTrainers(8, x).subscribe((trainersData) => {

      this.trainersArr = trainersData;




    })
  };


  SlideOptions = { items: 3, dots: true, nav: true ,responsive:{
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

