var superagent = require('superagent');
var expect = require('expect.js');
var should = require('should');

//Hoost url
var host_url='http://localhost:8000';
//Include server or and run it here or just run test on default  running server
var server = require('../server');

describe('API Tests:- ', function(){
  //Start server
  before(function () {
    app = server.listen(8000);
  });
  //Close server
  after(function () {
    app.close();
  });
  
  //Start test for api end point
  it('/get_outages API Tests ', function(done){
    superagent.get(host_url+'/get_outages')
    .send({
        //Auth if any
      })
    .end(function(error, res){
      //Error should be null
      expect(error).to.eql(null);
      //Response body should be there
      expect(res).to.exist;
      //Response status should be 200
      expect(res.status).to.equal(200);
      //Return array elngth  should be 1
      expect(res.body.length).to.equal(1);
     //Check array
      expect(res.body).to.be.an('array');
       //Check keys
      expect(res.body[0]).to.have.key(['id','name','time','ticket']);
      //Other assertion cases can be added as well
      done();
    })
  })

});