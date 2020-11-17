// class JobsItem {
//     constructor(arr) {
//         this.name = arr[0] || "";
//         this.Sbase = arr[1] || "";
//         this.Sbonus = arr[2] || "";
//         this.Ctransport = arr[3] || "";
//         this.Cwork = arr[4] || "";
//         this.Afuture = arr[5] || "";
//         this.chard = arr[6] || "";
//         this.csoft = arr[7] || "";
//         this.Tweekly = arr[8] || "";
//         this.Tweeks = arr[9] || "";
//         this.Ttransport = arr[10] || "";
//         this.Jinteraction = arr[11] || "";
//         // this.Pinteraction = arr[12] || "";
//         this.Jdaily = arr[12] || "";
//         // this.Pdaily = arr[14] || "";
//         this.Jconnection = arr[13] || "";
//         // this.Pconnection = arr[16] || "";
//         // this.Weconomic = arr[17] || "";
//         // this.Wtime = arr[18] || "";
//         // this.Wenvironment = arr[19] || "";
//         // this.Wrelevance = arr[20] || "";
//     }

//     addToTable() {
//         var body = document.getElementsByTagName("body")[0];
//         var tbl = document.getElementById("jobs");
//         var tblBody = document.getElementById("jobs body");
//         var row = document.createElement("tr");

//         for (var columnNum = 1; columnNum <= 16; columnNum++) {
//             var cell = document.createElement("td");
//             var cellText;
//             switch (columnNum) {
//                 case 1: // Sbase
//                     cell.addEventListener("keyup", function () {
//                         save(tbl, "jobsTable");
//                     })
//                     cellText = document.createTextNode(this.name);
//                     break;
//                 case 2: // Sbase
//                     cellText = genSlider(0, 50000, 0, tbl);
//                     break;
//                 case 3: // Sbonus
//                     cellText = genSlider(0, 5000, 0, tbl);
//                     break;
//                 case 4: //Ctransport
//                     cellText = genSlider(0, 200, 0, tbl);
//                     break;
//                 case 5: //Cwork
//                     cellText = genSlider(0, 10000, 0, tbl);
//                     break;
//                 case 6: //Afuture
//                     cellText = genSlider(0, 10, 0, tbl);
//                     break;
//                 case 7: //chard
//                     cellText = genSelector([["yes", 1], ["no", 0]], tbl);
//                     break;
//                 case 8: //csoft
//                     cellText = genSelector([["yes", 1], ["no", 0]], tbl);
//                     break;
//                 case 9: //tweekly
//                     cellText = genSlider(0, 56, 0, tbl);
//                     break;
//                 case 10: //tweeks
//                     cellText = genSlider(0, 12, 0, tbl);
//                     break;
//                 case 11: //ttrans
//                     cellText = genSlider(0, 120, 0, tbl);
//                     break;
//                 case 12: //Jinteraction
//                     cellText = genSelector([["individual", -1], ["group work", 1]], tbl);
//                     break;
//                 case 13: //Jdaily
//                     cellText = genSelector([["monotony", -1], ["variety", 1]], tbl);
//                     break;
//                 case 14: //Jconnection
//                     cellText = genSelector([["social", -1], ["alone", 1]], tbl);
//                     break;
//                 case 15: //final output
//                     cell.addEventListener("keyup", function () {
//                         save(tbl, "jobsTable");
//                     })
//                     cellText = document.createTextNode(this.name);
//                     break;
//                 case 16:
//                     cellText = document.createElement("button");
//                     cellText.innerHTML = "x";
//                     cellText.onclick = function () {
//                         tblBody.removeChild(this.parentNode.parentNode);
//                         localStorage.setItem("jobsTable", tbl.innerHTML);
//                     }
//                 default:
//                     break;
//             }
//             cell.appendChild(cellText);

//             if (columnNum == 1) {
//                 cell.contentEditable = true;
//                 cell.setAttribute("contenteditable", true);
//             } else {
//                 cell.contentEditable = false;
//                 cell.setAttribute("contenteditable", false);
//             }
//             row.appendChild(cell);
//         }
//         tblBody.appendChild(row);
//         tbl.appendChild(tblBody);
//         body.appendChild(tbl);
//     }
// }

