//1.  Write a function called "addnumber" that takes two numbers as argument and return their sum , call the function before it declared to demonstrate hosting

console.log(addNumbers(19 , 50 )) // 69

function addNumbers(num1 , num2){
    return num1+num2;
}


// 2. Write a function called "multiplyNumbers" that takes two numbers as anargument and return their product use function expression to define the function and call the function before it is declared to demonstrate hosting.

console.log(multiplyNumbers (2 , 6));
//ReferenceError: Cannot access 'multiplyNumbers' before initialization
 let multiplyNumbers = function(num1 , num2 ){
    return num1 * num2;
 };


 //3. write a function that takes two as arguments and returns thair sum . declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting

 function addTwoNumber(num1 , num2){
    console.log(sum); // undefined
    var sum;
    sum = num1 + num2;
    return sum;
 }
 console.log(addTwoNumber(15 , 30));


 // 4 . Declear three variable one using let ,  one using var ,and one using const , all inside a black scope , Assign them value and log their value to the console before and after they are after they are decleared to demonstrate vsariable hosting.

{
    //before 
    /*console.log(a);
    console.log(b);
    console.log(c);*/

    //After
    let a = "I "
    const b = "Am A"
    var c = "Web-Developer"

    console.log(a);
    console.log(b);
    console.log(c);
}

//5. Delceare a variable using black scope and attempt to log its value to the the console before it is assinged a value to demonstrate the temporal dead Zone .

{
    console.log(x);
    const x = " Pw-Skills";
    console.log(x);
}