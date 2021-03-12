import { AngularMaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestApiComponent } from './test-api/test-api.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './Components/courses/courses.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { CategoryCoursesComponent } from './Components/category-courses/category-courses.component';
import { MainNavComponent } from './Components/sharedComponents/main-nav/main-nav.component';
import { FooterComponent } from './Components/sharedComponents/footer/footer.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './Components/home/home.component';
import { ModalModule } from './_modal/modal/modal.module';
import { CoursePlaylistComponent } from './Components/course-playlist/course-playlist.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { GallerySliderComponent } from './Components/gallery-slider/gallery-slider.component';
import { TrainersComponent } from './Components/trainers/trainers.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import{ReactiveFormsModule}from '@angular/forms';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { EventsComponent } from './Components/events/events.component';
import { CoursesPageComponent } from './Components/courses-page/courses-page.component';
import { InstractoresSliderComponent } from './Components/instractores-slider/instractores-slider.component';
import { OurTalksComponent } from './our-talks/our-talks.component';
import { TrainersDetailsComponent } from './Components/trainers-details/trainers-details.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CategoryCoursesComponent,
    MainNavComponent,
    FooterComponent,
    HomeComponent,
    CoursePlaylistComponent,
    AboutUsComponent,
    GallerySliderComponent,
    TrainersComponent,
    ContactUsComponent,
    EventsComponent,
    CoursesPageComponent,
    InstractoresSliderComponent,
    OurTalksComponent,
    TrainersDetailsComponent,
    EventDetailsComponent,
 
  
  
  ],
  imports: [ SlickCarouselModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ModalModule,
   OwlModule, 
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
