
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


// Sandbox

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var kittens  = ["Kitten Option #1", "Kitten Option #2", "Kitten Option #3", "Kitten Option #4", "Kitten Option #5"];
var puppies  = ["pug", "boxer", "golden retriever", "doberman", "hound of the baskervilles"];
var birds    = ["golden eagle", "thrush", "bird of paradise", "parakeet", "raven"];
var fish     = ["mahi-mahi", "saba", "sake", "Albacore", "Blue-fin"];
var dino = ["ankylosaurus", "T-rex", "protoceratops", "quetzalcoatlus", "velociraptor"];

function listGen(listRankAbc, array, elementId) {
  list = "";
  var i;
  for (i = 0; i < array.length; i++) {
    list += "<li class=\"secondTier " + listRankAbc + "\">" + array[i] + "</li>";
  };
document.getElementById(elementId).innerHTML = list;
console.log(list);
};