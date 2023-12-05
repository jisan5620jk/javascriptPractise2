//Problem One

let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";
fruits.pop();
fruits.push("Watermellon");

console.log(fruits);

//Problem Two

let jisanMarks, tomMarks, janeMarks, peterMarks, johnMarks;

jisanMarks = 85;
tomMarks = 66;
janeMarks = 95;
peterMarks = 56;
johnMarks = 40;

function GradeCheker(marks) {
    if(marks >= 100 || marks >= 80) {
        console.log("A Grade");
    }
    
    else if(marks >= 79 || marks >= 60) {
        console.log("B Grade");
    }
    
    else if(marks >= 59 || marks >= 50) {
        console.log("C Grade");
    }
    
    else if(marks >= 49 || marks >= 40) {
        console.log("D Grade");
    }
    
    else {
        console.log("F Grade");
    }
}

GradeCheker(peterMarks);

// Problem Three

//13, 79, and 45

let num1 = 13;

let num2 = 79;

let num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log("Biggest Number is " + num1);
}

else if (num2 > num1 && num2 > num3) {
    console.log("Biggest Number is " + num2)
}

else {
    console.log("Biggest Number is " + num3)
}

//Problem Four

let Num1 = 9;

let Num2 = 9;

let Num3 = 9;

let cheker1 = Num1 == Num2;

let cheker2 = Num2 == Num3;

let Result = cheker1 == cheker2;

console.log(Result);