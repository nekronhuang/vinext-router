require('babel-core/register')({
  ignore: /thrift_desc/,
  presets: ['stage-3', 'es2015'],
})

require('babel-polyfill')

const thrift = require('thrift')

const User = require('../thrift_desc/gen-nodejs/UserService')
// const UserType = require('./thrift_desc/gen-nodejs/user_types')

const getUser = () => {
  const data = {
    _id: 'popqweuiqwie13123',
    email: 'miracle@gmail.com',
    role: 'admin',
    hashedPassword: 'fuckteamog',
    provider: '982',
    salt: '17812',
    status: 1,
    policyAgreed: true,
    activationCode: 'fuckteamsecret',
    username: 'miracle9000',
    phone: '138781236651',
    password: 'oioqwe',
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const rand = Math.random()

      data.location = rand
      if (rand > 0.5) {
        resolve({
          status: 200,
          msg: data,
        })
      } else {
        resolve({
          status: 401,
        })
      }
    }, 300)
  })
}

const api = { getUser }
const userServer = thrift.createServer(User, api)

userServer.listen(9090)