// function setupTable() {
//     var tbl = document.getElementById("jobs");
//     var rows = tbl.getElementsByTagName("tr");
//     for (var i = 0; i < rows.length; i++) {
//         var columns = rows[i].getElementsByTagName("th");
//         for (var j = 0; j < columns.length; j++) {
//             var cell = columns[j];
//             switch (j) {
//                 case 1:
//                     cell.addEventListener("keyup", function () {
//                         if (checkInput(this)) {
//                             save(tbl, "jobsTable");
//                         }
//                     })
//                     break;
//                 case 2:
//                     cell.addEventListener("keyup", function () {
//                         if (checkInput(this)) {
//                             save(tbl, "jobsTable");
//                         }
//                     })
//                     break;
//                 case 4:
//                     cell.addEventListener("click", function () {
//                         var row = this.parentNode
//                         row.parentNode.removeChild(row);
//                         save(tbl, "jobsTable");
//                     });
//                 default:
//                     cell.addEventListener("keyup", function () {
//                         save(tbl, "jobsTable");
//                     })
//                     break;
//             }
//         }
//     }
// }

// function checkInput(object) {
//     // var text = object.textContent;
//     // var regex = /([1-9]|1[012])[:]([0-5][0-9]) [A|P][M]/;
//     // var match = text.match(regex);
//     // return match && text === match[0];
//     return true;
// }

// function newRow() {
//     var tbl = document.getElementById("jobs");
//     var add = document.getElementById("add");
//     add.onclick = function () {
//         var jobsItem = new JobsItem("")
//         jobsItem.addToTable()
//         localStorage.setItem("jobsTable", tbl.innerHTML);
//     }
// }

// function load(id, key) {
//     var object = document.getElementById(id);
//     var saved = localStorage.getItem(key);
//     if (saved) {
//         object.innerHTML = saved;
//     }
// }

// function save(object, key) {
//     localStorage.setItem(key, object.innerHTML);
// }

// function clear() {
//     localStorage.clear();
// }

// // function getJobs() {
// //     var jobs = {}

// //     var rows = document.getElementsByTagName("tr");
// //     for (i = 1; i < rows.length; i++) {
// //         var columns = rows[i].getElementsByTagName("td");
// //         var name = columns[0].textContent;
// //         var salary = columns[1].textContent;
// //         var hours = columns[2].textContent;
// //         jobs[name] = new ScheduleItem(name, salary, hours, 0);
// //     }

// //     return jobs;
// // }

// function calculateScores() {
//     var tbl = document.getElementById("jobs");
//     var rows = tbl.getElementsByTagName("tr");

//     var ptbl = document.getElementById("personal");
//     var prows = tbl.getElementsByTagName("td");
//     for (i = 1; i < rows.length; i++) {
//         var columns = rows[i].getElementsByTagName("td");
//         var Sbase = parseInt(columns[1].textContent) || 0;
//         var Sbonus = parseInt(columns[2].textContent) || 0;
//         var Ctransport = parseInt(columns[3].textContent) || 0;
//         var Cwork = parseInt(columns[4].textContent) || 0;
//         var Afuture = parseInt(columns[5].textContent) || 0;
//         var chard = parseInt(columns[6].childNodes[0].value) || 0;
//         var csoft = parseInt(columns[7].childNodes[0].value) || 0;
//         var Tweekly = parseInt(columns[8].textContent) || 0;
//         var Tweeks = parseInt(columns[9].textContent) || 0;
//         var Ttransport = parseInt(columns[10].textContent) || 0;
//         var Jinteraction = parseInt(columns[11].childNodes[0].value) || 0;
//         var Pinteraction = parseInt(prows[0].textContent) || 0;
//         var Jdaily = parseInt(columns[13].childNodes[0].value) || 0;
//         var Pdaily = parseInt(prows[1].textContent) || 0;
//         var Jconnection = parseInt(columns[15].childNodes[0].value) || 0;
//         var Pconnection = parseInt(prows[2].textContent) || 0;
//         var Weconomic = parseInt(prows[3].textContent) || 0;
//         var Wtime = parseInt(prows[4].textContent) || 0;
//         var Wenvironment = parseInt(prows[5].textContent) || 0;
//         var Wrelevance = parseInt(prows[6].textContent) || 0;

