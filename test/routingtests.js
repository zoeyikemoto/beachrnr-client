const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const axios = require('axios');

chai.use(chaiHttp);

const server = require('../server/index');


describe('inventory service', function() {
  describe('#get()', function() {

    xit('should return 200 if an id match is found', function(done) {
      chai.request(server)
        .get('/api/rooms/2912000')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
    xit('should return the listing object with the matching id', function(done) {
      chai.request(server)
        .get('/api/rooms/2912000')
        .end(function (err, res) {
          expect(res.unitName).to.equal("Beautiful Guest Suite for 2");
          done();
        });
    });
    xit('should return 404 if there is no id match', function(done) {
      chai.request(server)
        .get('/api/rooms/1337')
        .end(function (err, res) {
          expect(err).to.have.status(404);
          done();
        });
    });
  });
});