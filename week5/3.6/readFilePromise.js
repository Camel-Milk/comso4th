const fs = require('fs').promises;

fs.readFile('/Users/sopeuteuweeokeompyuteo/Documents/GitHub/comso4th/week4/3.6/readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
