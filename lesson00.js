const employers = [
  "Alex",
  "",
  "ludmila",
  "Viktor",
  "",
  "oleg",
  "iNna",
  "Ivan",
  "Alex",
  "Olga",
  " Ann",
];

let employersNames = employers.filter((i) => {return i != ""});

employersNames = employersNames.map((element) => {return element.toLowerCase().trim()});

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"],
};

function calcCash(own) {
  own = own || 0;
  let everyCash = Array.prototype.slice.call(arguments);
  total = everyCash[1].reduce((total,i) => {return total + i}, own);
  return total;
}

let money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director, cash, emp) {
  director = director || "Victor";
  console.log(
    `We have a business. 
    Owner: ${owner} ,
    director: ${director}. 
    Our budget: ${cash}. 
    And our employers: ${emp}`);
  console.log(`And we have a sponsors: ${null, sumSponsors = sponsors.eu.concat(sponsors.rus, "unexpected sponsor")}`);
  console.log(`Note. Be careful with ${sponsors.eu[0] }. It's a huge risk.`);
}
makeBusiness.apply(null, ["Sam", null, money, employersNames]);
