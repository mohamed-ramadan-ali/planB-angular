import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getTest(){
    
    const headers = { 
      'Authorization': 'Apisecret Cf4y6Kkdl2GNQOen9vYwBCZYmepJL4TDFK4hHukbxxTn9kNiWW0ls2HRRcHB1zIC', 
       'Content-Type': 'application/json',
       'accept':' application/json\n\n{\n  \"ttl\": 300\n}'
       }
    return this.http.post('https://dev.vdocipher.com/api/videos/bcfa28fabbe44fdc92c98af1f97d0a5f/otp',{headers})
  }
}
