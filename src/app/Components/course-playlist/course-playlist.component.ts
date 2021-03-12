import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { VideoOtp } from 'src/app/Models/videoOtp';
import { CourseServicesService } from 'src/app/Services/course-services.service';
import * as CryptoJS from 'crypto-js';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import{VideoService} from 'src/app/Services/video.service'
import { SafeMethodCall } from '@angular/compiler';
import { User } from 'src/app/Models/User';
declare var VdoPlayer:any;
declare var vdo:any;


@Component({
  selector: 'app-course-playlist',
  templateUrl: './course-playlist.component.html',
  styleUrls: ['./course-playlist.component.css']
})
export class CoursePlaylistComponent implements OnInit {

  courseDetails:Course=new Course();
  courseId:number;
  VedoSrc:SafeResourceUrl;
  download:boolean = true;
  videoName:string='';
  videoindex:number;
  VideoOtp:VideoOtp=new VideoOtp();

  constructor(private route: ActivatedRoute,private router: Router,
    private courseServices:CourseServicesService,private sanitizer: DomSanitizer,
    private videoServices:VideoService) { }

  ngOnInit(): void {
 this.courseDetails.videos=[];
    this.route.queryParamMap
  .subscribe((params) => {
    // debugger;
    var courseId = params.get('course');
    const decryptedcourseId = JSON.parse(CryptoJS.AES.decrypt(courseId, 'secret').toString(CryptoJS.enc.Utf8));
    this.courseId = decryptedcourseId.courseId;
      }
     );
    this.getDetailsCourse(this.courseId);
  }


  getDetailsCourse( courseId){
    // debugger;
    var userId =parseInt(localStorage.getItem('userid'));
   this.courseServices.getCoursesDetails(userId, courseId).subscribe(courseDetailsResult=>{
     debugger;
     this.courseDetails=courseDetailsResult;
     this.videoName=this.courseDetails.videos[0].name;
     this.videoindex=1;
    // debugger;
     console.log(this.courseDetails);
   },
   error=>{
     console.error(error);
   },
   ()=>{
    // debugger;
    
      this.getVideoOTP(this.courseDetails.videos[0].guidId);
   }
   );
 };

 nextVideo(video:any,index:number){
  // debugger;
   // hide iframe
   this.download = false;

  setTimeout(()=>{
    this.download = true;
  },30);
  this.VideoOtp.otp='';
  this.VideoOtp.playbackInfo='';
  this.VedoSrc='';
  this.getVideoOTP(video.guidId);
   this.videoName=video.name;
   this.videoindex=index+1;

};

getVideoOTP(videoId:string){
  this.videoServices.getVideoOtp(videoId).subscribe(resutl=>{
  //this.download = true;
    this.VideoOtp.otp=resutl.otp;
    this.VideoOtp.playbackInfo=resutl.playbackInfo;
    //'eyJ2aWRlb0lkIjoiYmNmYTI4ZmFiYmU0NGZkYzkyYzk4YWYxZjk3ZDBhNWYifQ==';
   // this.VedoSrc=this.sanitizer.bypassSecurityTrustResourceUrl("https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp="+this.VideoOtp.otp+"&playbackInfo="+this.VideoOtp.playbackInfo+"?dummyParam=0");
    var video = new VdoPlayer({
      otp: this.VideoOtp.otp,
      playbackInfo:
       btoa(JSON.stringify({
         videoId:videoId
       })),
      theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
      // the container can be any DOM element on website
      container: document.querySelector( "#embedBox" ),
    });

     // you can directly call any methods of VdoPlayer class from here. e.g:
     video.addEventListener(`play`, () => {
       this.updateProgress(videoId) // this will auto-start the video
     console.log('loaded');
    });

  })
};

updateProgress(videoId:string){
  debugger;
  var userId =parseInt(localStorage.getItem('userid'));
  this.videoServices.SetVideoAttendance(userId,videoId).subscribe(resutl=>{
    debugger;
  })
}

}
