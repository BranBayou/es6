// Syntax Errors from the Start

// var greeting = "Hello";
// console.log(greeting);
// greeting = ."Hi";

// Early Errors

// console.log("Howdy");
// saySomething("Hello","Hi");
// // Uncaught SyntaxError: Duplicate parameter name not
// // allowed in this context
// function saySomething(greeting,greeting) {
// "use strict";
// console.log(greeting);
// }

// Hoisting

// function saySomething() {
//   var greeting = "Hello";
//   {
//   greeting = "Howdy"; // error comes from here
//   let greeting = "Hi";
//   console.log(greeting);
//   }
//   }
//   saySomething();
//   // ReferenceErro

var students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Suzy" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" },
];
function getStudentName(studentID) {
  for (let student of students) {
    if (student.id == studentID) {
      return student.name;
    }
  }
}
var nextStudent = getStudentName(112);
console.log(nextStudent);
