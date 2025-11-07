"use strict";

let n = 10;

function addRow(x,y,z){
    const mytable = document.getElementById("mytable");
    n++;
    const row = mytable.insertRow();

    const cell = row.insertCell();
    cell.outerHTML = `<th>${n}</th>`;

    const cell1 = row.insertCell();
    cell1.appendChild(document.createTextNode(x));
    
    const cell2 = row.insertCell();
    cell2.appendChild(document.createTextNode(y));

    const cell3 = row.insertCell();
    cell3.appendChild(document.createTextNode(z));

    const cell4 = row.insertCell();
    cell4.outerHTML = `<td><a href="#"><img src="./connect.png" alt="Connect" style="height: 25px"></a></td>`;
}

const form = document.querySelector("#myform");

form.addEventListener('submit', (ev)=>{
    ev.preventDefault();

    console.log(99);
    
    let x = document.querySelector("#username").value;
    let y = document.querySelector("#prof").value;
    let z = document.querySelector("#details").value;

    addRow(x,y,z);
    form.reset();
})
