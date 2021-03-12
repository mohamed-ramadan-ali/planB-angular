import { Injectable } from '@angular/core';
import { QueryService } from '../providers/query.service';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Category} from 'src/app/Models/Category';
import { Course } from '../Models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseServicesService {

  constructor(private queryServices:QueryService) { }
  ///Get Courses from User
  getUserCourses(UserId: number): Observable<any> {
    this.queryServices.setURI(environment.apisUrls.getUserCourses+'?UserId='+UserId+'&');
    this.queryServices.setHeaders();
    return this.queryServices.get().pipe(catchError(this.HandleError(this)))
  };

  getAllCategories():Observable<Category[]>{
    // debugger;
    this.queryServices.setURI(environment.apisUrls.getAllCategories+'?');
    this.queryServices.setHeaders();
    return this.queryServices.get().pipe(catchError(this.HandleError(this)))
  };

  getCategoryCourses(categoryId:number):Observable<any>{
    // debugger;
    this.queryServices.setURI(environment.apisUrls.getCategoryCourses+'?CategoryId='+categoryId+'&');
    this.queryServices.setHeaders();
    return this.queryServices.get().pipe(catchError(this.HandleError(this)))
  };

  getCoursesDetails(userId:number, courseId:number):Observable<Course>{
    // debugger;
    this.queryServices.setURI(environment.apisUrls.getCourseDetails+'?courseId='+courseId+'&UserId='+userId+'&');
    this.queryServices.setHeaders();
    return this.queryServices.get().pipe(catchError(this.HandleError(this)))
  };


// enrole User in Course
enrollInCourse(userId:number, courseId:number):Observable<any>{
  // debugger;
  var obj={
    userId:userId,
    courseId:courseId
  }
  this.queryServices.setURI(environment.apisUrls.enroleInCourse+'?');
  this.queryServices.setHeaders();
  return this.queryServices.post(obj).pipe(catchError(this.HandleError(this)))
};
  public HandleError(self){
    return (error: HttpErrorResponse) => {
      if (error.status==404){
        
        return Observable.throw(error.error);
      }
      else if(error.status==500){
       // self.router.navigate(['error']);
       return Observable.throw(error.error);
      }
      else if(error.status==401){
       // self.router.navigate(['unauthorized']);
        return throwError(error.error);
      }
      else{
        var errorList=[];
        errorList.push(error.error);
        return throwError(errorList);
      }
    }
};
}
