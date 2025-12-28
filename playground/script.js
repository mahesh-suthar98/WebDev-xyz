console.log("connected")

// prompt("your name")

// {var a = "ak"
// let b = "bk"
// const c = "ck"}

// let uname = prompt("name batao")
// alert(`welcome ${uname}`)
// console.log(alert)

// let xk = 5+5
// let mkmk = Symbol("id=mksk")

// console.clear

// let obj1 = {name: "harsh"}
// let obj2 = obj1

// obj2.name = "shery"

// console.log(obj1, obj2)

// let mk = hello

// var hello = function (){
//     console.log("hellof")
// }

// let age = +prompt("age batao")
// if (age>=18 && age<=150) {console.log("u r adult")}
// else if (age<18 && age>0){console.log("u r minor")}
// else (console.log("please enter valid age"))


// let mark = prompt("enter marks")
// if (mark>=0 && mark<=25) {console.log("fail")}
// else if (mark>25 && mark<=50) {console.log("C grade")}
// else if (mark>50 && mark<=75) {console.log("B grade")}
// else if (mark>75 && mark<=90) {console.log("A grade")}
// else if (mark>90 && mark<=100) {console.log("A+ grade")}
// else {console.log("invalid marks")}

// mk(); //function call ese hota hai () bracket lagana hai
// var mk = function(){console.log("say hello")}; //(statement end hone par semicolon jarur lagaye)


// let user = "mahesh"
// switch(user){
//     case "mahes" : console.log("pehla chala")
//     break;

//     case "mahesh" : console.log("dusra chala")
//     break;

//     default : console.log("kuchh nahi chala")
// }


// for(let k = 1; k<11; ++k){
//     console.log(`3 x ${k} =`, k*3);
// } //table of 3


// for(let k =30; k>9; --k){
//     console.log(k)
// }


// for (let i = 2; i<21; i +=2){
//     console.log(i)
// }

// for (let i = 1; i<101; i++){
//     console.log(i+" mahesh suthar")
// }


// for (let i = 1; i<21; i++){
//     if (i%2===1){console.log(`${i} is odd`)}
//     else {console.log(`${i} is even`)}
// }


// let age = prompt("age batao");
// if (age===null){console.log("you canelled it")}


// console.log(age)
// if(age>=18){console.log("vote kar sakte ho")}
// else {console.log("vote nahi kar sakte")};

// for (let i=1; i<51; i++){
//     if (i%7 === 0){console.log(i)}
// }



// let pass = prompt("enter password")
// if (pass===null){
//     console.log("you cancelled it")}
// else if (pass==="mk123"){
//     console.log("acces granted")}
// else {console.log("acces denied")}





// let age = prompt("Age batao")
// if (age===null){
//     console.error("You cancelled it")}

// else {
//     if (age.trim() === ""){console.log("Please write something...")}

//     else {
//         age = Number(age)
//     if (isNaN(age)){console.log("Please enter a number")}
    
//         else {
//         if (age<0) console.log("Please enter valid age")
//         else if (age>=18 && age<=200) console.log("You are eligible to vote")
//         else if (age>=0 && age<18) console.log("you can't vote ")
//         else console.log("Please enter correct age")
//         }
//     }
// }


// Q.1 count how any numbers between 1 to 15 are greater then 10?
// ans. 
// let count = 0
//  for (let i = 1; i<16; i++){
//     if (i>10) {count++ , console.log(i)}
// }

// console.log(`total "${count}" numbers are greater then 10`)



//print sum of all odd number between 1 to 50
//ans
// let sum = 0
// for(let i=1; i<51; i++){
//     if (i%2===1){sum += i}
    
// }
// console.log(sum)         

//same code optimized by Gemini
// let sum = 0
// for (let i = 1; i<51; i +=2){
//     sum +=i
// }
// console.log(`the sum of all odd numbers between 1 to 50 is: ${sum}`)




//recursion - function calling function
// function abcd(){
//     console.log("halo")
//     xabcd()
// }
// abcd()