import { Component, OnInit } from '@angular/core';
import {Category} from 'src/app/Models/Category';
import {Course} from 'src/app/Models/Course';
import { CourseServicesService } from 'src/app/Services/course-services.service';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-courses',
  templateUrl: './category-courses.component.html',
  styleUrls: ['./category-courses.component.css']
})
export class CategoryCoursesComponent implements OnInit {
  

  constructor(private route: ActivatedRoute,private courseServicesService :CourseServicesService,private router: Router) { }
  categories:Category[]=[];
  courses:Course[]=[];
  UserId:number;
  activeLink = this.categories[0];
  background: ThemePalette = 'primary';
  ngOnInit(): void {
    // debugger;
    this.route.queryParamMap
  .subscribe((params) => {
    // debugger;
    var userId = params.get('user');
    if( userId != null)
    {
      const decryptedUserId =JSON.parse( CryptoJS.AES.decrypt(userId, 'secret').toString(CryptoJS.enc.Utf8));
      this.UserId =parseInt(decryptedUserId.getUserId);
       localStorage.setItem('userid',this.UserId.toString());
    }
    else {
      localStorage.setItem('userid','59452');
    }
     }
    );

    this.courseServicesService.getAllCategories().subscribe(data=>{
      // debugger;
      this.categories=data;
      //this.getCategoryCourse(this.categories[0].id);
    });
   
  }

  getCategoryCourse(categoryId){
    // debugger;
     var categroy =this.categories.find(c=>c.name===categoryId.tab.textLabel);
    this.courseServicesService.getCategoryCourses(categroy.id).subscribe(result=>{
      debugger
      this.courses=result.courses;
    },
    er=>{
      // debugger;
      var errrrr=er;
    }
    );
  };

  redirectToCourseDetails(courseId){
    // debugger;
    const courseIdencryptedURL = CryptoJS.AES.encrypt(JSON.stringify({courseId  }), 'secret').toString();
    this.router.navigate(['/course'], { queryParams: { course:courseIdencryptedURL } })
  }



  SlideOptions = { items: 3, dots: true, nav: true ,responsive:{
    0:{
        items:1,
        dots: true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:6,
        nav:true,
        loop:false
    }
} };  
  CarouselOptions = { items: 3, dots: true, nav: true };  

}
