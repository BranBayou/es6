import { create as createPub } from "publication.js";

function printDetails(pub,URL) {
pub.print();
console.log(URL);
}
export function create(title,author,pubDate,URL) {
var pub = createPub(title,author,pubDate);
var publicAPI = {
print() {
printDetails(pub,URL);
}
};
return publicAPI;
}