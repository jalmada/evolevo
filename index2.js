import MovementEngine from './common/MovementEngine.js';

var movementEngine = new MovementEngine();

var newPosition = movementEngine.GetNextPosition(
    {x:10, y:10},
    {x:21, y:21},
    {x:1, y:1},
    {x:10, y:10},
    {x:9999, y:9999}
);

console.log(`X: ${newPosition.x}, Y:${newPosition.y}`);