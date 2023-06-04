// Access the form and table
var form = document.getElementById('form');
var table = document.getElementById('directory').getElementsByTagName('tbody')[0];

// Variable to keep track of number of records
var counter = 1;

// Function to add a record to the directory
function addRegister(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var mail = document.getElementById('mail').value;
  var phone = document.getElementById('phone').value;

  // Create a new row in the table with the following values
  var row = table.insertRow();
  row.innerHTML = '<td>' + counter + '</td>' +
    '<td>' + name + '</td>' +
    '<td>' + mail + '</td>' +
    '<td>' + phone + '</td>' +
    '<td><button onclick="deleteRegister(this)">Eliminar</button></td>';

  // Update the counter and clear the values of the form
  counter++;
  form.reset();
}

// Function to delete an entry from the directory
function deleteRegister(boton) {
  var row = boton.parentNode.parentNode;
  row.parentNode.removeChild(row);
  counter -= 1;
}

// Add a submit event to the form
form.addEventListener('submit', addRegister);