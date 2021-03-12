import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import{AboutService}from 'src/app/Services/about.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutFullDesc="";
  aboutShortDesc="";
  aboutVideo:string='';
  aboutGoal="";
  aboutMission="";
  aboutValue="";
  aboutVision="";




  constructor(private route: ActivatedRoute,private router: Router,
    private _AboutService:AboutService) { 



      _AboutService.getAbout().subscribe((aboutData)=>{

        this.aboutFullDesc= aboutData.fullDescription
        this.aboutShortDesc= aboutData.shortDescription
       console.log( this.aboutVideo= aboutData.video)
        this.aboutGoal= aboutData.goal
        this.aboutMission= aboutData.mission
        this.aboutValue= aboutData.value
        this.aboutVision= aboutData.vision
      } )
    }

  ngOnInit(): void {
  }

}
