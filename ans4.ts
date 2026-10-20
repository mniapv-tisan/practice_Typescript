function delayFunction(fun:() => void):void{
    setTimeout(fun,1000);
}

function greet():void{
    console.log("I am greet function");
}

delayFunction(greet)