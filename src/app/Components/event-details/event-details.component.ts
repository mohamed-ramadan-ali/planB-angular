import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { ModalService } from 'src/app/_modal/modal/modal.service';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventId: number;
  eventData: any;
  constructor(private route: ActivatedRoute,
    private modalService: ModalService,  private _EventsService: EventsService) {

  
    
     }

  ngOnInit(): void {

    // debugger;

    this.route.queryParamMap
      .subscribe((params) => {
        // debugger;
        var eventId = params.get('event');
        const decryptedEventId = JSON.parse(CryptoJS.AES.decrypt(eventId, 'secret').toString(CryptoJS.enc.Utf8));

        this.eventId = decryptedEventId.eventId;

      }
      );

      this.getdata();
    
  }

getdata(){


  this._EventsService.getEventDetails(this.eventId).subscribe((eventDetailsData) => {

    this.eventData = eventDetailsData;


console.log(this.eventData)

  })}

  
}
