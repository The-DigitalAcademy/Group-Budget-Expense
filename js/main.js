let items = document.getElementById('items').value;
let amount = Number (document.getElementById('amount').value);
let data = [];
function readAll () {
    let tData = document.getElementById('table_data');
    let elements = " "
    data.map((d) => 
    (elements += `<tr>
    <td> ${d.items}</td>
    <td> ${d.amount}</td>
    <td><button onclick="del(${index})">Delete</button></td>  
    <tr>
  `)
);
tData.innerHTML = elements;
}

function add(){
  let items = document.getElementById('items').value;
  let amount = Number (document.getElementById('amount').value);

  let newObject = { items, amount};
  data.push(newObject);
  readAll();
}

function del(index) {
    data.splice(index, 1); 
    updateTable();
}
