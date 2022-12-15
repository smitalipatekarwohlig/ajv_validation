// AJV takes a schema for JSON and converts it into javascript code that validates data according to the schema
//AJV generates code to turn JSON schemas into super-fast validation functions
const { default: Ajv } = require('ajv');
const AJV = require('ajv');
const ajv = new Ajv();

const schema = {
    type : 'object',
    properties : {
        name : {type : "string"},
        age : {type : "integer"}
    },
    required : ["name"],
    additionalProperties : false
}

const validate = ajv.compile(schema);

const data ={
    name : "abc",
    age : 25
}

const valid = validate(data)
if(!valid) console.log(validate.errors);