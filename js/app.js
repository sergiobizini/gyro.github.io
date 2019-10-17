var ball   = document.querySelector('#b1');
var balls = document.querySelectorAll('.ball'),i;
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

function sleep(milliseconds){
  var start = new Date().getTime();
  while(new Date().getTime() - start < milliseconds){

  }
}
function handleOrientation(event) {


  for (i = 0; i < balls.length; i++) {


  var maxX = garden.clientWidth  - balls[i].clientWidth;
  var maxY = garden.clientHeight - balls[i].clientHeight;
  var speed =  0.5;


  var y = event.beta;  // In degree in the range [-180,180]    up down
  var x = event.gamma; // In degree in the range [-90,90]      left right

  output.innerHTML  = "top : " + balls[i].style.top + "\n";
  output.innerHTML += "left: " + balls[i].style.left + "\n";
  // output.innerHTML += "alpha: " + event.alpha + "\n";
  // output.innerHTML += "ball1: " + balls[0] + "ball2: " + balls[1] +"ball3: " + balls[2] +"\n";
  // output.innerHTML += "ball1wid: " + balls[0].clientWidth + "ball2wid: " + balls[1].clientWidth+"ball3wid: " + balls[2].clientWidth +"\n";
  // output.innerHTML += "ball1wid: " + balls[0].clientHeight + "ball2wid: " + balls[1].clientHeight+"ball3wid: " + balls[2].clientHeight +"\n";
  // output.innerHTML += "gardW: " + garden.clientWidth + "gardH: " + garden.clientHeight +"\n";
  output.innerHTML  += "1: "+"\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  // if (x >  90) { x =  90};
  // if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  // x += 90;
  // y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  // balls[i].style.top  = (maxX*x/180 - 10) + (i-1)*45 + "px";
  // balls[i].style.left = (maxY*y/180 - 10) + "px";
  y_px = balls[i].style.top.match(/\d+/);
  x_px = balls[i].style.left.match(/\d+/);


  if ((speed + y_px < 180) && (speed + y_px > 0)){
    balls[i].style.top  = parseint(y_px) + parseint(y*speed) + "px";  //200 -100 -5
  } else {
    balls[i].style.top = "180px";}
  // if ((speed + x_px < 180) && (speed + x_px > 0)){
  //   balls[i].style.left  = x_px + x*speed + "px";  //200 -100 -5
  // }
  // sleep(1000);

}
}

window.addEventListener('deviceorientation', handleOrientation,1);