//         let e = (Sbase + Sbonus - (Ctransport) / 120) * Tweeks - Cwork;
//         let r = Afuture + 0.1 * (Afuture * (chard + csoft));
//         let t = (Tweekly + Ttransport) * Tweeks;
//         let w = Jinteraction * (Pinteraction - 5) + Jdaily * (Pdaily - 5) + Jconnection * (Pconnection - 5);

//         let eMin = 7.25 * 5 * 2;
//         let eMax = 30 * 8 * 12;
//         let rMax = 10 + 0.1 * (10 * (1 + 1));
//         let tMin = 2 * 5;
//         let tMax = 8 * 12;
//         let wMin = -5 * 3;
//         let wMax = 5 * 3;

//         let nE = ((e - eMin) / (eMax - eMin)) || 0;
//         let nR = (r / rMax) || 0;
//         let nT = (t - tMin / (tMax - tMin)) || 0;
//         let nW = (w - wMin / (wMax - wMin)) || 0;

//         console.log(nE)
//         console.log(nR)
//         console.log(nT)
//         console.log(nW)

//         let final = (Weconomic * nE + Wrelevance * nR - Wtime * nT + Wenvironment * nW) || 0;
//         // final = Jinteraction;
//         columns[columns.length - 2].textContent = Math.round(final * 100) / 100;
//     }
// }

// function genSlider(min, max, value, tbl) {
//     let container = document.createElement("div");
//     container.setAttribute("class", "slidecontainer")

//     let slider = document.createElement("input");
//     slider.setAttribute("type", "range");
//     slider.setAttribute("min", min);
//     slider.setAttribute("max", max);
//     slider.setAttribute("class", "slider");
//     slider.setAttribute("value", value)

//     let out = document.createElement("p");
//     out.textContent = value;

//     container.appendChild(slider);
//     container.appendChild(out);

//     slider.oninput = function () {
//         save(tbl, "jobsTable");
//         out.textContent = this.value;
//     }

//     return container;

// }

// function genSelector(arr, tbl) {
//     let selector = document.createElement("select");

//     for (var i = 0; i < arr.length; i++) {
//         let option = document.createElement("option");
//         option.setAttribute("value", arr[i][1]);
//         option.textContent = arr[i][0];
//         selector.appendChild(option);
//     }

//     // let out = document.createElement("p");
//     // out.textContent = arr[0];

//     // selector.appendChild(out);

//     // selector.onchange = function () {
//     //     save(tbl, "jobsTable");
//     //     out.textContent = this.value;
//     // }

//     return selector;
// }


// function initPersonal() {
//     var body = document.getElementsByTagName("body")[0];
//     var tbl = document.getElementById("personal");
//     var tblBody = document.getElementById("personal body");
//     var row = document.createElement("tr");

//     for (var columnNum = 1; columnNum <= 7; columnNum++) {
//         var cell = document.createElement("td");
//         var cellText;
//         switch (columnNum) {
//             case 1: //Pinteraction
//                 cellText = genSlider(0, 10, 0, tbl);
//                 break;
//             case 2: //Pdaily
//                 cellText = genSlider(0, 10, 0, tbl);
//                 break;
//             case 3: //Pconnection
//                 cellText = genSlider(0, 10, 0, tbl);
//                 break;
//             case 4: // wecon
//                 cellText = genSlider(0, 10, 1, tbl);
//                 break;
//             case 5: //wtime
//                 cellText = genSlider(0, 10, 1, tbl);
//                 break;
//             case 6: //wenv
//                 cellText = genSlider(0, 10, 1, tbl);
//                 break;
//             case 7: //wrel
//                 cellText = genSlider(0, 10, 1, tbl);
//                 break;
//             default:
//                 break;
//         }
//         cell.appendChild(cellText);

//         cell.contentEditable = false;
//         cell.setAttribute("contenteditable", false);

