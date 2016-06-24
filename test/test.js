/* eslint-disable */

const request = require('supertest')
const app = require('../app')

require('should')

describe('ROUTER TEST', () => {
  describe('GET /api/users', () => {
    it('should 200 or 401', (done) => {
      request(app.listen())
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            throw new Error(err)
          }
          if (res.status == 401) {
            res.status.should.equal(401)
            res.body.should.deepEqual({})
          } else {
            res.status.should.equal(200)
            res.body.should.be.type('object').and.have.property('email')
          }
          done()
        })
    })
  })

  describe('GET /NotFound', () => {
    it('should 404', (done) => {
      request(app.listen())
        .get('/NotFound')
        .set('Accept', 'application/text')
        .expect('Content-Type', /text/)
        .end((err, res) => {
          if (err) {
            throw new Error(err)
          }
          res.status.should.equal(404)
          done()
        })
    })
  })
})

/* eslint-enable */
