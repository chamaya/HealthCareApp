import mysql from 'mysql';
import dbConfig from "../config/db.config.js"

class MySqlConnection{
    
    constructor(query, data, callback){
        this.connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB,
            dateStrings: true,
        });
        if(query && data || callback){
            this.quickQuery(query, data, callback)
        }
    }

    quickQuery(query, data, callback){
        this.initConnection();
        this.initQuery(query, data, callback);
        this.endConnection();
    }

    initConnection(){
        this.connection.connect();
    }

    initQuery(query, data, callback){
        this.connection.query(query, data, callback);
    }

    endConnection(){
        this.connection.end()
    }
}

export default MySqlConnection;