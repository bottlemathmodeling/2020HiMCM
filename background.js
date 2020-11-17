totalRows = 0;
class JobsItem {
    constructor(name, salary, hours, score) {
        this.name = name;
        this.salary = salary;
        this.hours = hours;
        this.score = score;
    }
}

function newRow() {
    n = totalRows;
    let newInnerHTML = `
        <TR>
            <TD> <INPUT name="person${n}[name]"> </TD>
            <TD> <INPUT name="person${n}[salary]"> </TD>
            <TD> <INPUT name="person${n}[hours]"> </TD>
            <TD> [Score] </TD>
        </TR>
    `;
    document.getElementById("table").innerHTML += newInnerHTML;
    totalRows++;
}

newRow()