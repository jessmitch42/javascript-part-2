function compareNumber(a, b) {
    if (a.length > b.length) {
        return -1;
    }
    else if (a.length === b.length) {
        return 0;
    }
    else if (a.length < b.length) {
        return 1;
    }
}

var studentNames = ["jared", "dennis", "jess", "maxime"];

// console.log(studentNames.sort(compareNumber));

/*
Exercise 2: create array of objects, including name and jess.
sort by longest name, then email alphabetically
*/



var dennis = {
    name: "Dennis",
    email: "dennis@email.com"
};

var jess = {
    name: "Jessica",
    email: "jessicamitch42@gmail.com"
};

var max = {
    name: "Maximeeeeeeeeeeeeee",
    email: "max@email.com"
};

var students = [jess, dennis, max];

function nameLongest(a, b) {
    if (a.name.length > b.name.length) {
        return -1;
    }
    else if (a.name.length === b.name.length) {
        return 0;
    }
    else if (a.name.length < b.name.length) {
        return 1;
    }
}
// console.log(students.sort(nameLongest));

function compareEmail(a, b) {
    return a.email.localeCompare(b.email);
}

// console.log(students.sort(compareEmail));

/* Exercise 3! "Create a function that can be used with 
Array.prototype.map. This function should take a number 
and return its square. Then, use this function with map 
on an array of numbers to check the result."
*/

function numSquared (num) {
    return num * num;
}

// var numArray = [2, 4, 5, 7, 3];

// console.log(numArray.map(numSquared));

/* Exercise 4: 
Create a function that can be used with Array.prototype.map. 
This function should be able to take an object and square its 
“num” property. Then, use this function with map on an array 
of objects each containming a “num” property.
*/
var obj = {
    num: 4
};
var obj2 = {
    num: 5
};
var obj3 = {
    num: 6
};

var objArray = [obj, obj2, obj3];

function numSquared (object) {
    return object.num * object.num;
}

// console.log(objArray.map(numSquared));

/* Exercise 5: 
Create a function called operationMaker that takes only 
a string called operation as argument. This string could be 
“add”, “subtract”, “mult” or “div”. Your function will 
return a function that will take two numbers and return the 
result of running operation on these numbers. 
*/

function operationMaker(userOperation) {
    function operationChoice(num1, num2) {
        if (userOperation === "add") {
            return num1 + num2;
        }
        else if (userOperation === "subtract") {
            return num1 - num2;
        }
        else if (userOperation === "mult") {
            return num1 * num2 ;       
        }
        else if (userOperation === "div") {
            return num1 / num2;
        }
    }
    return operationChoice;
}

// console.log(operationMaker("subtract")(2,6)); 


