class MovementEngine {

    /* postion: object with x and y properties
    /  speed: amount of units in x and y to move
    /  limits: maximun position for x and y
    /  initialDirection: direction in x could be left (-1), static (0), right (1),
    /       and in y could be up (-1), static (0), down (1)
    */
    GetNextPosition(position, speed, direction, limits){
        var postion = position || {x: 0, y:0};  
        var speed = speed || {x:1, y:1};
        var direction = direction || {x: 0, y: 0};
        var limits = limits || {x:0, y:0};

        if(position.x == undefined || position.y == undefined){
            throw "Invalid position";
        }

        if(speed.x == undefined || speed.y == undefined){
            throw "Invalid speed";
        }

        if(direction.x == undefined || direction.y == undefined){
            throw "Invalid direction";
        }

        if(limits.x == undefined || limits.y == undefined){
            throw "Invalid limits";
        }

        var newPosition = position;
        var newDirection = direction;

        newPosition.x += (speed.x * direction.x);
        newPosition.y += (speed.y * direction.y);

        
        while(newPosition.x > limits.x || newPosition.x < 0){
            let limitx = newPosition.x < 0 ? 0 : limits.x;
            newPosition.x = limitx + ((newPosition.x - limitx) * -1)
            newDirection.x = direction.x * -1;
        }

        while(newPosition.y > limits.y || newPosition.y < 0){
            let limity = newPosition.y < 0 ? 0 : limits.y;            
            newPosition.y = limity + ((newPosition.y - limity) * -1)
            newDirection.y = direction.y * -1;
        }
        
        return {position: newPosition, direction: newDirection};
    }
}

export default MovementEngine