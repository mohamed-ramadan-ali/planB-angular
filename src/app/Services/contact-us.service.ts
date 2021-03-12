import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { QueryService } from '../providers/query.service';

@Injectable({
  providedIn: 'root'
})

export class ContactUsService {
 
   
  
  
  constructor(public _HttpClient:HttpClient , private queryServices:QueryService ) {}


  Headers = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
   'Content-Type':  'application/json',
    'Authorization': 'Basic YWRtaW46YWRtaW5AMTIzcXdl'
   })

  postContactUs(userData):Observable<any>{
    
 
  return  this._HttpClient.post('http://localhost:56509/api/Info/ContactUs',userData,{headers:this.Headers} )
  };


}
