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

function filterData(input1, name){
    d3.event.preventDefault();
    input=d3.select(input1)
    inputValue=input.property("value")
    console.log("input",inputValue)
    filterTable=tableData.filter(data1 => data1.name === inputValue)
    console.log("filter",filterTable)
    generateTable(table,filterTable)
  
}


dateButton=d3.select("#date-btn")
dateButton.on("click",() => {
    filterData("#datetime",datetime)

})
cityButton=d3.select("#city-btn")
cityButton.on("click",function(){
    filterData("#city",city)
})
stateButton=d3.select("#state-btn")
stateButton.on("click",function(){
    filterData("#state",state)

})
countryButton=d3.select("#country-btn")
countryButton.on("click",function(){
    filterData("#country",country)

})
shapeButton=d3.select("#shape-btn")
shapeButton.on("click",function(){
    filterData("#shape",shape)

})
resetButton=d3.select("#reset-btn")
resetButton.on("click",function(){
    generateTable(table,tableData)
})

d3.selectAll("button").on("click",function(){
    console.log(this)
})


