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
      this.MAX_RETRY_CONNECT = 3

      this._connect()
    } else {
      throw new TypeError(`thrift connection url, ${addr}, is invalid`)
    }
  }

  _connect() {
    this.conn = thrift.createConnection(this.host, this.port, { transport, protocol })
    this.client = thrift.createClient(this.type, this.conn)
    this.conn.on('error', log)
    this.conn.once('close', () => {
      if (this.MAX_RETRY_CONNECT === 0) {
        return
      }
      this.MAX_RETRY_CONNECT--
      log('server reconnect %s:%d...left %d times', this.host, this.port, this.MAX_RETRY_CONNECT)
      setTimeout(() => {
        this._connect()
      }, 1000)
    })
  }
}

module.exports = ThriftConn
