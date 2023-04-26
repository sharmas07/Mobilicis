const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const connectDB = require('./mongodb/connectDB');
const routeOne = require('./routes/route1');
const routeTwo = require('./routes/route2');
const routeThree = require('./routes/route3');
const routeFour = require('./routes/route4');
const routeFive = require('./routes/route5');
app.use(cors());
dotenv.config();
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/route1', routeOne)
app.use('/api/v1/route2', routeTwo)
app.use('/api/v1/route3', routeThree)
app.use('/api/v1/route4', routeFour)
app.use('/api/v1/route5', routeFive)

app.get('/',(req,res)=>{
    res.send('hello from oru mobiles')
})

const startServer = async ()=>{

    try {
        connectDB(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error);
    }

    app.listen(PORT, ()=>{
        console.log(`server started at port ${PORT}`)
    })
}
startServer();
