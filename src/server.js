import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web'
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('./src/public'))

//setup view engine
configViewEngine(app)

//init web routes
initWebRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})