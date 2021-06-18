const fs = require("fs");
const path = require("path");
const changeLamda = (path, apendValue) => {
  const directoryPath = path + "/backend/function";
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file);
      const filePath = `${directoryPath}/${file}/src/package.json`;
      const data = fs.readFileSync(filePath).toString();
      //   console.log("\n\n\n\n", data);
      const parseData = JSON.parse(data);
      parseData.name += apendValue;
      fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2));
    });
  });
};

module.exports = changeLamda;
