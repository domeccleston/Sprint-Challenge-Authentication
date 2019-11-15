const server = require("../api/server");
const supertest = require("supertest");
const request = supertest(server);
const Users = require("../auth/authModel");
const db = require('../database/dbConfig');

describe('jokes endpoint', () => {
    test('user can hit the jokes endpoint and receive a 200', async () => {
        const response = await request.get('/api/jokes/');
        expect(response.status).toBe(200);
    })

    test('user can receive a list of jokes', async () => {
        const response = await request.get('/api/jokes/');
        expect(response.body).toHaveLength(20)
    })
})