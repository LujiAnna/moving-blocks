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