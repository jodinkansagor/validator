const { Schema } = require('../lib/schema');

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
  
const rover = {
    name: 'rover',
    age: '10'
};
  
const who = {
    age: 'hi'
};

describe('schema module', () => {

    //1
    it('returns an object with all the right fields cast', () => {
        expect(schema.validate(spot)).toEqual({ name: 'spot', age: 5, weight: '20 lbs' });
        expect(schema.validate(rover)).toEqual({ name: 'rover', age: 10, weight: null });
    });

    //2
    it('throws an error if the object doesnt pass the schema', () => {
        expect(() => schema.validate(who)).toThrowErrorMatchingSnapshot();
    });

});
