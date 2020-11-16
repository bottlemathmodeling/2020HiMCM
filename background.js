totalRows = 0;

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