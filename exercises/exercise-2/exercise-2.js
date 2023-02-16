let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// // Task 1

// // - In `exercise-2.js` write a program that will take the `hogwarts` array
// // as input and display the names of the people who belong to the Gryffindor house.
// // - Use array destructuring to extract the values you need out of the array.

let expectedNames = [];

// // //without destructuring
// // function findGryffindors(myFunction) {
// // for (let i = 0; i < myFunction.length; i++) {
// //   if (myFunction[i].house === "Gryffindor") {
// //     let name = myFunction[i].firstName + " " + myFunction[i].lastName;
// //     expectedNames.push(name);
// //   }

// // }
// // console.log (expectedNames);
// // }

// // findGryffindors(hogwarts);

//with destrcturing

for (const {firstName, lastName, house} of hogwarts) {
if (house === "Gryffindor") {
  expectedNames.push(firstName + " " + lastName)
}}

console.log (expectedNames);

// Expected result

// Harry Potter
// Ron Weasley
// Hermione Granger
// Minerva McGonagall
// Albus Dumbledore

//Task2

// - In `exercise-2.js` write a program that will take the `hogwarts` array as
// input and display the names of teachers who have pets.
// - Use array destructuring to extract the values you need out of the array.

let teachersWithPets = [];

for (const { firstName, lastName, pet, occupation } of hogwarts) {
  if (occupation === "Teacher" && pet != null) {
    teachersWithPets.push(firstName + " " + lastName);
  }
}

console.log(teachersWithPets);

// Expected result
// Albus Dumbledore
