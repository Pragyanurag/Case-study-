Webcam.set({
  width:310,
  height:300,
  img_format:'png',
  png_quality:90,

  constraints:{
      facingMode: "environment"
  }
});

camera=document.getElementById("camera");
Webcam.attach('#camera');