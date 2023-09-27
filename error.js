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

// Shadowing

// var studentName = "Suzy";
// function printStudent(studentName) {
//   studentName = studentName.toUpperCase();
//   console.log(studentName);
// }
// printStudent("Frank");
// // FRANK
// printStudent(studentName);
// // SUZY
// console.log(studentName);
// // Suzy

// Unshadowing

// var studentName = "Suzy";
// function printStudent(studentName) {
// console.log(studentName);
// console.log(window.studentName);
// }
// printStudent("Frank");
// // "Frank"
// // "Suzy"

// // Other forms of global scope declarations do not create mirrored global
// // object properties:
// var one = 1;
// let notOne = 2;
// const notTwo = 3;
// class notThree {}
// console.log(window.one);
// // 1
// console.log(window.notOne); // undefined
// console.log(window.notTwo); // undefined
// console.log(window.notThree); // undefined

// var special = 42;
// function lookingFor(special) {
// // The identifier `special` (parameter) in this
// // scope is shadowed inside keepLooking(), and
// // is thus inaccessible from that scope.
// function keepLooking() {
// var special = 3.141592;
// console.log(special);
// console.log(window.special);
// }
// keepLooking();
// }
// lookingFor(112358132134);
// // 3.14159

// Not all combinations of declaration shadowing are allowed. let can shadow var , but var cannot shadow let :
// function something() {
//   var special = "JavaScript";
//   {
//     let special = 42; // totally fine shadowing
//     // ..
//   }
// }
// function another() {
//   // ..
//   {
//     let special = "JavaScript";
//     {
//       var special = "JavaScript";
//       // ^^^ Syntax Error
//       // ..
//     }
//   }
// }

// function another() {
//   // ..
//   {
//     let special = "JavaScript";
//     ajax("https://some.url", function callback() {
//       // totally fine shadowing
//       var special = "JavaScript";
//       // ..
//     });
//   }
// }

// Function Name Scope

// var askQuestion = function ofTheTeacher() {
//   console.log(ofTheTeacher);
// };
// askQuestion();
// // function ofTheTeacher()...
// console.log(ofTheTeacher);
// // ReferenceError: ofTheTeacher is not defined


// var name = 42;
// console.log(name, typeof name);

// var studentName = "Kyle";
// let studentID = 42;
// function hello() {
// console.log(`Hello, ${ self.studentName }!`);
// }
// self.hello();