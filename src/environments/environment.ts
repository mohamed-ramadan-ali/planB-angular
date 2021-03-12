// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://142.11.216.78:11443/',
  apisUrls: {
    getUserCourses:'api/Courses/GetMyCoruses',
    getAllCategories:'api/Courses/GetAllCategories',
    getCategoryCourses:'api/Courses/GetCategoryCourses',
    getCourseDetails:'api/Courses/GetCourseDetails',
    enroleInCourse:'api/Courses/EnroleInCourse',
    userProfile:'api/CustomerInfo/GetUserProfile',
    GetVideoOTP:'api/Videos/GetVideoOTPById',
    getOffer:'api/Info/GetOfferContent',
    getAbout:'api/Info/GetAboutContent',
    getTrainers:'api/Info/GetAllInstrutors',
    PostContact:'api​/Info​/ContactUs',
    getEvents:'api/Events/GetAllEvents',
    getEventDetails:'api/Events/GetEventDetails',
    SetVideoAttendance:'api/CustomerInfo/SetVideoAttendance',

  },
  encryptConfig:{
    key:'0123456789abcdef0123456789abcdef',
    iv:'abcdef9876543210abcdef9876543210'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
