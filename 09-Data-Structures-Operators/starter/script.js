'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
    [weekdays[0]] : {
      open: 12,
      close: 22,
    },
    [weekdays[4]] :{
      open: 11,
      close: 23,
    },
    [`days-${2 + 4}`] :{
      open: 0, // Open 24 hours
      close: 24,
    },
  };
// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = (flight.split(';'));
//   const output = `${type.startsWith('__Delayed') ? '🔴' : ''}${type.replaceAll('__', ' ')} ${from.slice(0, 3).toUpperCase()} ${to} (${time.replace(':', 'h')})`;
//   console.log(output);
// }


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enchanced object literals
  openingHours,


   order: function(startIndex, mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
  },
  // orderDelivery: function(starterIndex, mainIndex, time, address) {
  //   console.log(`Order receive: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  // }

  orderPasta(ing1, ing2, ing3){
    // console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient){
      // console.log(mainIngredient);
      // console.log(otherIngredient);
  }
};

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ')
  const namesUpper = []

  for(const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis')

//Padding

const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4)
  return last.padStart(str.length, '*')
}
console.log(maskCreditCard(657557));
console.log(maskCreditCard(433765843383747744));
console.log(maskCreditCard('48433822098575955'));


//Repeat

const message2 = 'Bad weather... All Departures Delayed..'
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5)
planesInLine(3)
planesInLine(1)

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase
// firstName✅
// ✅✅
// someVariable
// calculateAge✅✅✅
// ✅✅✅✅
// delayedDeparture✅✅✅✅✅
// Hints:
// §Remember which character defines a new line in the textarea 😉
// §The solution only needs to work for a variable made out of 2 words, like a_b
// §Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// §
// This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀


//  document.body.append(document.createElement('textarea'));
//  document.body.append(document.createElement('button'));

  

//   document.querySelector('button').addEventListener('click', function(){
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');


//     for (const [i, row] of rows.entries()) {
//       const [first, second] =  row.toLowerCase().trim().split('__');
//      const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//     }
//     console.log(`${output.padEnd(20)}
// ✅`);
//   })

  // underscore_case --> underscoreCase
// first_name 
// Some_Variable
// calculate_AGE
// delayed_departure



// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization name
// const passenger = 'jOnas'; //Jonas
// const passengerLower = passenger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect);

// //Check emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';


// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);


// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing 
// const priceGB = '288,97L'; // suppose that L is pound symbol
// const priceUS = priceGB.replace('L', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding 23!'

// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Ai'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Parts of the NEW Airbus family');
// }

// //Practice exercise

// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')){
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// }

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection')

// const plane = 'A320';


// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);


// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1)
//   if(s === 'B' || s === 'E')
//   console.log('You got the middle seat');
//   else {
//     console.log('You got lucky');
//   }

// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

//Property NAMES
// const properties = Object.keys(openingHours);
// // console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// for (const day of Object.keys(openingHours)){
//   openStr += `${day}`
// }

// // Property VALUES
// const values = Object.values(openingHours)
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// //Key, Value
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
//Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// for (const day of days) {
//   console.log(day);
//   const open =restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//Methods
// console.log(restaurant.order?.(0,1)) ?? 'Method does not exist';
// console.log(restaurant.orderRissoto?.(0, 1)) ?? 'Method does not exist';


// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas,io'}]

// console.log(users[0]?.name ?? 'User array empty');


// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item);


// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`)
// }

// console.log([...menu.entries()]);
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]]

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

//Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function(...numbers) {
//   let sum = 0;
//   for(let i= 0; i < numbers.length; i++) sum += numbers[i]
//   console.log(sum);
// }

// const rest1 = {
//   name : 'Capri',
//   // numGuests : 20;
//   numGuests : 0
// };

// const rest2 = {
//   name : 'La Piazza',
//   owner: 'Giovanni Rossi',
// };


//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);

// Nullish Coalescing Operator
// restaurant.numGuest = '';
// const guest = restaurant.numGuest || 10;
// console.log(guest);


//Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

//Use ANY data type, return ANY data type, short-circuiting
// console.log('------ OR -----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuest = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuest : 10;

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log('----- AND -----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');
// //Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2,5,3,2,1,4)

// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
// restaurant.orderPizza('mushrooms')
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// })

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);


// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);

//Iterables: arrays, strings, maps, sets, NOT object
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.']
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Schmedtmann`); // Error

// const ingredients = [
//     prompt("Let\s' make pasta! Ingredient 1!"),
//     prompt("Ingredient 2"), 
//     prompt("Ingredient 3")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients)

//Objects
// const newRestaurant = {foundIn: 1998, ...restaurant, founder: 'Guiseppe'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
/*============= Destructing Object
const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Default Values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating  variables
const obj = { a: 23, b: 7, c: 14}
let a = 111;
let b = 999;

({ a, b} =obj)
console.log(a, b);


//Nested Objects
// const { fri: {open, close} } = openingHours;
// console.log(fri);
// const { openingHours: { fri: { open, close } } } = restaurant;

// console.log(restaurant.openingHours.fri); // Outputs: 11 23

*/
// Destructing Array
/*=======================*/
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);


//Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);


//Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// const [i,  [j, k]] = nested;
// console.log(i,  j, k);

//Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
/*


We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored


*/

const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
}


const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);

//1 
// const events = [...new Set(gameEvents.values())]
// console.log(events);

// //2 
// gameEvents.delete(64);

// console.log(gameEvents.size);
// //3. 
// console.log(`An event happened, on average, every ${ 90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys().pop()];
// console.log(time);
// console.log(
//   `An event happened, on average , every ${time / gameEvents.size} minutes`
// );

// //4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }


//1
// for(const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

//2 

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

//3.
// for(const [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ])

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // orderSet.clear()
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// //Example 
// const staff = ['Water', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique);
// console.log(new Set(['Water', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// console.log(new Set('jonasschmedtmann').size);


// const question = new Map([
//   ['question', 'What is the best programming languange in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again']
// ])
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question ) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3


// console.log(question.get(question.get('correct') === answer))

 //Convert map to array

//  console.log([...question]);
//  console.log(question.entries());
//  console.log(question.keys());
//  console.log(question.values());

// const rest = new Map();
// rest.set('name', 'Classic Italiano')
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories',  ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open :D')
// .set(false, 'We are closed :(')

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

// console.log(rest.has('categories'));
// rest.delete(2);

// // console.log(rest.clear());
// const arr = [1, 2]
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//===================================//
// //1
// const [ players1, players2] = game.players;
// console.log(players1, players2);


// //2
// const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutino', 'Periscis']

// //5
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// //6 
// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored`);
  
// }

// // printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller')
// printGoals(...game.scored)


// //7. 
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//1. 
