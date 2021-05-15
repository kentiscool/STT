'use strict';

var taskDB = require('../db/task')
var common = require('../utils/common')

export const createArchetype = (description) => {
    try {
        await taskDB.storeArchetype(description)
        return 'success'
    } catch (err) {
        throw err
    }
}

export const createTask = async (clientId, userId, taskArchetypeId, totalTime, totalDist, rawData) => {
    try {
        await taskDB.createTask(clientId, userId, taskArchetypeId, totalTime, totalDist, rawData)
        return 'success'
    } catch (err) {
        throw err
    }
}

export const getTasksByUserId = async (userId) => {
    try {
        return common.toCamelCase(await taskDB.getTasksByUserId(userId))
    } catch (err) {
        throw err
    }
}

export const getTasksByClientId = async (clientId) => {
    try {
        return common.toCamelCase(await taskDB.getTasksByUserId(clientId))
    } catch (err) {
        throw err
    }
}