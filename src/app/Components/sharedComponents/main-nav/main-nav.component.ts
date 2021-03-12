import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(
    private router: Router,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit(): void {
    localStorage.setItem('language', "en");
    this.checkCurrentLanguage();
  }

  changeLangage(lang: string) {
    // debugger;
    let htmlTag = this.document.getElementsByTagName(
      "html"
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    if(lang !== localStorage.getItem('language')){
      localStorage.setItem('language', lang);
      this.document.location.reload();
    }
    // this.document.location.reload();
    // this.changeCssFile(lang);
  }

  checkCurrentLanguage(){
    if(localStorage.getItem('language'))
      {
        let currLanguage = localStorage.getItem('language');
        this.changeLangage(currLanguage);
      }
  }

  redirectToMycourses(){
    // debugger;
    this.router.navigate(['/myCourse']);
  }

}
