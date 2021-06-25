// check for document.readyState to determine whether or not you need to listen for event
// challenge: domcontentloaded used when script is inside html
if( document.readyState !== 'loading' ) {
  // console.log( 'document is already ready, just execute code here' );
  myInitCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
      // console.log( 'document was not ready, place code here' );
      myInitCode();
  });
}

function myInitCode() {

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

}  