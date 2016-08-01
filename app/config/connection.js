// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "t3st3r",
        database: "starwars"
    },
    jawsDB: {
        port: 3306,
        host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'yxkg9p15obu9ocbe',
        password: "z5w1xy14sw3gta06",
        database: "d9o08k9sfc3x81dj"
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection( //enter connection here);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
}));

module.exports = connection;