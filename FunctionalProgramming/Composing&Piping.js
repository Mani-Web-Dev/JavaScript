
import { compose, pipe } from "lodash/fp";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`

var result = wrapInDiv(trim(input));
console.log(result);



const transform = pipe(trim, toLowerCase, wrapInDiv);

transform(input); 