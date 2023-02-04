## Modular Backend Architecture

### Get started

```
git clone
npm i
npm start
```

### About

looking at the concept of separating our Api from any framework we may choose.

`createRouter(router);` could take in any router.

For example we currently use express so we pass the `const router = Router();` into the `createRouter` function.

This function also houses the creation of our api and returns it to the framework to use via helper functions.

This pattern also enables easy unit testing of each route.

The `repo.ts` files is where we create our api return values.

### Tech stack

ts node dev, express, ts-jest

### routes

1. api/signin
2. api/verify
3. api/products
4. /api

### Automated tests

basic tests for routes using `superTest`
