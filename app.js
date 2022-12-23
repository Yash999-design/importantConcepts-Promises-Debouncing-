/*  Classes and all */
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(name){
    this.courseList.push(name);
  }
  getCourseList(){
    return this.courseList;
  }
}

const Yash = new User("Yash Pandey", "yashpandey06042001@gmail.com");
console.log(Yash.getInfo());

Yash.enrollCourse("Master JavaScript");
Yash.enrollCourse("Master ReactJs");
Yash.enrollCourse("NodeJs Bootcamp");
console.log(Yash.getCourseList());

let courses = Yash.getCourseList();

courses.forEach((c)=>console.log(c));

module.exports = User;







/* Functions and all */

// $("h1").css("color", "red");
// $("button").addEventListener("click", function () {
//   alert("Mujhe touch kiya behenchod!");
// });
// function buttonClick() {
//   alert("Hello");
//   alert("World!");
//   window.alert("Hello World!");
//   // document.querySelector(".header").innerHTML
//   // let theText = document.body.bio;
//   // alert(theText);
// }
// // heading = document.querySelector("h1");
// // heading.innerHTML = "Good Bye";
// // document.querySelector("button").innerHTML = "Thik hain bhai";
// // document.querySelector(".khudai").innerHTML = "Lets See";

// const buttonElement = document.getElementsByClassName("enter_button");

// const funcOutput = document.getElementById("header");

// const handleEvtOutput = document.getElementsByClassName("paragraph");

// document.querySelector(".enter_button").addEventListener("click", function () {
//   alert("Hello World!, what is going on✌️✌️");
// });
// document.querySelector(".khudai").addEventListener("click", function () {
//   alert("Hello World!, what is going on✌️✌️");
// });

// document.querySelector(".enter_button").innerHTML = "Kal";
