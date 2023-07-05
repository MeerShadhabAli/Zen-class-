// define the date 
let  arr = [
    { name:'player1',score : 10, rank:1},
    { name:'player2',score : 7},
    { name:'player3',score : 3}

] ;

// select the container 
let container = document.getElementById('container');

// create a table and insert the table to the container
let table = document.createElement('table');

// populate the header and data of the table 
let tableHeaders=Object.keys(arr[0]); 

let tableHeadersRow = document.createElement('tr');

tableHeaders.forEach(heading => {
    let th = document.createElement('th');
    th.textContent = heading;
    tableHeadersRow.appendChild(th);
});


table.appendChild(tableHeadersRow);

arr.forEach(object=>{
    let tr = document.createElement('tr');
    tr.classList.add('table.striped');
    Object.values(object).forEach(value =>{
        let td= document.createElement('td');
        td.textContent=value;
        tr.appendChild(td);

    });
    table.appendChild(tr);
    
});


container.appendChild(table);

table.classList.add('table','table-striped','table-success','table-bordered','custom-striped');