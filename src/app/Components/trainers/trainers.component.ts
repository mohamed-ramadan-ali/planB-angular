import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TrainersService } from 'src/app/Services/trainers.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainersArr: [];

  constructor(private route: ActivatedRoute, private router: Router,
    private _TrainersService: TrainersService) {





    _TrainersService.getTrainers(8, 1).subscribe((trainersData) => {

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



  showShortDesciption = true

  alterDescriptionText() {
     this.showShortDesciption = !this.showShortDesciption
  }

}
