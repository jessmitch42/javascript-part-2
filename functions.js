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

console.log(studentNames.sort(compareNumber));