const { expect } = require("chai");
const supertest = require("supertest");

const app = require("../app");
const config = require("../config")
describe('Testing the routes', () => {
    it('login route test found', (done) => {
        supertest(app)
            .get('/oauth/login')
            .expect(302)
            .end((err, res) => {
                expect(err).to.be.equal(null);
                expect(err).to.equal(null);
                expect(res.headers['location']).to.match(/^https:\/\/github.com\/login\/oauth\/authorize/);
                done(err)
            })
    })
    
     
    it('callback route test unauthorized access', (done) => {
        supertest(app)
            .get('/oauth/callback')
            .expect(401)
            .end((err, res) => {
                expect(err).to.be.equal(null);
                //expect(err).to.equal(null);
                //expect(res.body).to.be.an("object");
                // expect(res.body.STATUS).to.equal("OK");
                //expect(res.body.data.length).to.be.equal(3);
                done(err)
            })
    })
})

