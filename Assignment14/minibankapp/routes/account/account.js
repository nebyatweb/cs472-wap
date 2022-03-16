"use strict";

const express = require('express');
const path = require('path');
const accountRouter = express.Router();
const accountController = require('../../controller/accountController');
const bodyParser = require('body-parser')
const urlencoded = bodyParser.urlencoded({extended: false})

accountRouter.get("/new", async (req, res, next) => {
    console.log(`Presenting list of accounts page`);
    const accounts = await accountController.getAccounts(req, res);
    console.log('accounts fetched from the db')
    console.log(accounts);
    res.locals = {accounts: accounts};
    res.render("account-form");
});

accountRouter.get("/new", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../../views", "account-form.html"));
});

accountRouter.post("/new", urlencoded, async (req, res, next) => {
    // console.log('body from post request');
    // console.log(req.body);
    const result = await accountController.addNewAccount(req, res);
    res.redirect(303, "/account/new");
});

module.exports = accountRouter;