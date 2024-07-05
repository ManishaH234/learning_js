import {apikey} from './util.js';
console.log(apikey);
// import key from './util.js';
// console.log(key);
// console.log("hello world");
console.log("Hello WOrld");
// console.log(10===10);

// function greeting(username,message='hello!')
// {
//     return "hi,I'm "+username+". "+message;
// }

// const greeting1=greeting("manisha");
// console.log(greeting1);
// const greeting2=greeting("Nandini", "Im a student");
// console.log(greeting2);

//array function --- how to call the array functions***
// export default (userName,message)=>{
//     return userName+message;
// }

//objects
// const user =
// {
//     name:"Max",
//     age:24,
//     greet(){
//         console.log("greetings!")
//     }
// };
// console.log(user.name);
// console.log(user.age);
// user.greet();

// //blueprint or class
//  class User{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log("greetings!")
//     }
//  }

//  const user1=new User("max",43);
//  console.log(user1);

// //arrays
const hobbies=["sports", "Reading","cooking"];
console.log(hobbies);

// hobbies.push("swimming");
// console.log(hobbies);

// const index=hobbies.findIndex((item)=> item==="swimming");
// console.log(index);

const newHobbies=hobbies.map((item)=>item+'!');
console.log(newHobbies);
console.log("adding new commit");
// const newHobbies2=hobbies.map((item)=>({text:item}));
// console.log(newHobbies2);

//* Destructuring* 
// const [username,age]=["manisha",14];
// console.log(username);
// console.log(age);

// const {firstName:fn,lastName}={
//     firstName:"manisha",
//     lastName:"Hirdekar",
// };
// console.log(fn);
// console.log(lastName);

//**spread operator
const brandNewHobbies=[...hobbies,...newHobbies];
console.log(hobbies,newHobbies);
console.log(brandNewHobbies);