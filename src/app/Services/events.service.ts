import { Injectable } from '@angular/core';
import { QueryService } from '../providers/query.service';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private queryServices:QueryService) { }


  getEvents(limitNum,PageNum):Observable<any>{
    // debugger;
    this.queryServices.setURI(environment.apisUrls.getEvents+'?limit='+limitNum+'&page='+PageNum+'&');
    this.queryServices.setHeaders();
    return this.queryServices.get()
  };





  getEventDetails(eventId:number): Observable<any>{

    this.queryServices.setHeaders();
    this.queryServices.setURI(environment.apisUrls.getEventDetails+'?eventId='+eventId+'&');
     return this.queryServices.get()

  }
}
