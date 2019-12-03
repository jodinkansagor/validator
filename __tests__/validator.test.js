const { Validator } = require('../lib/validator');

const nameValidator = new Validator('name', {
    type: String,
    required: true
});
  
const ageValidator = new Validator('age', {
    type: Number,
    required: true
});
  
const weightValidator = new Validator('weight', {
    type: String,
});

const dirtValidator = new Validator('dirt', {
    type: Boolean,
});


const dog = {
    name: 'spot',
    age: '5',
    weight: '20 lbs'
};

const cat = {
    name: 'garfield',
    age: 'garfieldAge',
    weight: '20 lbs',
};

const bunny = {
    age: [2, 3],
    weight: '10 lbs', 
};

const bird = {
    name: 'Sylvester',
    age: 6
};

const dirt = {
    name: 'dirt',
    dirt: 15,
};


describe('validator module', () => {

    //1
    it('will throw error if the object type is required and the field is not there', () => {
        expect(() => nameValidator.validate(bunny)).toThrowErrorMatchingSnapshot();
    });

    //2 
    it('properly tells if an object is required but the wrong type', () => {
        expect(() => ageValidator.validate(bunny)).toThrowErrorMatchingSnapshot();
        expect(() => ageValidator.validate(cat)).toThrowErrorMatchingSnapshot();
    });


    //3
    it('properly tells if a object type is valid and is there if required', () => {
        expect(nameValidator.validate(dog)).toEqual('spot');
        expect(ageValidator.validate(dog)).toEqual(5);
    });

    //4 
    it('properly can tell if the field is not required and it is missing', () => {
        expect(weightValidator.validate(bird)).toBeNull();
    });
 
    //5
    it('will throw an error if the field is not required, it is there and is is the wrong type', () => {
        expect(() => dirtValidator.validate(dirt)).toThrowErrorMatchingSnapshot();
    });

    //6
    it('can properly tell if an object is not required, there and the right type', () => {
        expect(weightValidator.validate(dog)).toEqual('20 lbs');
    });

    



    

});
