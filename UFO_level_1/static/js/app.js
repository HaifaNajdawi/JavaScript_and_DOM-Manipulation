// from data.js
var tableData = data;

function generateTable(table, data) {
    for (let element of data) {
        // add a row 
      let row = table.insertRow();
      for (key in element) {
          // creates a new cell
        let cell = row.insertCell();
        // creates a new text node
        let text = document.createTextNode(element[key]);
         // appends the text node to the cell
        cell.appendChild(text);
      }
    }
  };
  // grab table and pass that to our function
  let table = document.querySelector("table");
  generateTable(table, tableData);

// --------------------------------------------------------

//   $(document).ready(function () {   
   
//     $('#datetime').datetimepicker({
//         format: 'MM/DD/YYYY',
//     });

//     $('#datetime').on('dp.change', function (e) {
//      var rex = new RegExp($(this).val(), "i");
//     $("tr").hide();
//     $("tr").filter(function () {
//         return rex.test($(this).text());
//     }).show();
//     });  
// });
