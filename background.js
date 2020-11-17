class JobsItem {
    constructor(arr) {
        this.name = arr[0] || "";
        this.Sbase = arr[1] || "";
        this.Sbonus = arr[2] || "";
        this.Ctransport = arr[3] || "";
        this.Cwork = arr[4] || "";
        this.Afuture = arr[5] || "";
        this.chard = arr[6] || "";
        this.csoft = arr[7] || "";
        this.Tweekly = arr[8] || "";
        this.Tweeks = arr[9] || "";
        this.Ttransport = arr[10] || "";
        this.Jinteraction = arr[11] || "";
        this.Pinteraction = arr[12] || "";
        this.Jdaily = arr[13] || "";
        this.Pdaily = arr[14] || "";
        this.Jconnection = arr[15] || "";
        this.Pconnection = arr[16] || "";
        this.Weconomic = arr[17] || "";
        this.Wtime = arr[18] || "";
        this.Wenvironment = arr[19] || "";
        this.Wrelevance = arr[20] || "";
    }

    addToTable() {
        var body = document.getElementsByTagName("body")[0];
        var tbl = document.getElementById("jobs");
        var tblBody = document.getElementById("jobs body");
        var row = document.createElement("tr");

        for (var columnNum = 0; columnNum < 23; columnNum++) {
            var cell = document.createElement("td");
            var cellText;
            switch (columnNum - 1) {
                case -1: // Sbase
                    cell.addEventListener("keyup", function () {
                        save(tbl, "jobsTable");
                    })
                    cellText = document.createTextNode(this.name);
                    break;
                case 0: // Sbase
                    cellText = genSlider(0, 50000, 0, tbl);
                    break;
                case 1: // Sbonus
                    cellText = genSlider(0, 5000, 0, tbl);
                    break;
                case 2: //Ctransport
                    cellText = genSlider(0, 200, 0, tbl);
                    break;
                case 3: //Cwork
                    cellText = genSlider(0, 10000, 0, tbl);
                    break;
                case 4: //Afuture
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 5: //chard
                    cellText = genSlider(0, 1, 0, tbl);
                    break;
                case 6: //csoft
                    cellText = genSlider(0, 1, 0, tbl);
                    break;
                case 7: //tweekly
                    cellText = genSlider(0, 56, 0, tbl);
                    break;
                case 8: //tweeks
                    cellText = genSlider(0, 12, 0, tbl);
                    break;
                case 9: //ttrans
                    cellText = genSlider(0, 120, 0, tbl);
                    break;
                case 10: //Jinteraction
                    cellText = genSlider(-1, 1, 0, tbl);
                    break;
                case 11: //Pinteraction
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 12: //Jdaily
                    cellText = genSlider(-1, 1, 0, tbl);
                    break;
                case 13: //Pdaily
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 14: //Jconnection
                    cellText = genSlider(-1, 1, 0, tbl);
                    break;
                case 15: //Pconnection
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 16: // wecon
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 17: //wtime
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 18: //wenv
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 19: //wrel
                    cellText = genSlider(0, 100, 0, tbl);
                    break;
                case 20: //final output
                    cell.addEventListener("keyup", function () {
                        save(tbl, "jobsTable");
                    })
                    cellText = document.createTextNode(this.name);
                    break;
                case 21:
                    cellText = document.createElement("button");
                    cellText.innerHTML = "x";
                    cellText.onclick = function () {
                        tblBody.removeChild(this.parentNode.parentNode);
                        localStorage.setItem("jobsTable", tbl.innerHTML);
                    }
                default:
                    break;
            }
            cell.appendChild(cellText);

            if (columnNum != 0) {
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
        var columns = rows[i].getElementsByTagName("th");
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
        var jobsItem = new JobsItem("")
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
        var Sbase = parseInt(columns[1].textContent) || 0;
        var Sbonus = parseInt(columns[2].textContent) || 0;
        var Ctransport = parseInt(columns[3].textContent) || 0;
        var Cwork = parseInt(columns[4].textContent) || 0;
        var Afuture = parseInt(columns[5].textContent) || 0;
        var chard = parseInt(columns[6].textContent) || 0;
        var csoft = parseInt(columns[7].textContent) || 0;
        var Tweekly = parseInt(columns[8].textContent) || 0;
        var Tweeks = parseInt(columns[9].textContent) || 0;
        var Ttransport = parseInt(columns[10].textContent) || 0;
        var Jinteraction = parseInt(columns[11].textContent) || 0;
        var Pinteraction = parseInt(columns[12].textContent) || 0;
        var Jdaily = parseInt(columns[13].textContent) || 0;
        var Pdaily = parseInt(columns[14].textContent) || 0;
        var Jconnection = parseInt(columns[15].textContent) || 0;
        var Pconnection = parseInt(columns[16].textContent) || 0;
        var Weconomic = parseInt(columns[17].textContent) || 0;
        var Wtime = parseInt(columns[18].textContent) || 0;
        var Wenvironment = parseInt(columns[19].textContent) || 0;
        var Wrelevance = parseInt(columns[20].textContent) || 0;

        let e = (Sbase + Sbonus - (Ctransport) / 120) * Tweeks - Cwork;
        let r = Afuture + 0.1 * (Afuture * (chard + csoft));
        let t = (Tweekly + Ttransport) * Tweeks;
        let w = Jinteraction * (Pinteraction - 5) + Jdaily * (Pdaily - 5) + Jconnection * (Pconnection - 5);

        let nE = ((e - (7.25 * 5 * 2)) / ((30 * 8 * 12) - (7.25 * 5 * 2))) || 0
        let nR = (r / (10 + 0.1 * (10 * (1 + 1)))) || 0
        let nT = (t - (2 * 5) / ((8 * 12) - (2 * 5))) || 0
        let nW = (w - (-5 * 3) / ((-5 * 3) - (5 * 3))) || 0

        let final = (Weconomic * nE + Wrelevance * nR - Wtime * nT + Wenvironment * nW) || 0;
        columns[columns.length - 2].textContent = Math.round(final * 100) / 100;
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
clear();
newRow();
setupTable();