"use strict";

const dbConnectionMgr = require('../dbconnectionmgr');


const accountDAO = (() =>{
    const getAccounts = async function() {
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const qryStrGetAccounts = "SELECT * FROM minibank_db.accounts";
            const [accounts] = await dbConnection.promise().query(qryStrGetAccounts);
            return accounts;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
        
    };

    const saveAccount = async function(account) {
        const cmdStrSaveAccount = `insert into accounts (account_id, customer_name, account_type) values (${account.account_id}, '${account.customer_name}', '${account.account_type}')`;
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount);
            return saveOpResult;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    return {
        getAccounts: getAccounts,
        saveAccount: saveAccount
    }
})();

module.exports = accountDAO;