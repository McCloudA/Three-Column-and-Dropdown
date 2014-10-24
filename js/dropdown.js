// https://gist.github.com/ludder/4226288

/*
Element to slide gets the following CSS:
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s ease 0s;
*/
 
/**
 * Like jQuery's slideDown function - uses CSS3 transitions
 * @param  {Node} elem Element to show and hide
 */

function down(a, b, c) {
  var x = document.querySelectorAll(a);
  if (b === undefined || c === undefined) {
    for (var i = x.length - 1; i >= 0; i--) {
      x[i].style.maxHeight = '1000px';
    };
  } else {
    for (var i = x.length - 1; i >= 0; i--) {
      x[i].style.maxHeight = '1000px';
      x[i].style.top = b;
      x[i].style.left = c;
    };
  };
};

function up(a) {
  var x = document.querySelectorAll(a);
  for (var i = x.length - 1; i >= 0; i--) {
    x[i].style.maxHeight = '0';
  };
};


 
/**
 * Call once after timeout
 * @param  {Number}   seconds  Number of seconds to wait
 * @param  {Function} callback Callback function
 */
function once (seconds, callback) {
  var counter = 0;
  var time = window.setInterval( function () {
    counter++;
    if ( counter >= seconds ) {
      callback();
      window.clearInterval( time );
    }
  }, 400 );
}

