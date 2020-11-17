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
}
}

function newRow() {
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
