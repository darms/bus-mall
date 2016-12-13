'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var picContainer = document.getElementById('pic-container');
  var left = document.getElementById('left');
  var center = document.getElementById('center');
  var right = document.getElementById('right');

// Global variables
// -----------------
var allProducts = [];
var names = ['bag', 'banana',];
var clickCounter = 0;
// Constructor
// -----------------
function Product(name, filepath) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

// Instances
// -----------------
new Product ('bag', 'img/bag.jpg');
new Product ('banana');



for (var = i; i=0; i<names.length; i++) {
  new Product(names[i]);
}
console.table(allProducts);
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
//
function rand() {
  return (Math.random(Math.floor)*allProducts.length);
  // generate a random number between 0 and allProducts.length
}

function preventDupes() {
  // logic to prevent duplicates
  // duplicates with prior set of images
  // duplicates within the current set of images
}

function showThreePics() {
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filepath;
  allProducts [newArray[0]].views+=1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts [newArray[1]].views+=1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts [newArray[2]].views += 1;
  // this will place three new images on the page
}

function renderList() {
  // display a list of items and total clicks/views
}

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked

  //alert for clicks on images
  if (event.target.id === 'pic-container');{
    return('click on a picture,not the background!!!');
    console.log('CLICK ON DEE PICKLETURES!');
  }
  if (event.target.id === 'left'){
    allProducts[newArray[0]] += 1;
    console.log(allProducts[newArray[0]]);
  }
  if (event.target.id === 'center'){
    allProducts[newArray[0]] += 1;
    console.log(allProducts[newArray[0]]);
  }
  if (event.target.id === 'right'){
    allProducts[newArray[0]] += 1;
    console.log(allProducts[newArray[0]]);
  }

  clickCounter += 1;
    // check whether total clicks <25
    if (clickCounter < 5) {
      return alert('You outta clicks!');
    }
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
    // clear old images
    showThreePics();
    console.log(event.target.src, 'was clicked');
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
picContainer.allEventListener('click', handleClick);
