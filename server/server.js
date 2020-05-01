const express = require('express');
const bodyParser = require('body-parser');
const EventEmitter = require('events');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//DB connection
mongoose.connect('mongodb://localhost:27017/mernauth', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB CONNECTION FAILED'))

//app middleware
app.use(morgan('dev'))
app.use(cors());
//if ((process.env.NODE_ENV = 'development')) {
//    app.use(cors({ origin: `http:///localhost:3000` }));
//}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//import routes
const authRoutes= require('./routes/auth.router')









//middleware
app.use('/api/v1',authRoutes);

const PORT = process.env.PORT || 8000;


const emitter = new EventEmitter()
emitter.setMaxListeners(100)

app.listen(PORT,() => {
    console.log(`API is running port ${PORT} - ${process.env.NODE_ENV} mode`);
})