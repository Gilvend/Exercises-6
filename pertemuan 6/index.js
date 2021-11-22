
// Function

// 1. Function Declaration

// function getData()
// {
//    //Fucntion Block >> Anything that is inside a function
//    console.log("Hello World");
// }

// function getData(firstNName, age)
// {
//     console.log("Hello " + firstNName, "Age " + age);
// }

// getData("John,", 30);

// 2. Function Expression

let getData = function()
{
    return 'Hello World';
};

console.log (getData());

// Atau

// let getData = function(word)
// {
//     return word;
// }
// console.log(getData("Hello World"));

  // Global &  Local Scope

let firstName = "John"; // Global Variable
let job = "Student";

function studentData() 
{
    let lastName = "Doe"; //Local Scope (Function)

    if(job === 'Student')
    {
        let grade = 90; // Local Scope (Block)
        console.log(firstName + " " + lastName);
        console.log("Grade : " + grade);
    }
    // console.log("Grade : ", grade) // ERROR
}

// console.log("Last Name : ", lastName); // ERROR

studentData();