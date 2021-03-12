import { Component, OnInit } from '@angular/core';
import{TestService} from '../test.service'

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {

  response:any;
  constructor(private testSevice:TestService) { }

  ngOnInit(): void {
    this.testSevice.getTest().subscribe(data=>{
      // debugger;
      this.response=data;
    })
  }

}
