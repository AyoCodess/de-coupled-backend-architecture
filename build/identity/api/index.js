"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApi = void 0;
const sign_in_1 = require("./sign_in");
const verify_1 = require("./verify");
function createApi() {
    return {
        signIn: (0, sign_in_1.createSignIn)(),
        verify: (0, verify_1.createVerify)(),
    };
}
exports.createApi = createApi;
