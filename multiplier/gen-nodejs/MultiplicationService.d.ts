//
// Autogenerated by Thrift Compiler (0.17.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

import thrift = require('thrift');
import Thrift = thrift.Thrift;
import Q = thrift.Q;
import Int64 = require('node-int64');

import ttypes = require('./multiply_types');
declare module tutorial {
  class Client {
      private output: thrift.TTransport;
      private pClass: thrift.TProtocol;
      private _seqid: number;

      constructor(output: thrift.TTransport, pClass: { new(trans: thrift.TTransport): thrift.TProtocol });

      multiply(n1: number, n2: number): Promise<number>;

      multiply(n1: number, n2: number, callback?: (error: void, response: number)=>void): void;
    }

declare class Processor {
    private _handler: object;

    constructor(handler: object);
    process(input: thrift.TProtocol, output: thrift.TProtocol): void;
      process_multiply(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
}
}
