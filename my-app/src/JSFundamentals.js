// Variables
let names = "Alice";
const age = 25;

// Function
function greet(userName) {
  return `Hello, ${userName}!`;
}

// Arrays
const fruits = ["apple", "banana", "cherry"];
fruits.push("orange");

// Objects
const student = {
  names: "John",
  age: 20,
  subjects: ["Math", "Science"],
  greet: function () {
    return `Hi, I'm ${this.names}`;
  }
};

console.log(greet(names));
console.log(fruits);
console.log(student.greet());

//Event Handler
document.addEventListener("click", () => {
  console.log("The user clicked on the page!");
});

//DOM Manipulate thingy
document.addEventListener("DOMContentLoaded", () => {
  const title = document.createElement("h2");
  title.textContent = "This was added with DOM Manipulation :D";
  title.style.color = "#e0b3ff";
  document.body.appendChild(title);
});