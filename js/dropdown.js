// Dropdown Animations
// ***********************************


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
// ***********************************


var kittens  = ["Kitten Option #1", "Kitten Option #2", "Kitten Option #3", "Kitten Option #4", "Kitten Option #5"];
var puppies  = ["pug", "boxer", "golden retriever", "doberman", "hound of the baskervilles"];
var birds    = ["golden eagle", "thrush", "bird of paradise", "parakeet", "raven"];
var fish     = ["mahi-mahi", "saba", "sake", "Albacore", "Blue-fin"];
var dino = ["ankylosaurus", "T-rex", "protoceratops", "quetzalcoatlus", "velociraptor"];

function listGenSecondTier(array, elementId) {
  list = "";
  var i;
  for (i = 0; i < array.length; i++) {
    list += "<li class=\"secondTier\">" + array[i] + "</li>";
  };
  document.getElementById(elementId).innerHTML = list;
};


// 1st Tier Dropdown List Generator
// ***********************************

function listGenFirstTier(first_tier_array) {
  for (var key in first_tier_array) {
    var obj = first_tier_array[key];
      document.getElementById("firstTierNavList").innerHTML += "<li class=\"firstTier\" onmouseenter=\"down('" + obj.list_id + "', '" + obj.vertical_offset + "', '160px')\" onmouseleave=\"up('.secondTier')\">" + obj.list_title + "</li>";
  };
};

var first_dropdown = {
  "key_1": {
    "list_id": "kittenList",
    "vertical_offset": "-90px",
    "list_title": "Kittens"
  },
  "key_2": {
    "list_id": "puppieList",
    "vertical_offset": "-72px",
    "list_title": "Puppies"
  },
  "key_3": {
    "list_id": "birdList",
    "vertical_offset": "-54px",
    "list_title": "Birds"
  },
  "key_4": {
    "list_id": "fishList",
    "vertical_offset": "-36px",
    "list_title": "Fish"
  },
  "key_5": {
    "list_id": "dinoList",
    "vertical_offset": "-18px",
    "list_title": "Dinosaurs"
  }
};
