"use strict";
let score = 33;
score = 45;
score = "45";
let sanjay = { name: "Sanjay", id: 101 };
sanjay = { adminName: "Sanjay", admin_id: "105" };
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase;
        console.log(`DB ID is: ${id}`);
    }
    else if (typeof id === "number") {
        console.log(`DB ID is: ${id}`);
    }
}
getDBId(101);
getDBId("201");
const data = [1, 2, "3", "4", true, false];
data.forEach(element => {
    console.log(element);
});
