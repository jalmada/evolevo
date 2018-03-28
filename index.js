import World from './models/world.js';
import {Male} from './models/evolito.js';

var world = new World('evolevo');
var male = new Male();

world.draw();
world.SpawnEvolito(male);
