"use strict";
function createUser(user) {
    return user;
}
const User = {
    name: "Sanjay",
    isPaid: true
};
console.log(createUser(User));
let userDetails = createUser(User);
console.log("User Name: " + userDetails.name);
console.log("User Paid: " + userDetails.isPaid);
function getUser(user) {
    return user;
}
console.log(getUser({ name: "Sagar", email: "s@s.com", isPaid: true }));
