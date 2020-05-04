const express = require('express');
const bodyParser = require('body-parser');
const EventEmitter = require('events');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const errorHandle = require('./middleware/error')

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

//mongoose.set("useCreateIndex", true);
//mongoose.set("useFindAndModify", false);

//app middleware
app.use(morgan('dev'))
app.use(cors());
//if ((process.env.NODE_ENV = 'development')) {
//    app.use(cors({ origin: `http:///localhost:3000` }));
//}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//import routes
const authRoutes = require('./routes/auth.router');
const activityRoutes = require('./routes/activity.routes');
//const exampleRoutes = require('./routes/activityRoutes');



//middleware
app.use('/api/v1', authRoutes);
app.use('/api/v1', activityRoutes);
app.use('/api/v1', exampleRoutes);

app.use(errorHandle);

const PORT = process.env.PORT || 8000;


const emitter = new EventEmitter()
emitter.setMaxListeners(100)

app.listen(PORT,() => {
    console.log(`API is running port ${PORT} - ${process.env.NODE_ENV} mode`);
})