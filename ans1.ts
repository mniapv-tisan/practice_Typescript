interface User {
    firstName: string;
    lastName: string;
    age:number;
    email:string;
}

function isLegal(user:User):boolean{
    if(user.age > 18){
        return true;
    }
    return false;
}


let user1:User = {
    firstName:"Apoorva",
    lastName:"Verma",
    age:21,
    email:"minapv@gmail.com"
}

console.log(isLegal(user1));