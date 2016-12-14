'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
var newArray = [];
var oldArray = [];
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
var names = ['bag', 'banana','bathroom', 'boots','breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var clickCounter = 0;
var results = document.getElementById('results');
var resultButton = document.createElement('button');
resultButton.textContent = "See Results";
// Constructor
// -----------------
function Product(name, filepath, clicks, views) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

// Instances
// -----------------
// new Product ('bag');
// new Product ('banana');


for (var i= 0; i < names.length; i++) {
  new Product(names[i]);
  // console.table(allProducts);
}

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
//
function rand() {
  return Math.floor(Math.random()* names.length);
  }

// function preventDupes() {
  function makeArrayOfThreeNumbers () {
    oldArray[0] = newArray[0];
    oldArray[1] = newArray[1];
    oldArray[2] = newArray[2];


    newArray[0] = rand();
    while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] ||
    newArray[0] === newArray[2]){
      // console.log( newArray ,'broken value in 1st position in new array');
      newArray[0] = rand ();
      // console.log('fixed');
    }
    newArray[1] = rand();
    while (newArray[0] === newArray[1]) {
      newArray[1] = rand();
      // console.log('caught dupes between 1st & 2nd numbers');
    }
    newArray[2] = rand();
    while (newArray[2] === newArray[0] || newArray[2] === newArray[1]){
      // console.log(newArray, 'old broken array');
      newArray[2] = rand();
    // console.log('caught a dupe with the 3rd number');
    }

  }

  makeArrayOfThreeNumbers();
  // console.log( newArray , 'new array');
  // console.log(  oldArray , 'old Array');

  for(var i = 0; i <10; i++) {
    makeArrayOfThreeNumbers();
    // console.log('----NEW RUN OF MAKING AN ARRAY-----');
    // console.log( oldArray,' old array');
    // console.log( newArray, 'new Array');
}

function showThreePics() {
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filepath;
  allProducts [newArray[0]].views +=1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts [newArray[1]].views +=1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts [newArray[2]].views += 1;
  // this will place three new images on the page
}

function renderList() {
  // display a list of items and total clicks/views
}

function handleClick(event) {
  // console.log(event.target);
  event.preventDefault();
  //alert for clicks on images
  if (event.target.id === 'pic-container'){
    return  alert('click on a picture,not the background!!!');
  }

  if (event.target.id === 'left'){
    allProducts[newArray[0]].clicks += 1;
  console.log(allProducts[newArray[0]].name+ ' has ' +allProducts[newArray[0]].clicks + ' clicks.');
  }
  if (event.target.id === 'center'){
    allProducts[newArray[1]].clicks += 1;
      console.log(allProducts[newArray[1]].name+ ' has ' +allProducts[newArray[1]].clicks + ' clicks.');
  }
  if (event.target.id === 'right'){
    allProducts[newArray[2]].clicks += 1;
    console.log(allProducts[newArray[2]].name+ ' has ' +allProducts[newArray[2]].clicks + ' clicks.');

  }

  clickCounter += 1;
  console.log(clickCounter, 'total clicks');
  if (clickCounter > 3){
    results.appendChild(resultButton);
    picContainer.removeEventListener('click', handleClick);

    return alert('No more clicks for you!');
  }
    // check whether total clicks <25
    // if (clickCounter > 5) {
      // return alert('You outta clicks!');
    // }
    // console.log(event.target.src, 'was clicked');
        showThreePics();
}
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
    // clear old images

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
picContainer.addEventListener('click', handleClick);
