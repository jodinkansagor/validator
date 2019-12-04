const { Validator } = require('./validator');


class Schema {
    constructor(bigObject) {
        this.bigObject = bigObject;
        this.validators = Object.entries(bigObject).map(entry => {
            return new Validator(entry[0], entry[1]);
        });
    }

    validate(object) {
        const validatedObject = {};
        this.validators.forEach(validator => {
            validatedObject[validator.keyString] = validator.validate(object);
        });
        
        return validatedObject;
    }

}

module.exports = { Schema };
