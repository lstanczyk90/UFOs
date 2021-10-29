// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build table
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        // Tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
        let row = tbody.append("tr");
        // By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. 
        // By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. 
        // We've added forEach((val) to specify that we want one object per row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // The .select() function is a very common one used in D3. 
    // It will select the very first element that matches our selector string: "#datetime". 
    // The selector string is the item we're telling D3.js to look for.
    // By chaining .property("value"); to the d3.select function, 
    // we're telling D3 not only to look for where our date values are stored on the webpage, 
    // but to actually grab that information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      };
    
       // Rebuild the table using the filtered data
      // @NOTE: If no date was entered, then filteredData will
      // just be the original tableData.
      buildTable(filteredData);
    };


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);