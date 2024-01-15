const path = require('path');
const folder = __dirname;
let replaceWith = process.argv[3];
let replaceThis = process.argv[2];
console.log(replaceThis, replaceWith)

let preview = false

const fs = require('node:fs');
try {
  const data = fs.readdir('.', (err, data) => {
    console.log(data);

    for(let i = 0; i < data.length; i++) {
        item = data[i];
        let oldFile = path.join(folder, item);
        let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
        if(!preview) {
            fs.rename(oldFile, newFile, () => {
                console.log(oldFile + " renamed to " + newFile);
            });
        }
        else {
            if(item !== newFile) console.log(oldFile + " will be renamed to " + newFile)
        }
    }

  });
} catch (err) {
  console.error(err);
}