// 引入nodejs中的核心模块
const path = require('path') 
console.log(path.join(__dirname,'/build'))
module.exports = {
    mode: "development",
    entry: './src/js/main.js', // 入口文件
    output:{
        path:path.resolve(__dirname, './build'),
        filename:'bundle.js'
      },
	 module:{ // 处理非js模块
	    rules:[ // 规则
	       {
	              test: /.css$/, 		// 正则测试
	              use: ['style-loader','css-loader'] 	// loader
			}
	    ]
	} 
}
 