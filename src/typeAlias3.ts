type User = {
    readonly _id : string,
    name : string,
    email : string,
    isActive : boolean

    //This is optional property
    credcardDetails? : number
}

let myUser : User = {
    _id : "1245",
    name : "Suraj",
    email : "suraj.s@s.com",
    isActive : true
}



// Cannot assign to '_id' because it is a read-only property.
//myUser._id = "1001"

//Can assign to 'name' because it is not a read-only property.
myUser.name = "Sagar"
