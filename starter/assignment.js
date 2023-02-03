"use strict";

//? Assignment 1

//* 1.

function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return countryDescription;
}

const countryIndia = describeCountry("India", 138, "New Delhi");
console.log(countryIndia);

//* 2.

const countryFrance = describeCountry("France", 11, "Paris");
const countryNepal = describeCountry("Nepal", 6, "Kathmandu");
const countryRussia = describeCountry("Russia", 22, "Moscow");
console.log(countryFrance);
console.log(countryNepal);
console.log(countryRussia);

// --------------------------------------------------------------

//? Assignment 2

//* 1, 2, 3.

function percentageOfWorld1(population) {
  const percentage = (population / 7900) * 100;
  return percentage;
}

var populationIndia = percentageOfWorld1(1380);
var populationFrance = percentageOfWorld1(22);
var populationRussia = percentageOfWorld1(65);
console.log(`${populationIndia}% of world population.`);
console.log(`${populationFrance}% of world population.`);
console.log(`${populationRussia}% of world population.`);

//* 4.

const percentageOfWorld2 = function (population) {
  const percentage = (population / 7900) * 100;
  return percentage;
};

var populationIndia = percentageOfWorld2(1380);
var populationFrance = percentageOfWorld2(22);
var populationRussia = percentageOfWorld2(65);
console.log(`${populationIndia}% of world population.`);
console.log(`${populationFrance}% of world population.`);
console.log(`${populationRussia}% of world population.`);

// --------------------------------------------------------------

//? Assignment 3

//* 1.

const percentageOfWorld3 = (population) => {
  const percentage = (population / 7900) * 100;
  return percentage;
};

var populationIndia = percentageOfWorld3(1380);
var populationFrance = percentageOfWorld3(22);
var populationRussia = percentageOfWorld3(65);
console.log(`${populationIndia}% of world population.`);
console.log(`${populationFrance}% of world population.`);
console.log(`${populationRussia}% of world population.`);

// --------------------------------------------------------------

//? Assignment 4

//* 1.

const describePopulation = (country, population) => {
  const poppercentage = percentageOfWorld1(population);
  const popcountry = `${country} has ${population} million people, which is about ${poppercentage}% of the world`;
  return popcountry;
};

const indiaPopulation = describePopulation("India", 1380);
const francePopulation = describePopulation("France", 22);
const russianPopulation = describePopulation("Russia", 65);
console.log(indiaPopulation);
console.log(francePopulation);
console.log(russianPopulation);

// --------------------------------------------------------------

//? Assignment 5

//* 1
const populations = [138, 2, 66, 69];

//* 2
if (populations.length === 4) {
  console.log(true);
}

//* 3
const percentagePopulation1 = percentageOfWorld1(populations[0]);
const percentagePopulation2 = percentageOfWorld1(populations[1]);
const percentagePopulation3 = percentageOfWorld1(populations[2]);
const percentagePopulation4 = percentageOfWorld1(populations[3]);
const percentages = [
  percentagePopulation1,
  percentagePopulation2,
  percentagePopulation3,
  percentagePopulation4,
];

console.log(percentages);

// --------------------------------------------------------------

//? Assignment 6

//* 1
const neighbors = ["Maldives", "SriLanka", "Nepal", "Myanmar", "Bangladesh"];

//* 2
neighbors.push("Utopia");

//* 3
neighbors.pop();

//* 4
if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European country :D'");
}

//* 5
neighbors[neighbors.indexOf("Maldives")] = "Republic of Maldives";

console.log(neighbors);

// --------------------------------------------------------------

//? Assignment 7

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 138,
  neighbors: ["Pakistan", "China", "Bangladesh"],
};

// --------------------------------------------------------------

//? Assignment 8

//* 1
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

//* 2
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

// --------------------------------------------------------------

//? Assignment 9

const myCountryx = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 138,
  neighbors: ["Pakistan", "China", "Bangladesh"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};

myCountryx.describe();
myCountryx.checkIsland();
console.log(myCountryx.isIsland);

// --------------------------------------------------------------

//? Assignment 10

for (let i = 1; i < 51; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// --------------------------------------------------------------

//? Assignment 11

// const populations = [138, 2, 66, 69];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  function percentageOfWorldx(populationCountryWise) {
    const percentage = (populationCountryWise / 7900) * 100;
    return percentage;
  }
  const populationPercent = percentageOfWorldx(populations[i]);

  percentages2.push(populationPercent);
}

console.log(percentages2);
// Comparing with percentages array to see the accuracy
console.log(percentages);

// --------------------------------------------------------------

//? Assignment 12

const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbors[i][j]}`);
  }
}

// --------------------------------------------------------------

//? Assignment 13

// const populations = [138, 2, 66, 69];

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const percentageOfWorldsiuuu = function (pop) {
    const percent = (pop / 7900) * 100;
    return percent;
  };
  const pp = percentageOfWorldsiuuu(populations[i]);
  percentages3.push(pp);
  i++;
}

console.log(percentages3);
