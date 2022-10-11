const jwt = require("jsonwebtoken")
require("dotenv").config()

const payload = {
    id: "6345a6238856934b561a3a46"
}

const {SECRET_KEY} = process.env;

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token)
// console.log(decodeToken);

try {
    const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDVhNjIzODg1NjkzNGI1NjFhM2E0NiIsImlhdCI6MTY2NTUxMDU3NSwiZXhwIjoxNjY1NTE0MTc1fQ.x8ieeM1ke0KRBoB7WZFnc8G7wdzODHu_JM_lfo1CG6W"
    const result = jwt.verify(token, SECRET_KEY)
    console.log(result);
    const result2 = jwt.verify(wrongToken, SECRET_KEY)
} catch (error) {
    console.log(error.message);
}