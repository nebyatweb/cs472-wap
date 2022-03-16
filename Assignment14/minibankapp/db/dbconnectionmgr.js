"use strict";

const mysql = require('mysql2');
const dbConfig = require('./dbconfig');

const dbConnectionMgr = ((dbConfig) => {
    const getConnection = () => {
        return mysql.createPool(dbConfig);
    }
    return {
        getConnection: getConnection
    }
})(dbConfig);

module.exports = dbConnectionMgr;