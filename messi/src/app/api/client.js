"use strict";
var clientService = require('../service/client')
const clientRouter = require('express').Router();

clientRouter.post('/', async (req, res, next) => {
    try {
        const { userId, ip, model } = req.body;
        await clientService.register(userId, ip, model)
        res.send("success")
    } catch (err) {
        res.status(400).send({
            error: err 
        })
    }
})

clientRouter.post('/:id/user', async (req, res, next) => {
    try {
        const clientId = req.params.id;
        const { userId, privelege } = req.body
        await clientService.setUser(userId, clientId, privelege)
        res.send("success")
    } catch (err) {
        res.status(400).send({
            error: err 
        })
    }
})

clientRouter.get('/:id/user', async (req, res, next) => {
    try {
        const clientId = req.params.id;
        res.send(await getUsers.setUser(clientId))
    } catch (err) {
        res.status(400).send({
            error: err 
        })
    }
})