// methods should match whats in MultiplicationService.d.ts
class MultiplyHandler {
  constructor() {
    console.log('multiply handler initialized!');
  }
  multiply(n1, n2) {
    console.log('multiplying', n1, n2);
    return n1 * n2;
  }
  multiply(n1, n2, cb) {
    console.log('multiplying with callback', n1, n2);

    return cb(null, n1 * n2);
  }
}

module.exports = {
  MultiplyHandler,
};
