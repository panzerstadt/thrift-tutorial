const { createServer, TBufferedTransport, TBinaryProtocol } = require('thrift');
const service = require('./gen-nodejs/MultiplicationService.js'); // this is a service handler
const { MultiplyHandler } = require('./handler.js'); // manually written

const PORT = 9999;

module.exports = {
  port: PORT,
  start_server: () => {
    // console.log('what is service', service);
    const handler = new MultiplyHandler();

    const transport = TBufferedTransport;
    const protocol = TBinaryProtocol;

    const server = createServer(service.Processor, handler, {
      protocol,
      transport,
    });
    server.listen(PORT);
  },
};
