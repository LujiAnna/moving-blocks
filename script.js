// (function () {
  // set up objects to utilize content from players
  let box = {};
  
  // select elements on page to reusable js objects
  // these dont change, hence use const
  const score = document.querySelector('.score');
  const gameAreaEle = document.querySelector('.gameArea');
  // select game area which will be used to make grid dynamically
  const gameArea = gameAreaEle.getBoundingClientRect();
  // console.log(score, gameAreaEle);
  // console.log(gameArea);
  
  // create an array to add squares to
  // helps to know which square the player is on
  let squares = [];

  // calculate start position of gamebox to make grid of 8 by 2
  // later we change this to big-screen or adopt to full-screen on different devices
  let gameBox = {
    x:Math.floor(gameArea.width/100), //x=8
    y:Math.floor(gameArea.height/100) //y=2
  };

  // space
  let player = {
    // width
    speed: 100,
    // position
    square: 1,
    score: 0
  }

// trigger build of grid after page has loaded.
// similar to document.ready object in jquery 
// document.addEventListener('DOMContentLoaded', build);
// check for document.readyState to determine whether or not you need to listen for event
// challenge: domcontentloaded used when script is inside html
// if( document.readyState !== 'loading' ) {
//   // console.log( 'document is already ready, just execute code here' );
//   init();
// } else {
//   document.addEventListener('DOMContentLoaded', function () {
//       // console.log( 'document was not ready, place code here' );
//   init();
//   });
// }
build();

// event which triggered that event
document.addEventListener('keyup', function(e){
  console.log(e);
  console.log(e.keyCode);

   // objects of keys we want to allow
   const allowKey = {
    37:'left', 
    38:'up', 
    39:'right',
    40:'down'
  }
  console.log(allowKey[e.keyCode]);
});



// build visual part-grid and add player->box 
function build(){
  box = document.createElement('div');
  // console.log(box);
  // set class
box.classList.add('box');
// console.log(box);
// add variables which wont appear but contained in object
// start game at top left corner
box.x = gameArea.top;
box.y = gameArea.left;
console.log(box);
// apply style to add visuals
// movable numbers as player move the box
box.style.top=box.y + 'px';
box.style.left=box.x + 'px';
// console.log(box);
// add to game area elements to add to the page
gameAreaEle.appendChild(box);

// loop through to show grids w/in square
let counter = 1;
// vertical grid builder
for(let y=0; y<gameBox.y; y++){
  // horizontal grid builder
  for(let x=0; x<gameBox.x; x++){
    squares[counter]=document.createElement('div');
    squares[counter].innerHTML = counter;
    // add class called square 
    squares[counter].classList.add('square');
    // child is square counter value object
    gameAreaEle.appendChild(squares[counter]);
    counter++;
  }
}
// 17 squares : 8 by 2 grid sitting in square array. first one is empty 
// ready to be selected and apply class and be manipulated
// changed variables from px to vh/vw to dynamically create grid on window screen
console.log(squares);
}

// })();