async function connect(){
if(global.connection && globalconnection.state != 'disconnected'){
    return global.connection;
}
const mysql = require("mysql/promise")
const connection = await mysql.createConnection(
    "mysql://root:alunofatec@localhost3306/webii");
    console.log("conectou no MYSQL");
    global.connection = connection;
    return connection;
}
module.exports = {connect};