'use strict';


var newArray = [];
var oldArray = [];

var titles = [];
var votes = [];
// -----------------
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var myChart = document.getElementById('myChart').getContext('2d');
var resultsButton = document.getElementById('getResults');

// Global variables
// -----------------
var allProducts = [];
var names = ['bag', 'banana','bathroom', 'boots','breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var clickCounter = 0;
var results = document.getElementById('results');
// var resultButton = document.createElement('button');
// resultButton.textContent = "See Results";
var stats = document.getElementById('stats');

// Constructor
// -----------------
function Product ( name, filepath, clicks, views) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}



for (var i= 0; i < names.length; i++) {
  new Product(names[i]);

}

function rand() {
  return Math.floor(Math.random()* names.length);
}


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

for ( var i = 0; i < 10; i ++) {
  makeArrayOfThreeNumbers();
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
  // display a list of items and total clicks/views
function renderList(event) {
  event.preventDefault();
  for ( var i = 0; i < allProducts.length; i++){
    var liEl = document.createElement('li');

    liEl.textContent = allProducts[i].name + ' has ' +
    allProducts[i].views +' views and ' + allProducts[i].clicks + ' clicks.';
    console.log(allProducts[i].name + ' has ' +
        allProducts[i].views +' views and ' + allProducts[i].clicks + ' clicks');
    stats.appendChild(liEl);
  }
}

function handleClick(event) {
  // console.log(event.target);
  event.preventDefault();
  //alert for clicks on images
  if (event.target.id === 'pic-container'){
    return alert('click on a picture,not the background!!!');
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

  function makeButton(){
    resultsButton.style.display = 'block';

  }

  clickCounter += 1;
  console.log(clickCounter, 'total clicks');
  if (clickCounter > 24){
    // results.appendChild(resultButton);
    makeButton();
    picContainer.removeEventListener('click', handleClick);
    return alert('No more clicks for you! Below a button will appear. Simply click on it and you can view your voting results.');
  }

  showThreePics();
}
//Canvas Stuffs
function getChartData (){
  for ( i =0; i < allProducts.length; i++){
    titles[i] = allProducts[i].name;
    votes[i] = allProducts[i].clicks;
  }}


var data = {
  labels: titles, // pulling from product names
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
      data: votes,
    }
  ]
};

function drawChart(){
  new Chart(myChart, {
    type: "bar",
    data: data,
    options: {
      responsive: false,
      title: {
        display: true,
        text: 'Clicks Per Item'
      },
      legend: {
        display: false
      }
        // scales: {
        //     xAxes: [{
        //         stacked: true
        //     }],
        //     // yAxes: [{
            //     stacked: true
            // }]
        // }
    }
  });
}

function magicChart() {
  getChartData();
  drawChart();

}

showThreePics();
picContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', magicChart);
