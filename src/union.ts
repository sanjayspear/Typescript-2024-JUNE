// Union

// Example : 001
let score : number | string = 33; 

score = 45;
score = "45";

// Example : 002
type UserLogin = {
    name : string,
    id : number
}

type adminLogin = {
    adminName : string,
    admin_id : string
}

let sanjay : UserLogin | adminLogin = {name: "Sanjay", id: 101};

sanjay = {adminName : "Sanjay", admin_id : "105"};

//Example: 003
// Function that can accepts mutlple types

function getDBId(id: number | string){
    //  making some api calls
    if(typeof id === "string"){
        id.toLowerCase
        console.log(`DB ID is: ${id}`);
    }else if(typeof id === "number"){
        console.log(`DB ID is: ${id}`);
    }   
}
getDBId(101);
getDBId("201");

const data : (number | string | boolean)[] = [1, 2, "3", "4", true, false];

data.forEach(element => {
    console.log(element)
});
