const assert = require('assert');
const axios = require('axios');
const URL = 'http://localhost:3000'

describe('/ GET Hello word', function() {
    it('Should return hello word ', function(done) {
        axios.get(URL)
        .then(function ({ data }) {
          // handle success
          done()
        })
        .catch(function (error) {
          // handle error
          done(error)
        })
    });
});

describe('/ POST Suma', function() {
  it('Should return status ', function(done) {
    const params = { "num1": 1, "num2": 2, "num3": 3 }
    axios.post(URL + '/suma', params )
    .then(function (data) {
      // handle success
      console.log(' Status: ' + data.status)
      console.log(' Message:  ' + data.data.message)
      done()
    })
    .catch(function (error) {
      done(error)
    })
  });
});