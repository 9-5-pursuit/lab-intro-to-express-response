const request = require("supertest");
const app = require("../app");

console.log(app);

it("Testing to see if supertest is working", () => {
  expect(1).toBe(1);
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
