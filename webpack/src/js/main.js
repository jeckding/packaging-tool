const { updateDom } = require('./tool')
// es6中的模块化
import {log} from './tool-es6'

import '../css/style.css'

updateDom ('app','index.html')
log('test') 