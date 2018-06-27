const mysql = require('mysql');

module.exports=()=>{

    return mysql.createConnection({

        host:'localhost',
        user:'root',
        password:'24021998',
        database:'GuaguitApp'

    });

    
}