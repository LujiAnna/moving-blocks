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

}
// })();