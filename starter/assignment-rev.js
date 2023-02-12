("use strict");

//? Assignment 1

function describeCountry(country, population, capitalCity) {
  const str = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return str;
}

const India = describeCountry("India", 138, "New Delhi");
const Finland = describeCountry("Finland", 6, "Helsinki");
const Russia = describeCountry("Russia", 66, "Moscow");
console.log(India, Finland, Russia);

//? Assignment 2

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

console.log(
  percentageOfWorld1(1441),
  percentageOfWorld1(1380),
  percentageOfWorld1(660)
);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

console.log(
  percentageOfWorld2(1441),
  percentageOfWorld2(1380),
  percentageOfWorld2(660)
);

//? Assignment 3

const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

console.log(
  percentageOfWorld3(1441),
  percentageOfWorld3(1380),
  percentageOfWorld3(660)
);

//? Assignment 4

const describePopulation = (country, population) => {
  const percentPopulation = percentageOfWorld1(population);
  const pop = `${country} has ${population} million people, which is about ${percentPopulation}% of the world.`;
  return pop;
};

console.log(describePopulation("India", 1441));

//? Assignment 5

const percentageOfWorld = function (population) {
  const populationz = (population / worldPopulation) * 100;
  return populationz;
};

const populations = [1380, 1460, 660, 154];
console.log(populations.length === 4); // true

const percentageShit1 = percentageOfWorld(populations[0]);
const percentageShit2 = percentageOfWorld(populations[1]);
const percentageShit3 = percentageOfWorld(populations[2]);
const percentageShit4 = percentageOfWorld(populations[3]);

const percentages = [
  percentageShit1,
  percentageShit2,
  percentageShit3,
  percentageShit4,
];

console.log(percentages);

//? Assignment 6

const neighbours = ["Pakistan", "China", "Sri Lanka", "Nepal", "Bhutan"];

neighbours.push("Utopia");

neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central Euorpean country :D ");
}

console.log(neighbours);

neighbours[neighbours.indexOf("Pakistan")] = "Pork";
console.log(neighbours);

//? Assignment 7

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 108,
  neighbours: ["Pakistan", "China", "Maldives"],
};

console.log(myCountry);

//? Assignment 8

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

//? Assignment 9

const myCountryz = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 108,
  neighbours: ["Pakistan", "China", "Maldives"],

  describe: function () {
    this.describing = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    return this.describing;
  },

  checkIsland: function () {
    this.isIslandz = `${this.neighbours.length === 0 ? true : false}`;
  },
};

console.log(myCountryz.describe());
console.log(myCountryz.checkIsland());

//? Assignment 10

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//? Assignment 11

const populationsz = [1380, 1460, 660, 154];

const worldPopulationz = 7900;

const percentages2 = [];

for (let i = 0; i < populationsz.length; i++) {
  const percentageOfWorldx = function (pop) {
    return (pop / worldPopulationz) * 100;
  };
  const percent = percentageOfWorldx(populationsz[i]);
  percentages2.push(percent);
}

console.log(percentages2);

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

//? Assignment 13

const populationszx = [1380, 1460, 660, 154];

const worldPopulationzx = 7900;

const percentages3 = [];

let i = 0;
while (i < populationszx.length) {
  const percentageOfWorld1 = function (populationOneByOne) {
    const worldPopulationzz = populationOneByOne / worldPopulationzx;
    return worldPopulationzz;
  };
  percentageHaiBey = percentageOfWorld1(populationszx[i]);
}
