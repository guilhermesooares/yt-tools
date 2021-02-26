const dir = "data/mkf";
const fs = require("fs");

async function save(json, name) {
  fs.writeFile(
    `${dir}/${name}`,
    JSON.stringify(json),
    { flag: "wx", encoding: "utf8" },
    function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    }
  );
}

function readFile(path, callback) {
  try {
    var filename = require.resolve(`../${path}`);
    fs.readFile(filename, "utf8", callback);
  } catch (e) {
    callback(e);
  }
}

module.exports = { save, readFile };
