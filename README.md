# De-coupled Architecture

## About

looking at the concept of separating our Api from any framework we may choose.

`createRouter(router);` could take in any router.

For example we currently use express so we pass the `const router = Router();` into the `createRouter` function. This allows us create an api that is not coupled with the framework.

`repo.ts` is where we create our framework specific functions and import them into their wrappers.

## Tech stack

ts node dev, express, ts-jest

## routes

1. api/signin
2. api/verify
3. api/products
4. /

## Automated tests

basic tests for routes using `superTest`
