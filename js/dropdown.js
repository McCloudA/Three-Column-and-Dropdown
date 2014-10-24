
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


 