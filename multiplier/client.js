// by right this would be in a separate service, somewhere else. can even be some other language

const thrift = require('thrift');
const { port } = require('./server');
const service = require('./gen-nodejs/MultiplicationService.js'); // usually this would be generated(?) from the .thrift file
const host = 'localhost';

const start_client = () => {
  console.log('test client', host, port);

  const transport = thrift.TBufferedTransport;
  const protocol = thrift.TBinaryProtocol;

  const connection = thrift.createConnection(host, port, {
    protocol,
    transport,
  });

  const client = thrift.createClient(service.Client, connection);

  client.multiply(3, 3, (err, res) => {
    if (err) {
      console.warn('error', err);
    }
    console.log('NETWORKED multiply service', res);
  });
};

start_client();
