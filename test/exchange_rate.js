const expect = require('chai').expect;
const exchange = require('../lib/exchange');
process.env.NODE_ENV = 'test';

describe('exchange', () => {
    it('#getRate returns current AUD', (done) => {
        return exchange.getRate().then(res => {
            // console.log('err', err);
            // console.log('res', res);
            // console.log('body', body);
            // const data = JSON.parse(body);
        
            expect(res.base).to.equal('AUD');
            expect(res).to.have.property('rates');
            done();
        });
    });

    it('#amountToOther', () => {
        return exchange.amountToOther(100, 'GBP').then(
            result => {
                return exchange.getRate().then(res => {
                expect(result).to.not.equal(100);
                expect(result).to.equal(100 * res.rates['GBP']);
            });
        });
    });

});

// callbacks
// exchange.getRate((err, res, body) => {
//   return body;
// });


// // promise
// const getRate = new Promise((resolve, reject) => {
//   if (err) return reject(err);
//   return resolve('howdy');
// });

// return exchange.getRate()
//   .then(res => {
//     return res; // res == "howdy"
//   })
//   .catch(err => {
//     console.log(err);
//   });


// // async/await
// const rate = await exchange.getRate();
// if (!rate) throw err;
// return rate;

// // generators/co
// const rate = yield exchange.getRate();
// if (!rate) throw err;
// return rate;
