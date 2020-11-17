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
                case 3:
                    cell.addEventListener("keyup", function () {
                        save(tbl, "jobsTable");
                    })
                    cellText = document.createTextNode(this.score);
                    break;
                case 4:
                    cellText = document.createElement("button");
                    cellText.innerHTML = "x";
                    cellText.onclick = function () {
                        tblBody.removeChild(this.parentNode.parentNode);
                        localStorage.setItem("jobsTable", tbl.innerHTML);
                    }
                    break;
                default:
                    break;
            }
            cell.appendChild(cellText);

            if (columnNum == 4 || columnNum == 3 || columnNum == 2) {
                cell.contentEditable = false;
                cell.setAttribute("contenteditable", false);
            } else {
                cell.contentEditable = true;
                cell.setAttribute("contenteditable", true);
            }
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
    }
}

function setupTable() {
    var tbl = document.getElementById("jobs");
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var columns = rows[i].getElementsByTagName("td");
        for (var j = 0; j < columns.length; j++) {
            var cell = columns[j];
            switch (j) {
                case 1:
                    cell.addEventListener("keyup", function () {
                        if (checkInput(this)) {
                            save(tbl, "jobsTable");
                        }
                    })
                    break;
                case 2:
                    cell.addEventListener("keyup", function () {
                        if (checkInput(this)) {
                            save(tbl, "jobsTable");
                        }
                    })
                    break;
                case 4:
                    cell.addEventListener("click", function () {
                        var row = this.parentNode
                        row.parentNode.removeChild(row);
                        save(tbl, "jobsTable");
                    });
                default:
                    cell.addEventListener("keyup", function () {
                        save(tbl, "jobsTable");
                    })
                    break;
            }
        }
    }
}

function checkInput(object) {
    // var text = object.textContent;
    // var regex = /([1-9]|1[012])[:]([0-5][0-9]) [A|P][M]/;
    // var match = text.match(regex);
    // return match && text === match[0];
    return true;
}

function newRow() {
    var tbl = document.getElementById("jobs");
    var add = document.getElementById("add");
    add.onclick = function () {
        var jobsItem = new JobsItem("", "", "", "")
        jobsItem.addToTable()
        localStorage.setItem("jobsTable", tbl.innerHTML);
    }
}

function load(id, key) {
    var object = document.getElementById(id);
    var saved = localStorage.getItem(key);
    if (saved) {
        object.innerHTML = saved;
    }
}

function save(object, key) {
    localStorage.setItem(key, object.innerHTML);
}

function clear() {
    localStorage.clear();
}

function getJobs() {
    var jobs = {}

    var rows = document.getElementsByTagName("tr");
    for (i = 1; i < rows.length; i++) {
        var columns = rows[i].getElementsByTagName("td");
        var name = columns[0].textContent;
        var salary = columns[1].textContent;
        var hours = columns[2].textContent;
        jobs[name] = new ScheduleItem(name, salary, hours, 0);
    }

    return jobs;
}

function calculateScores() {
    var rows = document.getElementsByTagName("tr");
    for (i = 1; i < rows.length; i++) {
        var columns = rows[i].getElementsByTagName("td");
        var name = parseInt(columns[0].textContent) || 0;
        var salary = parseInt(columns[1].textContent) || 0;
        var hours = parseInt(columns[2].textContent) || 0;
        columns[columns.length - 2].textContent = name + salary + hours;
    }
}

function genSlider(min, max, value, tbl) {
    let container = document.createElement("div");
    container.setAttribute("class", "slidecontainer")

    let slider = document.createElement("input");
    slider.setAttribute("type", "range");
    slider.setAttribute("min", min);
    slider.setAttribute("max", max);
    slider.setAttribute("class", "slider");
    slider.setAttribute("value", value)

    let out = document.createElement("p");
    out.textContent = value;

    container.appendChild(slider);
    container.appendChild(out);

    slider.oninput = function () {
        save(tbl, "jobsTable");
        out.textContent = this.value;
    }

    return container;
}

var table = document.getElementById('jobs');
var classIndex = 0;

load("jobs", "jobsTable");
newRow();
setupTable();