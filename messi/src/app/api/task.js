"use strict";
var taskService = require('../service/task')
const taskRouter = require('express').Router();

taskRouter.post('/archetype', async (req, res, next) => {
    try {
        const { description } = req.body;
        await taskService.createArchetype(description)
        res.send("success")
    } catch (err) {
        res.status(400).send({
            error: err 
        })
    }
})

taskRouter.post('/', async (req, res, next) => {
    try {
        const { clientId, userId, taskArchetypeId, totalTime, totalDist, rawData } = req.body;
        await taskService.createTask(clientId, userId, taskArchetypeId, totalTime, totalDist, rawData)
        res.send("success")
    } catch (err) {
        res.status(400).send({
            error: err 
        })
    }
})

taskRouter.get('/user/:id', async (req, res, next) => {
    try {
        const userId = req.params.id;
        res.send(await taskService.getTasksByUserId(userId))
    } catch (err) {
        res.status(400).send({
            error: err 
        })
    }
})

taskRouter.get('/client/:id', async (req, res, next) => {
    try {
        const clientId = req.params.id;
        res.send(await taskService.getTasksByClientId(clientId))
    } catch (err) {
        res.status(400).send({
            error: err 
        })
    }
})

