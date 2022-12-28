// 引入nodejs中的核心模块
const path = require('path') 
console.log(path.join(__dirname,'/build'))
module.exports = {
  output:{
    filename:'boundle.js'
  }
}