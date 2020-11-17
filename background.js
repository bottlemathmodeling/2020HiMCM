class JobsItem {
    constructor(name, salary, hours, score) {
        this.name = name;
        this.salary = salary;
        this.hours = hours;
        this.score = score;
    }

    addToTable() {
        var body = document.getElementsByTagName("body")[0];
        var tbl = document.getElementById("jobs");
        var tblBody = document.getElementById("jobs body");
        var row = document.createElement("tr");

        for (var columnNum = 0; columnNum < 5; columnNum++) {
            var cell = document.createElement("td");
            var cellText;
            cell.appendChild(cellText);
}
}

function newRow() {
