import { Injectable } from '@angular/core';
import { QueryService } from '../providers/query.service';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private queryServices:QueryService) { }

  getOffer():Observable<any>{
    // debugger;
    this.queryServices.setURI(environment.apisUrls.getOffer+'?');
    this.queryServices.setHeaders();
    return this.queryServices.get()
  };

}
