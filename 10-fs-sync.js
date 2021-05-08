
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('content/second.txt','utf8')
const second = readFileSync('content/second.txt', 'utf8')

writeFileSync(                      // writeFileSync(path,result) . Note: put ,{ flag:'a'} if you want to apppend data
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)

console.log('done with this task')
