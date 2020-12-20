import {config} from './modules/config'
import AppService from './modules/app.service'
import './modules/header.component'
import './style/style.css'
import './less/index.less'
import './scss/index.scss'


console.log(config)

let app = new AppService('Jayson')
app.log()

