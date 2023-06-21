//We will need to require both supertest and our app.js files.
const supertest = require("supertest");
//When it is a file we created, we must add the relative path to the file, based on the current file.
const app = require("../app.js");

//it is a function that takes a string as the first parameter, and a callback function as the second parameter.
//Inside our callback, we'll use two functions changed together: expect() and toBe()

it("Testing to see if supertest works", () => {
  expect(1).toBe(1);
});
