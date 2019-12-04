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
        const value = object[this.keyString];
        if(this.required && !value) {
            throw new Error('error');
        }
        if(!this.required && !value) {
            return null;
        }
        const functionToCast = getCaster(this.type);
        const valueAtKey = functionToCast(object[this.keyString]);
        return valueAtKey;
    } 
}

module.exports = { Validator };
