// Dropdown Animations

function up(a) {
  var listClasses = document.querySelectorAll(a);
  for (var i = listClasses.length - 1; i >= 0; i--) {
    listClasses[i].style.maxHeight = '0';
  };
};

function down(elementInfo, topPosition, leftPosition) {
  if (elementInfo == ".firstTier") {
    var x = document.querySelectorAll(elementInfo);
    for (var i = x.length - 1; i >= 0; i--) {
      x[i].style.maxHeight = '1000px';
      x[i].style.top = topPosition;
      x[i].style.left = leftPosition;
    };
  } else {
    var listArray = document.getElementById(elementInfo).childNodes;
    var arrLength = listArray.length;
    for (var i = 0; i < arrLength; i++) {
      listArray[i].style.maxHeight = '1000px';
      listArray[i].style.top = topPosition;
      listArray[i].style.left = leftPosition;
    };
  };
};

// Second Tier Dropdown List Generator

var kittens  = ["Kitten Option #1", "Kitten Option #2", "Kitten Option #3", "Kitten Option #4", "Kitten Option #5"];
var puppies  = ["pug", "boxer", "golden retriever", "doberman", "hound of the baskervilles"];
var birds    = ["golden eagle", "thrush", "bird of paradise", "parakeet", "raven"];
var fish     = ["mahi-mahi", "saba", "sake", "Albacore", "Blue-fin"];
var dino = ["ankylosaurus", "T-rex", "protoceratops", "quetzalcoatlus", "velociraptor"];

function listGen(array, elementId) {
  list = "";
  var i;
  for (i = 0; i < array.length; i++) {
    list += "<li class=\"secondTier\">" + array[i] + "</li>";
  };
  document.getElementById(elementId).innerHTML = list;
};