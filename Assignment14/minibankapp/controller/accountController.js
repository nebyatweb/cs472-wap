"use strict";

const accountDAO = require("../db/dao/accountDAO");
const Account = require("../model/account");

const accountController = (() => {
    const getAccounts = async (req, res) => {
        try {
            const accounts = await accountDAO.getAccounts();
            console.log(`Controller: Accounts list: ${accounts}`);
            return accounts;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    };

    const addNewAccount = async (req, res) => {
        const account = new Account(req.body.txtAccountNo, req.body.txtCustomerName, req.body.ddlAccountType);
        console.log(account);
        try {
            const opRes = await accountDAO.saveAccount(account);
            console.log(`AccountController: Save Product output: ${opRes}`);
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    }

    return {
        getAccounts: getAccounts,
        addNewAccount: addNewAccount
    }
})();

module.exports = accountController;