const Ajv = require('ajv');

const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    mobileNo: {
      type: 'integer',
    },
    email: {
      type: 'string',
    },
    age: { type: 'integer' },
  },
  required: ['name', 'mobileNo', 'email', 'age'],
  additionalProperties: false,
// if we write additionalProperties as false then we won't insert the new data
};
// ajv.compile ==> compiles the schemas into functions
const validate = ajv.compile(schema);

const data = {
  name: 'abc',
  mobileNo: 538476,
  email: 'abc@gmail.com',
  age: 30,
};

const valid = validate(data);
if (!valid) {
  console.log(validate.errors);
}
