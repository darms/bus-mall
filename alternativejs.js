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
  return Math.random(Math.floor)*allProducts.length;
  // generate a random number between 0 and allProducts.length
}

function preventDupes() {
  // logic to prevent duplicates
  // duplicates with prior set of images
  // duplicates within the current set of images
}

function showThreePics() {
  // this will place three new images on the page
}

function renderList() {
  // display a list of items and total clicks/views
}

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  // tally the click
  // display 3 new images
  // prevent duplicates
  // alert for clicks not on images
  // clear old images
  // check whether total clicks <25
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
picContainer.allEventListener('click', handleClick);
