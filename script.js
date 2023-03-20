'use strict';

// global varriables

let DuckProductContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)')

let clicks = 0;
let maxClicksAllowed = 25;

// State object holds the holds the current state of the application (all existing Product)
//hold all picture data: act as a storage
//State keep track of all data: the state of the website
const state = {
  allDuckProductArray: [],
};

// functional logic : constructor function that take in the name and src
//declaring the properties of all new created objects pass thru this constructor function
function DuckProduct(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

//a random number time the length of allDuckProductArray 
function getRandomNumber() {
  return Math.floor(Math.random() * state.allDuckProductArray.length);
}

function renderDuckProduct() {
  // call the getRandomNumber
  let DuckProduct1 = getRandomNumber();
  let DuckProduct2 = getRandomNumber();
  let DuckProduct3 = getRandomNumber();

  while(DuckProduct1 === DuckProduct2 ) {
    DuckProduct2 = getRandomNumber();
  }while(DuckProduct2 === DuckProduct3 ) {
    DuckProduct3 = getRandomNumber();
  }while(DuckProduct3 === DuckProduct1){
    DuckProduct1 = getRandomNumber()
  }
  //image1 is the global variable created .src and .alt are the property of the object that is accessing img the state.allDuckProductArray is the array we are targeting the pick a image out of [DuckProduct1] is the random number to select the random number that stands for an image in the array 
  image1.src = state.allDuckProductArray[DuckProduct1].src;
  image2.src = state.allDuckProductArray[DuckProduct2].src;
  image3.src = state.allDuckProductArray[DuckProduct3].src;
  image1.alt = state.allDuckProductArray[DuckProduct1].name;
  image2.alt = state.allDuckProductArray[DuckProduct2].name;
  image3.alt = state.allDuckProductArray[DuckProduct3].name;
  state.allDuckProductArray[DuckProduct1].views++; 
  state.allDuckProductArray[DuckProduct2].views++;
  state.allDuckProductArray[DuckProduct3].views++;
}

//event happens in the browser and are not saved. just interacting with the browser
// event.target is a availble to all event that runs. It also listen for what you click on or target.

function handleDuckProductClick(event) {
  if (event.target === DuckProductContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickDuckProduct = event.target.alt;
  for (let i = 0; i < state.allDuckProductArray.length; i++) {
    if (clickDuckProduct === state.allDuckProductArray[i].name) {
      state.allDuckProductArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    DuckProductContainer.removeEventListener('click', handleDuckProductClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    DuckProductContainer.className = 'no-voting';
  } else {
    renderDuckProduct();
  }
}



function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allDuckProductArray.length; i++) {
      let percent = state.allDuckProductArray[i].clicks / 25 * 100;
      console.log(percent)
    let li = document.createElement('li')
    li.textContent = `${state.allDuckProductArray[i].name} had ${state.allDuckProductArray[i].views} view and was clicked ${state.allDuckProductArray[i].clicks} times. It was click ${percent} % of the time.`;
    ul.appendChild(li);
  }
}

// executable code
let bathroom = new DuckProduct ('Bathroom DuckProduct', 'assets/bathroom.jpg');
let bag = new DuckProduct('Bag DuckProduct', 'assets/bag.jpg');
let banana = new DuckProduct('Banana DuckProduct', 'assets/banana.jpg');
let boots = new DuckProduct('Boots DuckProduct', 'assets/boots.jpg');
let breakfast = new DuckProduct('Breakfast DuckProduct', 'assets/breakfast.jpg');
let bubblegum = new DuckProduct('Bubblegum Duck Product', 'assets/bubblegum.jpg');
let chair = new DuckProduct('Chair Duck Product', 'assets/chair.jpg');
let cthulhu = new DuckProduct('Cthulhu Duck Product', 'assets/cthulhu.jpg');
let dogDuck = new DuckProduct('Dog-Duck-Product', 'assets/dog-duck.jpg');
let dragon = new DuckProduct('Dragon Duck Product', 'assets/dragon.jpg');
let pen = new DuckProduct('Pen Duck Product', 'assets/pen.jpg');
let petSweep = new DuckProduct('Pet-Sweep-Product', 'assets/pet-sweep.jpg');
let scissor = new DuckProduct('Scissor Duck Product', 'assets/scissors.jpg');
let shark = new DuckProduct('Shark Duck Product', 'assets/shark.jpg');
let sweep = new DuckProduct('Sweep Duck Product', 'assets/sweep.png');
let tauntaun = new DuckProduct('Tauntaun Duct Product', 'assets/tauntaun.jpg');
let unicorn = new DuckProduct('Unicorn Duck Product', 'assets/unicorn.jpg');
let water = new DuckProduct('Water Duct Product', 'assets/water-can.jpg');
let wineGlass = new DuckProduct('Wine-Glass-Product','assets/wine-glass.jpg');

state.allDuckProductArray.push(bathroom, bag, banana, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissor, shark, sweep, tauntaun, unicorn, water, wineGlass);

renderDuckProduct();

DuckProductContainer.addEventListener('click', handleDuckProductClick);