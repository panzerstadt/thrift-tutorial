const { start_server } = require('./server');

start_server();

// const { tutorial } = require('./gen-nodejs/MultiplicationService.js'); // generated
// const { MultiplyHandler } = require('./handler.js'); // manually written
// require('./gen-nodejs/multiply_types');

// // thrift = codegen + server
// // like a LAMP stack code generator, but many languages

// // exports a client and a processor

// // processor does the logic, needs a handler
// const multiplyProcessor = new tutorial.Processor(MultiplyHandler);

// // client communicates to the thrift server
// // clients are the interface where you call stuff
// const multiplier = new tutorial.Client();

// console.log('multiplier!', multiplyProcessor);
