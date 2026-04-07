

import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

let userQuery = "Hello buddy, welcome to code baithak";

let tokens = enc.encode(userQuery)

console.log(tokens);

let output = enc.decode(tokens)

console.log(output);


