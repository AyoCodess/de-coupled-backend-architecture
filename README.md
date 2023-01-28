# De-coupled Architecture

## About

looking at the concept of separating our Api from the framework.

`createRouter(router)` could take in any router, for example we currently use express so we pass the`const app = express()` into the function which would then help us create our api and use them if we wished, anywhere in our application.

## Tech stack

ts node dev, express, ts-jest

## routes

1. /signin
2. /verify
3. /products

## Automated tests
