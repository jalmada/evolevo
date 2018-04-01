import World from './models/world.js';
import {Male} from './models/evolito.js';
import {Female} from './models/evolito.js';
import {Race} from './models/evolito.js';

var world = new World('evolevo');
var male = new Male("Adam", new Race(0,0,0));
var female = new Female("Eve", new Race(255,255,255 ));

world.draw();
world.SpawnEvolito(male);
world.SpawnEvolito(female);


for(var x = 0; x < world.evolitos.length; x++){
    let evolito = world.evolitos[x];

    let data = document.createElement("div");
    data.innerHTML = `${evolito.name} X: ${evolito.xcoord}, Y: ${evolito.ycoord}, OffsetX: ${evolito.OffsetX}, OffsetY: ${evolito.OffsetY}`;

    document.getElementById("data").appendChild(data);
}