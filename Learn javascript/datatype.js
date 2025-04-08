const myname="java Script"
const myplace='Banglore'
const result=`My detail is ${myplace} script ${myname}`
console.log(myname)
console.log(myplace)
console.log(result)

//number
let n=12345;
console.log(n)

//BigInt 
let b=BigInt("1234567890987654321");
console.log(b)

//boolean
let l=true;
console.log(l)

//undefined
let u;
console.log(u)

//object
const person={
    firstname:"Binod",
    lastname:"yadav",
    subject:"SDET"
};
console.log(person.firstname)
console.log(person.lastname)
console.log(person.subject)

const course=[
    "java",
    "cypress",
    "selenium"
]
 const names=[
    "Binod",
    "kumar"
 ]
 console.log(course)
 console.log(names)
 console.log(course.concat(names))