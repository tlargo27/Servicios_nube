const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

const app = require ('../app');

describe('App', function (){
	it('should serve html on index', (done) => {
		request(app).get('/').expect('Content-Type', /html/).expect(200,done);
	});
});

describe('Sum Number', function (){
	it('should compare number 1 and two', () => {
		expect(5).equal(5);
	});
});