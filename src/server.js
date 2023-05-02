import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './routes/web'
import initAPIRoute from './routes/API';

require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('./src/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//setup view engine
configViewEngine(app)

//init web routes
initWebRoute(app)
//init api routes
initAPIRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})