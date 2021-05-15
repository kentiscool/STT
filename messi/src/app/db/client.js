'use strict';
const db = require('../lib/pg');

export const store = async (ip, model) => {
    try {
        const statement = `
            INSERT INTO client
                (ip, model)
            VALUES 
                ($1, $2)
            RETURNING
                id
        `

        return (await db.queryParam(statement, [ip, model])).rows[0].id
    } catch (err) {
        throw err
    }
}

export const setUser = async (userId, clientId, privilege) => {
    try {
        const statement = `
            INSERT INTO user_client
                (client_id, user_id, access_type)
            VALUES 
                ($1, $2, $3)
            RETURNING
                id
        `

        return (await db.queryParam(statement, [email, password, privilege])).rows[0].id
    } catch (err) {
        throw err
    }
}

export const getByUserId = async (userId) => {
    try {
        const statement = `
            SELECT
                *
            FROM
                client
            INNER JOIN 
                user_client
            ON 
                client.id = user_client.client_id
            WHERE
                user_client.user_id = $1
        `

        return (await db.queryParam(statement, [userId])).rows;
    } catch (err) { 
        throw err;
    }
}

export const getUsers = async (clientId) => {
    try {
        const statement = `
            SELECT
                user_account.id, user_account.email
            FROM
                user_account
            INNER JOIN 
                user_client
            ON
                user_account.id = user_client.user_id
            WHERE
                user_client.client_id = $1
        `

        return (await db.queryParam(statement, [clientId])).rows
    } catch (err) {

    }
}