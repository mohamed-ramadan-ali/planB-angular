import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { CourseServicesService } from 'src/app/Services/course-services.service';
import { Course } from 'src/app/Models/Course';
// import { Router } from '@angular/router'; 
import { VideoService } from 'src/app/Services/video.service';
import { VideoOtp } from 'src/app/Models/videoOtp';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { stringify } from '@angular/compiler/src/util';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from 'src/app/_modal/modal/modal.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class CourseDetailsComponent implements OnInit {
  courseDetails: Course = new Course();
  userId: number;
  courseId: number;
  errorMess: string;
  VideoOtp: VideoOtp = new VideoOtp();
  VedoSrc: SafeResourceUrl;
  firstVideoGuid: string;

  constructor(
    private route: ActivatedRoute,
    private courseServicesService: CourseServicesService,
    public dialog: MatDialog,
    private modalService: ModalService,
    private sanitizer: DomSanitizer,
    private videoServices: VideoService) { }

  ngOnInit(): void {
    // debugger;

    this.route.queryParamMap
      .subscribe((params) => {
        // debugger;
        var courseId = params.get('course');
        const decryptedcourseId = JSON.parse(CryptoJS.AES.decrypt(courseId, 'secret').toString(CryptoJS.enc.Utf8));

        this.courseId = decryptedcourseId.courseId;
      }
      );
    this.getDetailsCourse(this.courseId);
  };

  getDetailsCourse(courseId) {
    var userId = parseInt(localStorage.getItem('userid'));
    this.courseServicesService.getCoursesDetails(userId, courseId).subscribe(courseDetailsResult => {
      this.courseDetails = courseDetailsResult;
      this.firstVideoGuid = courseDetailsResult.videos[0].guidId;
      // console.log('first video guid -->',this.firstVideoGuid);
      this.getVideoOTP(this.firstVideoGuid);
    });
  };

  enroleInCourse(courseId) {
    // debugger;
    let userId = parseInt(localStorage.getItem('userid'));
    this.courseServicesService.enrollInCourse(userId, courseId).subscribe(result => {
    },
      err => {
        // debugger;
        this.openModal('custom-modal-1');

      });

  };

  getVideoOTP(videoId: string) {
    this.videoServices.getVideoOtp(videoId).subscribe(resutl => {
      //this.download = true;
      this.VideoOtp.otp = resutl.otp;
      this.VideoOtp.playbackInfo = resutl.playbackInfo;
      //'eyJ2aWRlb0lkIjoiYmNmYTI4ZmFiYmU0NGZkYzkyYzk4YWYxZjk3ZDBhNWYifQ==';
      this.VedoSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=" + this.VideoOtp.otp + "&playbackInfo=" + this.VideoOtp.playbackInfo + "?dummyParam=0");
    })
  };

  openModal(id: string) {
    // debugger;
    this.errorMess = 'error in role course';
    this.modalService.open(id);
  };

  closeModal(id: string) {
    this.modalService.close(id);
  };



}
