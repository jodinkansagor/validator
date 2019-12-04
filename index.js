const { isNumber, isString, isBoolean, isArray, isObject, isFunction } = require('./lib/types.js');
const  { Validator } = require('./lib/validator.js');

const { Schema } = require('./lib/schema.js');

const dog = {
    name: 'spot',
    age: '5',
    weight: '20 lbs'
};

const nameValidator = new Validator('name', {
    type: String,
    required: true
});

const schema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: String
    }
});

const spot = {
    name: 'spot',
    age: 5,
    weight: '20 lbs'
};
// console.log(isNumber('3'));
// console.log(isString('hi'));
// console.log(isBoolean(true));
// console.log(isArray([3, 2]));
// console.log(isObject({ name: 'JBJ', age: 41 }));
// console.log(isFunction(() => {}));
// console.log(nameValidator.validate(dog));
console.log(schema);
