const express = require('express');
const mongoose = require('mongoose');
const app = express();
var dateFormat = require('dateformat');
const date = Date.now();
console.log(date);

const newDate = new Date(date);
console.log(newDate.toLocaleString().split(',')[0]);
console.log(
    newDate.getFullYear() + '/' + newDate.getMonth() + '/' + newDate.getDay()
);

mongoose.connect(
    'mongodb+srv://amansainju:aman123@cluster0.99sgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    (error) => {
        if (error) {
            console.log('Error while connecting to database:', error.message);
        } else {
            console.log('DB connected');
        }
    }
);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, GET, DELETE, OPTIONS'
    );
    next();
});

const employeeRoutes = require('./routes/employees');
const dashboardRoutes = require('./routes/dashboard');

app.use(express.json());
app.use('/employee', employeeRoutes);
app.use('/dashboard', dashboardRoutes);
const hostname = '127.0.0.1';

const port = 8000;

app.listen(port, hostname, () => {
    console.log('server is running at port', port);
});
