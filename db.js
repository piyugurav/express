const mysql = require("mysql");

function connect()
{
 var connection = mysql.createConnection({

    host:"localhost",
    database:"mydb",
    user:"root",
    password:"manager"

 });

 connection.connect();

 return connection;

}

module.exports =
{
    connect : connect
}