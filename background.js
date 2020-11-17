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
            switch (columnNum) {
                case 0:
                    cell.addEventListener("keyup", function () {
                        save(tbl, "jobsTable");
                    })
                    cellText = document.createTextNode(this.name);
                    break;
                case 1:
                    cell.addEventListener("keyup", function () {
                        if (checkInput(this)) {
                            save(tbl, "jobsTable");
                        }
                    })
                    cellText = document.createTextNode(this.salary);
                    break;
                case 2:
                    cellText = genSlider(0, 10, 5, tbl);

                    cell.addEventListener("keyup", function () {
                        if (checkInput(this)) {
                            save(tbl, "jobsTable");
                        }
                    })
                    break;
                default:
                    break;
            }
            cell.appendChild(cellText);
}
}

function newRow() {
