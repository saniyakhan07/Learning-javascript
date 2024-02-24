const marvel_heroes = ["thor", "ironman","batman"]
const dc_heroes = ["spiderman", "flash", "dalman"]

//marvel_heroes.push(dc_heroes)   //push elements in existing array

// console.log(marvel_heroes);     //[ 'thor', 'ironman', 'batman', [ 'spiderman', 'flash', 'dalman' ] ]
// console.log(marvel_heroes[3][1]);      // flash

// const allHeroes = marvel_heroes.concat(dc_heroes)   //concat donot change the original array
// console.log(allHeroes);     //[ 'thor', 'ironman', 'batman', 'spiderman', 'flash', 'dalman' ]


//spread operator: putting 3 dots we can give two or more inputs to spread
const all_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_heroes);     //[ 'thor', 'ironman', 'batman', 'spiderman', 'flash', 'dalman' ]

const nums = [1,2,[4,3],6,47,[3,5,[4,6]]]
const new_nums = nums.flat(Infinity)
//console.log(new_nums);    //[ 1, 2, 4, 3, 6,47, 3, 5, 4, 6]

// console.log(Array.isArray("Saniya"))   //false
// console.log(Array.from("Saniya"));       //[ 'S', 'a', 'n', 'i', 'y', 'a' ]
// console.log(Array.from({name: "Saniya"}));       // [] Interesting question 


let score1 = 100
let score2 = 238
let score3 = 833
console.log(Array.of(score1, score2, score3));   //[ 100, 238, 833 ]
   
