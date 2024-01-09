// let num = 7
// let result
// result = num%2===0? "Even" : "odd";
// console.log(result);

// -----------------------Switch_Case-----------------------------------------

// let day = "Holiday"
// switch(day){
//     case 'monday':
//         console.log("7am");
//         break;
//     case 'tuesday':
//     case 'wednesday':
//     case 'thrusday':
//         console.log("4am");
//         break;
//     case 'friday':
//         console.log("6am");
//         break;
//     case 'saturday':
//     case 'sunday':    
//         console.log("8am");   
//         break;  
//     default: 
//         console.log("7 am Have to pratice the js  ");               
// }

// ------------------------------------- Template Literal------------------------

// let num1 = 9
// let num2 = 5
// let result = num1+num2
// console.log(`The additional of ${num1} and ${num2} is ${result}`);

// ------------------------------ Loops-------------------

// ---------------While Loop---------------------

//  I am Repeating this statment for 5 times
// inilaization,condtion,increment

// let i = 1;
// while (i<=5)
// {
//     console.log("Sai");
//     i++
// }


// ------------------Do While Loop-------------------

// let i =1;
// do{
//     console.log("Sai",i);
//       i++;   
// } while(i<=5)

// ----------------For Loop--------------------------

// for (i=1;i<=5;i++)
// {
//     console.log("sai",i);

//     for(j=1;j<=5;j++)

//     console.log("HI",j);


// }
// ------------------------------Another Example for loop----------------------------------------  

// for (i=1; i<=100; i++)
// {
//     if(i%3===0)
//     console.log(i)
// }

// let num = 123456
// while(num>0)
// {
//     console.log(num%10);
//     num = parseInt(num/10)
// }

// let num = 123456;
// let num2 = 0;
// while(num>0)
// {
//  let num1= num % 10;
// num2 = num2 *10 + num1;
// num = parseInt(num/10);
// }
// console.log(num2);

// ---------------------------------------Complex Object-------------------------

// let sai = {
//     name : 'Tharun',
//     project : 'Hooper',
//     role : 'Software Deevloper',

// }
// console.log(sai.name?.length);
// --------------------------------Delete Method in Object------------------------------------

// let sai = {
//         name : 'Tharun',
//         project : 'Hooper',
//         role : 'Software Deevloper',
    
//     }
//      delete sai.name
//     console.log(sai)

// ------------------------------For Loop---------------------------------

// let sai = {
//     name : 'Tharun',
//     Project : 'Hooper',
//     role : 'Software Developer',

// }
// for (let key in sai){
// console.log(key,sai[key]);
// }

// ----------------------------------------- Nested Loop--------------------------------

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//       console.log(`i: ${i}, j: ${j}`);
//     }
//   }
  

// ---------------------------Function's-----------------------------

// function greet (){
//     console.log('Hello World');
// }
// greet()

// -----------------Function return and passing method-----------------------------

// function greet ()
// {
//     return "Hello World"
// }
//    let user = 'sai'
//    let str = 'greet'
//    console.log(user, str);


// function values(x, y) {
//     const sum = x + y;
//     const sub = x - y;
//     const mult = x * y;

//     return { sum, sub, mult };
// }

// const result = values(5, 5);
// console.log(result);

// ------------------------------------------Function Expression--------------------------------

let add = function(num1,num2)
{
    return num1 + num2
    
}
let sum = add
let result =sum(5,5)
console.log(result);