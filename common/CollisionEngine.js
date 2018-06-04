class CollisionEngine {
    DetectCollisionsAndGetNewPositions(positions, limits){
        
        if(limits.x == undefined || limits.y == undefined){
            throw "Invalid limits";
        }

        if(!Array.isArray(positions)){
            throw "Invalid positions Array";            
        }
        
        if(!positions){
            throw "Invalid positions Array";
        }
        ///PENDIND POSITIAINS WALLS
        
        for(let i; i < positions.length; i++){
            let pos = positions[i].p;
            let e = positions[i].e;
            let newPosition = {x: pos.x, y: pos.y};
            
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

            pos = newPosition;

        }
    }
}

export default CollisionEngine