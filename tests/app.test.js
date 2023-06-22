//need to require supertest and app.js
const request = require("supertest");

//when it is a file we created, must add the relative path to the file. It is based on the current file
const app = require("../app.js");
// it("testing to see if jest works", () => {
//   expect(1).toBe(123);
// });

describe("Test the root path", () => {
  test("it should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });

  //   test("it should return 'I'll be back' ", () => {
  //     return request(app)
  //       .get("/terminator")
  //       .then((response) => {
  //         expect(response.text).toBe("I'll be back");
  //       });
  //   });
});

//IT is a function that takes a string as the first parameter, and a callback function as the second parameter.
//Inside our callback, we'll use two functions changed together: expect() and toBe()

// it("Testing to see if supertest works", () => {
//   expect(1).toBe(1);
// });
