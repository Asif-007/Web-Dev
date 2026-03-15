const fs = require("fs");
fs.readFile("./data.json", "utf-8",  (err, res) => {
  console.log(res);
});
