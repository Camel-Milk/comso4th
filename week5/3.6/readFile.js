const fs = require('fs');

fs.readFile('/Users/sopeuteuweeokeompyuteo/Documents/GitHub/comso4th/week4/3.6/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
