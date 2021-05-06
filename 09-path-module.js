// path is inuilt module
const path = require('path')

console.log(path.sep)   // it provides '/' symbol

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)      // joins and gives /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base)       // test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)       // /Users/vibhorgupta/Desktop/Canvas/Node Practise/content/subfolder/test.txt