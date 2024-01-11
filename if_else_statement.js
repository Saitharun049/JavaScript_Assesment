// -----------------------------------------If Statement--------------------------------------------------
// var a = 10;
// if (a > 5) {
//     console.log(`${a} is greater than 5`);
// }

// ---------------------------------------------If  else if  Statment---------------------------------------------------

// var score = 60;

// if (score >= 90) {
//     console.log("Excellent! You got an A");
// } else if (score >= 80) {
//     console.log("Good job! You got a B");
// } else if (score >= 70) {
//     console.log("Well done! You got a C");
// } else {
//     console.log("Try harder! You need improvement.");
// }

// -----------------------------------Nested if Statement----------------------------------------------

let temperature = 25;
let isRaining = true;

if (temperature > 30) {
    console.log("It's a hot day!");

    if (isRaining) {
        console.log("But it's raining, so stay indoors.");
    } else {
        console.log("Enjoy the sunshine!");
    }
}
else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a pleasant day.");

    if (isRaining) {
        console.log("Don't forget to take an umbrella!");
    } else {
        console.log("Perfect weather for outdoor activities.");
    }
}
else {
    console.log("It's a bit cold today.");
}

