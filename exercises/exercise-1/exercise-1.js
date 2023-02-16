const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// - What is the syntax to destructure the object `personOne` in exercise-1.js?
// let {name, age, favouriteFood} = personOne;



// - Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.
function introduceYourself(personN) {
  console.log(
    `Hello, my name is ${personN.name}. I am ${personN.age} years old and my favourite food is ${personN.favouriteFood}.`
  );
}

introduceYourself(personOne);


