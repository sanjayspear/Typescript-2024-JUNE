
function createUser(user: { name: string, isPaid: boolean }): { name: string, isPaid: boolean } {
    // Use the entire user object
    return user;
}

//TS Object
const User = {
    name: "Sanjay",
    isPaid: true
}

console.log(createUser(User))

let userDetails = createUser(User);

console.log("User Name: "+userDetails.name);
console.log("User Paid: "+userDetails.isPaid);


type myUser = {
    name: string,
    email: string,
    isPaid: boolean
}

function getUser(user: myUser) : myUser {
    return user;
}

console.log(getUser({name: "Sagar", email: "s@s.com", isPaid: true}));