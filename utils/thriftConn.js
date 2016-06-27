const thrift = require('thrift')
/* eslint-disable */
const transport = thrift.TBufferedTransport()
const protocol = thrift.TBinaryProtocol()
/* eslint-enable */

const log = require('debug')('vinext:thriftconn')

class ThriftConn {
  constructor(addr, type) {
    if (/\w+:\d+/.test(addr)) {
      const arr = addr.split(':')

      this.host = arr[0]
      this.port = arr[1]
      this.type = type
      this._connect()
    } else {
      throw new TypeError(`thrift connection url, ${addr}, is invalid`)
    }
  }

  _connect() {
    this.conn = thrift.createConnection(this.host, this.port, { transport, protocol })
    this.client = thrift.createClient(this.type, this.conn)
    this.conn.on('error', log)
  }
}

module.exports = ThriftConn
