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
 // --------------------------------------------
 // click is save an event on button when you are writing
 $('#filter-btn').on('click',function(){
     // this indicate to the button
    var value = $('#filter-btn').val();
    // console.log('value:' ,value);
    var data_1 = searchTable(value,tableData);
    var rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {
        table.deleteRow(1);
    }
    generateTable(table, data_1);
})
  

//-----------------------------------------------------
function searchTable(value,data){
    var filterCity=[]
    for (let element of data) {
        if(element.city.toLowerCase().includes(value.toLowerCase()))
        {
            filterCity.push(element);
        }
    return filterCity;
    
}
}