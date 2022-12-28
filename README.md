# commands

```bash
// generate any of the supported languages
thrift --gen java multiply.thrift
thrift --gen py multiply.thrift

// find out what configs you can set per language using 'thrift -help'
// this is the one i used to generate nodejs code that includes namespacing
thrift --gen js:node,ts,with_ns,es6 multiply.thrift
```

# understandings

thrift is codegen + boilerplate code for transporting data

1. write thrift idl (e.g. in multiply.thrift), defining interface
2. generate code for the language of your choice (e.g. py, js)
3. the generated code consists of two things:
   - client: for use in clients
   - processor: for use in servers

## using Client

- install thrift lib in your language using your language's package manager
- import the service that you created. usually this would be generated from the .thrift file
  - `const service = require('./gen-nodejs/MultiplicationService.js');`
- define what your connection looks like, where it is etc (host, port, protocol, transport).
  - protocol and transport are classes you can import from the thrift lib. they should match what you decided for the server
  - `const connection = thrift.createConnection(host, port, { protocol, transport });`
- create a client to interact with your server
  - `const client = thrift.createClient(service.Client, connection);`
- based on what was defined in the .thrift file, you can now use the methods to do interact with the server!

## using Processor

- the server takes the generated Processor, pairs it with your manually written code for handling all the methods, as well as the options e.g. protocol and transport
  - refer to 'write a handler' to find out what a handler needs to do
  - `const server = createServer(service.Processor, handler, { protocol, transport });`
- then, start the server
  - `server.list('<PORT>')`;

### write a handler

- what you defined in your .thrift file, now you have to write what they do. in order to match what you defined in the thrift file, you have to match all the methods and inputs.
- for js, you can generate a ts file to describe the intended interface with types, and not have to wade through prototype code to find out what you need to write

## sharing code with others

the entire point of thrift (and protobuf) is to have a standardized contract/api/interface where everyone in the team just needs to know the thrift file in order to be able to use / write handlers for the given function/service.

to share with someone else, if it is:

- a client:
  - all you have to share is the thrift file.
  - the user can generate code for whatever supported language the user wants and connect to the server
- a server:
  - because the dev also write the handler for the given service, the generated and implemented project has to be shared.

## references

- most helpful tutorial (ruby): https://medium.com/@goyal.1234rahul/my-first-apache-thrift-service-6be3e8bf650f
