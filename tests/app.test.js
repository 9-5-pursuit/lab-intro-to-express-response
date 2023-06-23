const request = require("supertest");

const app = require("../app")
// it("testing to see if jest works", ()=>{
//     expect(1).toBe(1);
// });

describe("test the root path", ()=> {
    test("it should response the GET method", ()=>{
        return request(app)
            .get("/")
            .then((response) =>{
               console.log(response);
               expect(response.statusCode).toBe(418)
            })
    })

    test("it should return 'I'll be back' ", () => {
        return request(app)
            .get("/terminator")
            .then((response) =>{
               console.log(response);
               expect(response.text).toBe("I'll be back")
            })
    })
})