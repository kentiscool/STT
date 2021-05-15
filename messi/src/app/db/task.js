'use strict';
const db = require('../lib/pg');

export const storeArchetype = async (description) => {
    try {
        const statement = `
        INSERT INTO task_archetype
            (description) 
        VALUES
            ($1) 
        RETURNING 
            id
        `

        return (await db.queryParam(statement, [description])).rows[0].id 
    } catch (err) {
        throw err
    }
}

export const store = async (clientId, userId, taskArchetypeId, totalTime, totalDist, rawData) => {
    try {
        let statement = `
            INSERT INTO task_archetype
                (client_id, user_id, task_archetype_id, total_time, total_distance) 
            VALUES
                ($1, $2, $3, $4, $5) 
            RETURNING 
                id
        `

        const taskId = (await db.queryParam(statement, [clientId, userId, taskArchetypeId, totalTime, totalDist])).rows[0].id 

        statement = `
            INSERT INTO task_raw
                (task_id, data)
            VALUES
                ($1, $2)
            RETURNING 
                id
        `

        return (await db.queryParam(statement, [taskId, rawData])).rows[0].id 
    } catch (err) {
        throw err
    }
}

export const getTasksByUserId = async (userId) => {
    try {
        const statement = `
            SELECT 
                task.id, task.client_id, task.total_time, task.total_distance, task.task_archetype_id, task_archetype.description, task.created_at, task.updated_at
            FROM
                task
            INNER JOIN
                task_archetype
            ON
                task.task_archetype_id = task_archetype.id
            WHERE
                task.user_id = $1
        `

        return (await db.queryParam(statement, [userId])).rows
    } catch (err) {
        throw err
    }
}

export const getTasksByClientId = async (clientId) => {
    try {
        const statement = `
            SELECT 
                task.id, task.client_id, task.total_time, task.total_distance, task.task_archetype_id, task_archetype.description, task.created_at, task.updated_at
            FROM
                task
            INNER JOIN
                task_archetype
            ON
                task.task_archetype_id = task_archetype.id
            WHERE
                task.client_id = $1
        `

        return (await db.queryParam(statement, [clientId])).rows
    } catch (err) {
        throw err
    }
}
