const fs = require("fs");

const testFolder = "./src/assets/svg";

fs.readdirSync(testFolder).forEach(file => {
  console.log('<img src="./src/assets/svg/' + file + '" />');
});
