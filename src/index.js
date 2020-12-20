import {config} from './modules/config'
import AppService from './modules/app.service'
import 'bootstrap'
import './modules/header.component'
import './scss/index.scss'
import './style/style.css'
import './less/index.less'


console.log(config)

let app = new AppService('Jayson')
app.log()

