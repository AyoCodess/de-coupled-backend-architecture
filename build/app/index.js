"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../identity/api");
const identity = (0, api_1.createIdentityApi)();
console.log(identity.api.signIn());
console.log(identity.api.verify());
