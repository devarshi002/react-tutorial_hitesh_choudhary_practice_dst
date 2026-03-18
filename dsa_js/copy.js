//shallow copy

import { json } from "node:stream/consumers";

const obj ={a:1, b:{c:2}}

const co = {...obj};

co.b.c = 10;

console.log(obj.b.c);


//deep copy

const obj2 = {a:1, b:{c:2}};

const col = JSON.parse(JSON.stringify(obj2));

col.b.c=10;

console.log(obj2.b.c);
