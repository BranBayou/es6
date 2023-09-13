// 'use strict';

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


// Outer/ Global scope: RED
// var students = [
//   { id: 14, name: "Kyle" },
//   { id: 73, name: "Suzy" },
//   { id: 112, name: "Frank" },
//   { id: 6, name: "Sarah" },
// ];
// function getStudentName(studentID) {
//   //function scope: BLUE
//   for (let student of students) {
//     // Loop scope: GREEN
//     if (student.id == studentID) {
//       return student.name;
//     }
//   }
// }
// var nextStudent = getStudentName(112);
// console.log(nextStudent);

// var badIdea = {oops: 'Ugh'};
// with(badIdea) {
//   console.log(oops)
// }

//Undefined error vs Not defined error

// var studentName;
// console.log(typeof(studentName)); // undefined error
// console.log(typeof(doesntExist)); // undefined error

// console.log(stuName); // Not defined error

// Accidental Global Variable

// function getStudentName() {
//   // assignment to an undeclared variable :(
//   nextStudent = "Suzy";
//   }
//   getStudentName();
//   console.log(nextStudent);
  // "Suzy" -- oops, an accidental-global variable!
  // This sort of accident almost certain to lead to bugs eventually