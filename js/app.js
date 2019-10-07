var balls   = document.querySelectorAll('.ball');

var ball1 = document.querySelector('#b1');
var ball2 = document.querySelector('#b2');
//var ball3 = document.querySelector('#b3');

var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

output.innerHTML += "typo SelectorAll balls: " + typeof balls + "\n";
output.innerHTML += "typo ball1: " + typeof balls1 + "\n";

var maxX = garden.clientWidth  - ball1.clientWidth;
var maxY = garden.clientHeight - ball1.clientHeight;



//     console.log("b1: "+ball1.clientHeight+"\n"+"b2: "+ball2.clientHeight+"\n"+"b3: "+ball3.clientHeight+"\n");
// console.log("b1w: "+ball1.clientWidth+"\n"+"b2w: "+ball2.clientWidth+"\n"+"b3w: "+ball3.clientWidth+"\n");

// function handleOrientation(event) {

  balls.forEach((ball) => {
  button.addEventListener('deviceorientation', () => {
    // function(ball, currentIndex, listObj) {



var x = event.beta;  // In degree in the range [-180,180]
var y = event.gamma; // In degree in the range [-90,90]

//output.innerHTML  = "beta : " + x + "\n";
//output.innerHTML += "gamma: " + y + "\n";

// Because we don't want to have the device upside down
// We constrain the x value to the range [-90,90]
if (x >  90) { x =  90};
if (x < -90) { x = -90};

// To make computation easier we shift the range of
// x and y to [0,180]
x += 90;
y += 90;

// 10 is half the size of the ball
// It center the positioning point to the center of the ball
ball.style.top  = (maxX*x/180 - 10) + "px";
ball.style.left = (maxY*y/180 - 10) + "px";

      // console.log(ball + ', ' + currentIndex);
      // output.innerHTML += "typo ball: " + typeof ball + "\n";
    }
  );
});

// window.addEventListener('deviceorientation', handleOrientation);
