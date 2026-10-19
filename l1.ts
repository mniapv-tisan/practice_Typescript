// interface in classes

interface Person {
    name : string;
    age:number;
    greet(phrase:string):void;
}

class person implements Person {
    name : string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    greet(phrase: string){
        console.log(phrase);
    }
}

let p1 = new person("apoorva",22);
p1.greet("Hello world");