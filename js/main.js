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
    <td> <button onclick="(${del()})">Delete</button></td>
    <tr>
  `)
);
tData.innerHTML = elements;
}
function del(index) {
    data.splice(index); 
    updateTable();
  }