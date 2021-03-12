import { HomeComponent } from './Components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestApiComponent } from './test-api/test-api.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CategoryCoursesComponent } from './Components/category-courses/category-courses.component';
import { CourseDetailsComponent } from "./Components/course-details/course-details.component";
import { CoursePlaylistComponent } from './Components/course-playlist/course-playlist.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { TrainersComponent } from './Components/trainers/trainers.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { EventsComponent } from './Components/events/events.component';
import {CoursesPageComponent} from './Components/courses-page/courses-page.component';
import {EventDetailsComponent} from './Components/event-details/event-details.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
},{
  path:'home',
  component:HomeComponent,
},
{
  path:'courses',
  component:CoursesPageComponent,
},
{
  path:'trainers',
  component:TrainersComponent,
},
{
  path:'about-us',
  component:AboutUsComponent,
},
{
  path:'events',
  component:EventsComponent,
},
{
  path:'contact-us',
  component:ContactUsComponent,
},
  {
  path:'eventDetails',
  component:EventDetailsComponent,
},{
  path:'courses/:userId',
  component:CoursesComponent
},
{
  path:'Categories',
  component:CategoryCoursesComponent
},{
  path:'course',
  component: CourseDetailsComponent
},{
  path:'myCourse',
  component: CoursesComponent
},
{
  path:'CoursePlayList',
  component: CoursePlaylistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