//         row.appendChild(cell);
//     }
//     tblBody.appendChild(row);
//     tbl.appendChild(tblBody);
//     body.appendChild(tbl);
// }

// var table = document.getElementById('jobs');
// var classIndex = 0;

// // load("jobs", "jobsTable");
// initPersonal()
// newRow();
// setupTable();
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
        // this.Pinteraction = arr[12] || "";
        this.Jdaily = arr[12] || "";
        // this.Pdaily = arr[14] || "";
        this.Jconnection = arr[13] || "";
        // this.Pconnection = arr[16] || "";
        // this.Weconomic = arr[17] || "";
        // this.Wtime = arr[18] || "";
        // this.Wenvironment = arr[19] || "";
        // this.Wrelevance = arr[20] || "";
    }

    addToTable() {
        var body = document.getElementsByTagName("body")[0];
        var tbl = document.getElementById("jobs");
        var tblBody = document.getElementById("jobs body");
        var row = document.createElement("tr");

        for (var columnNum = 1; columnNum <= 16; columnNum++) {
            var cell = document.createElement("td");
            var cellText;
            switch (columnNum) {
                case 1: // Sbase
                    cell.addEventListener("keyup", function () {
                        save(tbl, "jobsTable");
                    })
                    cellText = document.createTextNode(this.name);
                    break;
                case 2: // Sbase
                    cellText = genSlider(0, 50000, 0, tbl);
                    break;
                case 3: // Sbonus
                    cellText = genSlider(0, 5000, 0, tbl);
                    break;
                case 4: //Ctransport
                    cellText = genSlider(0, 200, 0, tbl);
                    break;
                case 5: //Cwork
                    cellText = genSlider(0, 10000, 0, tbl);
                    break;
                case 6: //Afuture
                    cellText = genSlider(0, 10, 0, tbl);
                    break;
                case 7: //chard
                    cellText = genSelector([["yes", 1], ["no", 0]], tbl);
                    break;
                case 8: //csoft
                    cellText = genSelector([["yes", 1], ["no", 0]], tbl);
                    break;
                case 9: //tweekly
                    cellText = genSlider(0, 56, 0, tbl);
                    break;
                case 10: //tweeks
                    cellText = genSlider(0, 12, 0, tbl);
                    break;
                case 11: //ttrans
                    cellText = genSlider(0, 120, 0, tbl);
                    break;
                case 12: //Jinteraction
                    cellText = genSelector([["individual", -1], ["group work", 1]], tbl);
                    break;
                case 13: //Jdaily
                    cellText = genSelector([["monotony", -1], ["variety", 1]], tbl);
                    break;
                case 14: //Jconnection
                    cellText = genSelector([["social", -1], ["alone", 1]], tbl);
                    break;
                case 15: //final output
                    cell.addEventListener("keyup", function () {
                        save(tbl, "jobsTable");
                    })
                    cellText = document.createTextNode(this.name);
                    break;
                case 16:
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

            if (columnNum == 1) {
                cell.contentEditable = true;
                cell.setAttribute("contenteditable", true);
            } else {
                cell.contentEditable = false;
                cell.setAttribute("contenteditable", false);
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
    var rows = tbl.getElementsByTagName("tr");
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

// function getJobs() {
//     var jobs = {}

//     var rows = document.getElementsByTagName("tr");
//     for (i = 1; i < rows.length; i++) {
//         var columns = rows[i].getElementsByTagName("td");
//         var name = columns[0].textContent;
//         var salary = columns[1].textContent;
//         var hours = columns[2].textContent;
//         jobs[name] = new ScheduleItem(name, salary, hours, 0);
//     }

//     return jobs;
// }

function calculateScores() {
    var tbl = document.getElementById("jobs");
    var rows = tbl.getElementsByTagName("tr");

    var ptbl = document.getElementById("personal");
    var prows = tbl.getElementsByTagName("td");
    for (i = 1; i < rows.length; i++) {
        var columns = rows[i].getElementsByTagName("td");
        var Sbase = parseInt(columns[1].textContent) || 0;
        var Sbonus = parseInt(columns[2].textContent) || 0;
        var Ctransport = parseInt(columns[3].textContent) || 0;
        var Cwork = parseInt(columns[4].textContent) || 0;
        var Afuture = parseInt(columns[5].textContent) || 0;
        var chard = parseInt(columns[6].childNodes[0].value) || 0;
        var csoft = parseInt(columns[7].childNodes[0].value) || 0;
        var Tweekly = parseInt(columns[8].textContent) || 0;
        var Tweeks = parseInt(columns[9].textContent) || 0;
        var Ttransport = parseInt(columns[10].textContent) || 0;
        var Jinteraction = parseInt(columns[11].childNodes[0].value) || 0;
        var Pinteraction = parseInt(prows[0].textContent) || 0;
        var Jdaily = parseInt(columns[13].childNodes[0].value) || 0;
        var Pdaily = parseInt(prows[1].textContent) || 0;
        var Jconnection = parseInt(columns[15].childNodes[0].value) || 0;
        var Pconnection = parseInt(prows[2].textContent) || 0;
        var Weconomic = parseInt(prows[3].textContent) || 0;
        var Wtime = parseInt(prows[4].textContent) || 0;
        var Wenvironment = parseInt(prows[5].textContent) || 0;
        var Wrelevance = parseInt(prows[6].textContent) || 0;

        let e = (Sbase + Sbonus - (Ctransport) / 120) * Tweeks - Cwork;
        let r = Afuture + 0.1 * (Afuture * (chard + csoft));
        let t = (Tweekly + Ttransport) * Tweeks;
        let w = Jinteraction * (Pinteraction - 5) + Jdaily * (Pdaily - 5) + Jconnection * (Pconnection - 5);

        let eMin = 7.25 * 5 * 2;
        let eMax = 30 * 8 * 12;
        let rMax = 10 + 0.1 * (10 * (1 + 1));
        let tMin = 2 * 5;
        let tMax = 8 * 12;
        let wMin = -5 * 3;
        let wMax = 5 * 3;

        let nE = ((e - eMin) / (eMax - eMin)) || 0;
        let nR = (r / rMax) || 0;
        let nT = (t - tMin / (tMax - tMin)) || 0;
        let nW = (w - wMin / (wMax - wMin)) || 0;

        console.log(nE)
        console.log(nR)
        console.log(nT)
        console.log(nW)

        let final = (Weconomic * nE + Wrelevance * nR - Wtime * nT + Wenvironment * nW) || 0;
        // final = Jinteraction;
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

function genSelector(arr, tbl) {
    let selector = document.createElement("select");

    for (var i = 0; i < arr.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", arr[i][1]);
        option.textContent = arr[i][0];
        selector.appendChild(option);
    }

    // let out = document.createElement("p");
    // out.textContent = arr[0];

    // selector.appendChild(out);

    // selector.onchange = function () {
    //     save(tbl, "jobsTable");
    //     out.textContent = this.value;
    // }

    return selector;
}


function initPersonal() {
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.getElementById("personal");
    var tblBody = document.getElementById("personal body");
    var row = document.createElement("tr");

    for (var columnNum = 1; columnNum <= 7; columnNum++) {
        var cell = document.createElement("td");
        var cellText;
        switch (columnNum) {
            case 1: //Pinteraction
                cellText = genSlider(0, 10, 0, tbl);
                break;
            case 2: //Pdaily
                cellText = genSlider(0, 10, 0, tbl);
                break;
            case 3: //Pconnection
                cellText = genSlider(0, 10, 0, tbl);
                break;
            case 4: // wecon
                cellText = genSlider(0, 10, 1, tbl);
                break;
            case 5: //wtime
                cellText = genSlider(0, 10, 1, tbl);
                break;
            case 6: //wenv
                cellText = genSlider(0, 10, 1, tbl);
                break;
            case 7: //wrel
                cellText = genSlider(0, 10, 1, tbl);
                break;
            default:
                break;
        }
        cell.appendChild(cellText);

        cell.contentEditable = false;
        cell.setAttribute("contenteditable", false);

        row.appendChild(cell);
    }
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}

var table = document.getElementById('jobs');
var classIndex = 0;

// load("jobs", "jobsTable");
initPersonal()
newRow();
setupTable();