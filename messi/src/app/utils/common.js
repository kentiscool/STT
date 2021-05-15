"use strict";

module.exports = {
    toCamelCase: function (obj) {
        if (isObject(obj)) {
            const n = {};

            Object.keys(obj)
                .forEach((k) => {
                    n[snakeToCamel(k)] = toCamelCase(obj[k]);
                });

            return n;
        } else if (Array.isArray(obj)) {
            return obj.map((i) => {
                return toCamelCase(i);
            });
        }

        return obj;
    },
    validateEmail: (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

const snakeToCamel = (str) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
        .replace('-', '')
        .replace('_', '')
);

const isObject = function (obj) {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};