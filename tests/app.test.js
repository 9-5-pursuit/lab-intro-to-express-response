// DEPENDENCIES
const app = require("../app.js");

const magic8Responses = require("../data.js");
console.log(magic8Responses);

const supertest = require("supertest");

it("Testing to see if supertest works", () => {
  expect(1).toBe(1);
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    const request = supertest(app);
    return request.get("/").then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test("It should only show one string from the array", () => {
    const request = supertest(app);
    return request.get("/magic8").then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toContain("text/html");

      const responseTextWithoutTags = response.text.replace(
        /<\/?[^>]+(>|$)/g,
        ""
      );
      const responseTextContent = responseTextWithoutTags.trim();

      expect(magic8Responses.includes(responseTextContent)).toBe(true);
    });
  });
});

// describe("/magic8 able to get only one string from the array", () => {
//
// });
