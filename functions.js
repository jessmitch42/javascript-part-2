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

console.log(students.sort(compareEmail));
