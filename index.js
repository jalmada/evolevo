import World from './models/world.js';
import Male from './models/male.js';
import Female from './models/female.js';
import Race from './models/race.js';
import Enums from './common/enums.js';

var world = new World('evolevo');
var male = new Male("Adam", new Race(Enums.Race.Solains));
var female = new Female("Eve", new Race(Enums.Race.Defaultonian));

world.draw();
world.SpawnEvolito(male);
world.SpawnEvolito(female);


for(var x = 0; x < world.evolitos.length; x++){
    let evolito = world.evolitos[x];

    let data = document.createElement("div");
    data.innerHTML = `${evolito.name} X: ${evolito.xcoord}, Y: ${evolito.ycoord}, OffsetX: ${evolito.OffsetX}, OffsetY: ${evolito.OffsetY}`;

    document.getElementById("data").appendChild(data);
}