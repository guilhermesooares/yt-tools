const dir = "data/tratamento-precoce-top-200/relatedVideos";
const { writeFile, readFile, existsSync } = require("fs");

async function save(json, name) {
  writeFile(
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

function readF(path, callback) {
  try {
    var filename = require.resolve(`../${path}`);
    readFile(filename, "utf8", callback);
  } catch (e) {
    callback(e);
  }
}

function fileExist(name) {
  let exist = false
  try {
    if (existsSync(`${dir}/${name}`)) exist = true
  } catch (err) {
    console.log("Erro ao verificar existência do arquivo.")
  }
  return exist;
}

module.exports = { save, readF, fileExist };