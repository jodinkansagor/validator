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
        const errors = [];
        this.validators.forEach(validator => {
            try {
                validatedObject[validator.keyString] = validator.validate(object);
            }
            catch(err) {
                errors.push(err);
            }
        });
        if(errors.length > 0) {
            throw new Error(`invalid schema, ${errors}`);
        }
        return validatedObject;
    }

}

module.exports = { Schema };
