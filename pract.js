// Arrays are used for ordered elements. In JSON, each element in an array may be of a different type

const Ajv = require('ajv');

const ajv = new Ajv();

// items schema valid for every item in the array .eg. number,string,etc.

const schema = {
  type: 'array',
  items: [{
    type: 'string',
  },
  {
    type: 'integer',
  },
  {
    type: 'boolean',
  },
  ],
  additionalItems: false,
};

const validate = ajv.compile(schema);

const data = {
  items: ['abcd', 367, true],
};

const valid = validate(data);
if (!valid) {
  console.log(validate.errors);
}
