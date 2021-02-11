// from data.js
var tableData = data;

function generateTable(table, data) {
    tableHtml= d3.select("tbody")
    tableHtml.html("")
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
  let table = document.querySelector("tbody");
  generateTable(table, tableData);
 // --------------------------------------------

 //filter the table function
function filterData(userInput, key){
    d3.event.preventDefault();
    input=d3.select(userInput);
    inputValue=input.property("value");
    console.log("inputValue",inputValue);
    console.log("key",key); 
   // filter the input from the table
    filterTable=tableData.filter(data1 => data1[key] === inputValue);
    console.log("filter",filterTable);
    // load the table with the data
    generateTable(table,filterTable);
  
}

// select the button(event)
filterButton=d3.select("#filter-btn");

// call `on` (event lessener) to run the function that will work 
filterButton.on("click",() => {
    
    filterData("#datetime",'datetime')

});
filterButton.on("click",() => {
    filterData("#city",city)
});
filterButton.on("click",() => {
    filterData("#state",state)

});
filterButton.on("click",() => {
    filterData("#country",country)

});
filterButton.on("click",() => {
    filterData("#shape",shape)

});

// reset the table from the begnning button 
filterButton.on("click",() => {
    generateTable(table,tableData)
});
// just to know button clicked 
d3.selectAll("button").on("click",function(){
    console.log(this)
});


