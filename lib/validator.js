const {
    getCaster,
} = require('../lib/types.js');


class Validator {
    constructor(keyString, { type, required }) {
        this.keyString = keyString;
        this.type = type;
        this.required = required;
    } 
    validate(object) {
        if(this.required && !object[this.keyString]) {
            throw new Error('error');
        }
        if(!this.required && !object[this.keyString]) {
            return null;
        }
        const functionToCast = getCaster(this.type);
        const valueAtKey = functionToCast(object[this.keyString]);
        return valueAtKey;
    } 
}

module.exports = { Validator };
