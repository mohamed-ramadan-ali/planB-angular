import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CourseServicesService } from 'src/app/Services/course-services.service';
import * as CryptoJS from 'crypto-js';
import {UserService} from 'src/app/Services/user.service';
import{User} from 'src/app/Models/User';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  UserId:number;
  user:User=new User();
  userCourses:any=[];
  constructor(private route: ActivatedRoute,private router: Router,
    private courseServices:CourseServicesService,private userService:UserService) {
    // debugger;
    this.getMyCourses(); 
  }

  ngOnInit(): void {

   this.getUserProfile();  
  };
 
  getUserProfile(){
    this.UserId=parseInt(localStorage.getItem('userid'));
      if(this.UserId !== undefined || this.UserId !== 0)
      {
          this.userService.getUserProfile(this.UserId).subscribe(user=>{
            // debugger;
           this.user=user;
           this.user.photo='../../../assets/imgs/amr.png';
         });

      }
  }

  getMyCourses(){
     this.UserId=parseInt(localStorage.getItem('userid'));
      if(this.UserId !== undefined || this.UserId !== 0)
      {
          this.courseServices.getUserCourses(this.UserId).subscribe(courses=>{
            // debugger;
           this.userCourses=courses;
         });

      }

    };

    redirectToCoursePlayList(courseId){
      // debugger;
      const courseIdencryptedURL = CryptoJS.AES.encrypt(JSON.stringify({courseId  }), 'secret').toString();
  
      this.router.navigate(['/CoursePlayList'], { queryParams: {course:courseIdencryptedURL } })
    };


  }


