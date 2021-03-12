import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import{HomeService}from 'src/app/Services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


   GetOffer="";


  constructor(private route: ActivatedRoute,private router: Router,
    private _HomeService:HomeService) {





      _HomeService.getOffer().subscribe((offerData)=>{

        this.GetOffer= offerData.description
      } )



     }

  ngOnInit(): void {

   
  }


  
}
