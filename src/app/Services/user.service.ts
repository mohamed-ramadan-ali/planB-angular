import { Injectable } from '@angular/core';
import { QueryService } from '../providers/query.service';
import {environment}from 'src/environments/environment'
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private queryServices:QueryService) { }

  getUserProfile(userId:number): Observable<any>{

    this.queryServices.setHeaders();
    this.queryServices.setURI(environment.apisUrls.userProfile+'?UserId='+userId+'&');
     return this.queryServices.get().pipe(catchError(this.HandleError(this)))

  }

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
