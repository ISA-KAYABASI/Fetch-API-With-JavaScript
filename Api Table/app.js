async function fillTable(url, table){

    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const data = await response.json();

    console.log(data[0]);

    //clear table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //puttinh headers
    for(const headerText in data[0]){
        const HeaderElement = document.createElement("th");
        HeaderElement.textContent = headerText;
        tableHead.querySelector('tr').appendChild(HeaderElement);

    }

    for(let i = 0; i< data.length; i++){
        const obj = Object.values(data[i]);
        const rowElement = document.createElement('tr');
        for(const cellText of obj){

        
            const cellElement = document.createElement('td');
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        
    }
        tableBody.appendChild(rowElement);
    }


}

fillTable('https://api.spacexdata.com/latest/payloads', document.querySelector("table"));
