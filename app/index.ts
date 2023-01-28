import { createIdentityApi } from "../identity";

const identity = createIdentityApi();

console.log(identity.api.signIn());
console.log(identity.api.verify());
