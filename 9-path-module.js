const path = require('path')
// /
console.log(path.sep);
// /content/subfolder/text.txt
const filePath = path.join('/content//', 'subfolder', 'text.txt')
console.log(filePath)
// text.txt
const base = path.basename(filePath)
console.log(base);
// /home/elamir/codes/side-project/node/content/subfolder/text.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);