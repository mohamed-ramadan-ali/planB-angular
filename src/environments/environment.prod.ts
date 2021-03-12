export const environment = {
  production: true,
  api: 'https://142.11.216.78:11443/',
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
    SetVideoAttendance:'api/CustomerInfo/SetVideoAttendance',
  }, 
  encryptConfig:{
    key:'0123456789abcdef0123456789abcdef',
    iv:'abcdef9876543210abcdef9876543210'
  }
};
