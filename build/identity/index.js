"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIdentityApi = void 0;
const api_1 = require("./api");
function createIdentityApi() {
    return {
        api: (0, api_1.createApi)(),
    };
}
exports.createIdentityApi = createIdentityApi;
