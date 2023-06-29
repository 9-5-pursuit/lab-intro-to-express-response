
// DEPENDENCIES
const app = require('../app.js')
const request = require('supertest')


describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });
});

describe("Test the magic8 path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/magic8")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});
