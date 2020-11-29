require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const expressValidator = require('express-validator');
//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
//app
const app = express();
//Connecting to mongoDB Atlas 
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}
    ).then(() => console.log("DB Connected"));
    mongoose.connection.on('error', err =>{
        console.log(`DB connection error:${err.message}`)
    })

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors());
app.options('*', cors());
//routes middleware
app.use('/api',authRoutes)
app.use('/api',userRoutes)
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server is runnng on port ${port}`)
});

