// Normal Function
function itsMe() {
  return `Iam A Normal Function`;
}

// Arrow Function
let itsMe1 = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function
console.log(itsMe1()); // Iam A Normal Function
//------------------------------------------------
//Normal Function
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
// Arrow Function
let urlCreate1 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log(urlCreate1("https", "elzero", "org")); // https://www.elzero.org
