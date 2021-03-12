import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/Services/contact-us.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {





  constructor(public _ContactUsService: ContactUsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  contactForm: FormGroup = new FormGroup({
    'fullName': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern(/^[\w\s]+$/), Validators.pattern(/^([^0-9]*)$/)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'phone': new FormControl(null, [Validators.required, Validators.pattern(/^[(+)0-9]+(\.?[0-9]+)?$/), Validators.minLength(8), Validators.maxLength(15)]),
    'message': new FormControl(null, [Validators.pattern(/^[\w\s]+$/), Validators.required]),
  })

  getFormData(contactFormData) {



    this._ContactUsService.postContactUs(contactFormData.value).subscribe(postResponses => {

      console.log(postResponses);

      if(postResponses== true){
        document.getElementById("succsesSend").classList.remove('d-none');
        document.getElementById("succsesSend").classList.add('d-inline');
      }
      else{
        document.getElementById("failedSend").classList.remove('d-none');
        document.getElementById("failedSend").classList.add('d-inline');
       
      }
      
      ;
      console.log(contactFormData.value);

    });

  };
  

  hideSuccsesAlirte(){
    document.getElementById("succsesSend").classList.remove('d-inline');
    document.getElementById("succsesSend").classList.add('d-none');
  };


  hideFailedAlirte(){
    document.getElementById("failedSend").classList.remove('d-inline');
    document.getElementById("failedSend").classList.add('d-none');
    
  };


}
