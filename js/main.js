let data = []; 

function readAll() {
    let tData = document.getElementById('table_data');
    let elements = "";
    data.forEach((d, index) => {
        elements += `<tr>
            <td>${d.items}</td>
            <td>${d.amount}</td>
            <td><button onclick="del(${index})">Delete</button></td>
          </tr>`;
    });
    tData.innerHTML = elements;
}

function add() {
    let items = document.getElementById('items').value;
    let amount = Number(document.getElementById('amount').value);

    if (items && amount) { 
        let newObject = { items, amount };
        data.push(newObject);
        readAll();

        document.getElementById('items').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter both items and amount.');
    }
}

function del(index) {
    data.splice(index, 1); 
    readAll();
}

function tot() {
    let totalAmount = 0;
    data.forEach((d) => {
        totalAmount += d.amount;
    });

    
    
    
    let totalDisplay = document.getElementById('display');
    totalDisplay.innerHTML = "Your total is: " + totalAmount;
}
