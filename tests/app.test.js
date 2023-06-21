const request = require('supertest')
const app = require('../app.js')

it('Testing to see if supertest works', () => {
    expect(1).toBe(1)
})

describe("Test the root path", () => {
    test("It should response the GET method", () => {
        return request(app)
            .get("/terminator")
            .then(response => {
                expect(response.text).toBe(`I'll be back`)
            })
    })
})