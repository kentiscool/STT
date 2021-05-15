'use strict';

var clientDB = require('../db/client')
var common = require('../utils/common')

const PRIVELEGE = {
    owner: 'OWNER', 
    admin: 'ADMIN',
    user: 'USER',
    other: 'OTHER'
}

export const register = async (userId, ip, model) => {
    try {
        const clientId = await clientDB.store(ip, model)
        await clientDB.setUser(userId, clientId, PRIVELEGE.owner)
        return 'Success'
    } catch (err) {
        throw err
    }
}

export const setUser = async (userId, clientId, privelege) => {
    try {
        let p = null;
        for (let key in PRIVELEGE) {
            if (PRIVELEGE[key] == privelege) {
                p = PRIVELEGE[key];
                break;
            }
        }

        if (p == null) {
            throw `Privelege not found, please only use one of ${Object.values(PRIVELEGE)}`
        }

        await clientDB.setUser(userId, clientId, p)
    } catch (err) {
        throw err
    }
}

export const getUsers = (clientId) => {
    try {
        return common.toCamelCase(await clientDB.getUsers(clientId));
    } catch (err) { 
        throw err;
    }
}