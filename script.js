
// WORKING WITH DATA COLLECTIONS (weighted lab)

// From Practical Loops Lab (#3)

// What do we know?
//  // Use a loop

// During our string we can encounter ONLY one of the following:
//  // comma - separate cells
//  // '\n' - separate row/line
//  // char - everything else - bottom

// What can we infer?
//  // 4 variables, 1 for each cell
//  // console.log(cell1, cell2, cell3, cell4);
//  // Looping over the string

//What is the input?
// // string

// What do they want (for output, datatype/format)?
// // print individual cells

/*let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Variables - to store data in empty cells
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
// Keeps track of commas / cells
let commas = 0;

// Looped over entire string.
for (let i = 0; i < csv.length; i++) {
  //Saving value current char at the current index into a variable to make easier to use.
  let current = csv[i]; //instead of writing csv[i] all the time

  if (current == ",") {//when current or csv[i] reach comma move over to next cell
    // Move to the next cell
    commas++; //iteration of commas
  } else if (current == "\n") {
    console.log(cell1, cell2, cell3, cell4);//printing cells for that line once reach the end. "\n" indicates end of the line.
    // Print all cells & reset cell/comma values for next line below
    commas = 0;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    // For all other chars
    // Add data to a cell
    if (commas == 0) {
        // If 0 commas add current char first cell
      cell1 += current;
    } else if (commas == 1) {
      cell2 += current;
    } else if (commas == 2) {
      cell3 += current;
    } else {
      cell4 += current;
    }
  }

  //Check if its the last index of loop.
  if (i == csv.length - 1) {
    //if so, print last row
    console.log(cell1, cell2, cell3, cell4);
  }
}*/

// PART 1: PARSE THE CSV's USING ARRAYS AND OBJECTS INSTEAD OF A FOR LOOP


// What do we know?
//  // Use a loop

// During our string we can encounter ONLY one of the following:
//  // comma - separate cells
//  // '\n' - separate row/line
//  // char - everything else - bottom

// What can we infer?
//  // 4 variables, 1 for each cell
//  // console.log(cell1, cell2, cell3, cell4);
//  // Looping over the string

//What is the input?
// // string

// What do they want (for output, datatype/format)?
// // print individual cells

// Starting string - input
/*const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

//Arrays for storing new data
// const rows =[]; //for the parsed row data - final destination
let rowData=[]; //for creating the rows with the cellData.
let cellData = "";//for storing iterized cell data. It will keep track of commas and "/n" as it goes through the string.


// Loop through each character in the CSV string


for(i=0; i<str.length; i++) {
  //Saving value current char at the current index into a variable to make easier to use.
  const current = str[i]; //instead of writing str[i] all the time. So, variable current will sift through each cell's data.

  if (current === ",") {//when current or str[i] reaches a comma, it iterates to the next cell
    // Move to the next cell
  rowData.push(cellData); //iteration past commas
  cellData="";
  
   
} else if (current === "\n") {//iteration past the end of the row, which is indicated by "\n".
   rowData.push(cellData);
        // rows.push(rowData);
        rowData = [];
        cellData = "";
  } else {cellData+=current;
    // For all other chars
    // Add data to a cell

    if (cellData.length>0) { // If there is 0 data then this is the end of the loop
      rowData.push(cellData);
    // rows.push(rowData);
    }
  }

  //splice const rows so that header(categories) are renoved

  // const headers = rows.splice(0,4);
console.log(cellData);
// Display the parsed result
// console.log("All rows:", rows);
// console.log("Categories:", headers);

   
  }*/
// Part 1
// ****************************************************************************

//add one row of data from a csv list to an array

/*const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

const headings = str.split(" ");//removes the space between the list of items

console.log(headings); // I don't why that 4 appears.
*/



  // ****************************************************************************

  //Part 2 Expanding Functionality
  

let columnNum = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;
const rows=[];
const dataRows = rows.slice(1); //this returns the first row into the dataRows array
let headings = rows[0];//the headings start withthe first item in the row, which is ID.
for (i=0; i<columnNum.length; i++);{ //calculating whatever the length is of the columns in the csv.
  console.log(`Column ${i+1}: `);
  for(let k=0; k<headings.length; k++){//iteration through the headings variable
    console.log(`$headings[k]}:${columnNum[i][k]}`);
  }
}































