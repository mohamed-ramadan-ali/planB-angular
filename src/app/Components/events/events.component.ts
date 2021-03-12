import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventsArr: [];

  constructor(private route: ActivatedRoute, private router: Router,
    private _EventsService: EventsService) {





      _EventsService.getEvents(8, 1).subscribe((eventsData) => {

      this.eventsArr = eventsData;




    })







  }


  ngOnInit(): void {


  };

  pageNumber(event) {
    
    var x = event.target.innerText;





    this._EventsService.getEvents(8, x).subscribe((eventsData) => {

      this.eventsArr = eventsData;




    })
  };

  redirectToEventDetails(eventId){
    // debugger;
    const eventIdencryptedURL = CryptoJS.AES.encrypt(JSON.stringify({eventId}), 'secret').toString();
    this.router.navigate(['/eventDetails'], { queryParams: { event:eventIdencryptedURL } })
  }

}
