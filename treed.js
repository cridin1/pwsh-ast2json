var jq = require("jqgram").jqgram;
const fs = require('fs');

const filePath = './output.json';
let jsonData1,jsonData2;

// Read file with utf16le encoding
fs.readFile(filePath, 'utf16le', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Remove BOM if present
  data = data.charCodeAt(0) === 0xfeff ? data.slice(1) : data;
  try {
    jsonData1 = JSON.parse(data);
    //console.log('JSON data:', JSON.stringify(jsonData));
  } catch (jsonError) {
    console.error('Error parsing JSON:', jsonError);
  }
});

fs.readFile(filePath, 'utf16le', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  
    // Remove BOM if present
    data = data.charCodeAt(0) === 0xfeff ? data.slice(1) : data;
    try {
        jsonData2 = JSON.parse(data);
      //console.log('JSON data:', jsonData2.ScriptBlockAst[2].NamedBlockAst[0].Statements.keys(object.numbers)[2]);
      console.log(Object.values(jsonData2).map(({length}) => length));
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
    }
  });

// jq.distance({
//     root: jsonData1
// },{
//     root: jsonData2
// },{ p:2, q:3, depth:10 },
// function(result) {
//     console.log(result.distance);
// });