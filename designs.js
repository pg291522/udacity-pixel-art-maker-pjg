//create variables using DOM elements
// create color variable input from color picker
let color = document.getElementById('colorPicker');
// create table variable from pixelCanvas
let table = document.getElementById('pixelCanvas');
//create size picker form variable
let sizePicker = document.getElementById('sizePicker');

height = document.getElementById('inputHeight');
width = document.getElementById('inputWidth')
sizePicker.addEventListener('click', (e) => {
// This prevents default submit and refresh
  e.preventDefault();

  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  console.log(height.value, width.value);

//Call make grid function
  makeGrid(height, width);

});


//makegrid function that takes height an width as input parameters

function makeGrid(height, width) {
// remove any previously created table rows.
   $('tr').remove();

// Nested for loop that creates rows for height and columns for width
   for (let i = 0; i < height; i++) {
       let row = table.insertRow(i);
       for(let k = 0; k < width; k++) {
          let cell = row.insertCell(k);
          cell.addEventListener('click', (e) => {
            cell.style.backgroundColor = color.value;
          });
      }
   }
 }
//References:
  //jquery CDN code.jquery.com
  //MDN Developer Mozilla.org
  //w3schools.com(jquery)
