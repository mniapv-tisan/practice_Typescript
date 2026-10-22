// enums in typescript 

enum Direction {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

function movement(dir:Direction):void{
    if(dir === "up"){
        console.log("Moving up");
    }else if(dir === "down"){
        console.log("Moving down");
    }else if(dir === "left"){
        console.log("Moving right");
    }else{
        console.log("Moving left");
    }
}

movement(Direction.up);