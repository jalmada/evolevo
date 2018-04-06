import World from './models/world.js';
import Male from './models/male.js';
import Female from './models/female.js';
import Race from './models/race.js';
import Enums from './common/enums.js';

var world = new World('evolevo', 'data');
var male = new Male("Adam", new Race(Enums.Race.Solains));
var female = new Female("Eve", new Race(Enums.Race.Defaultonian));
var male1 = new Male("Cain", new Race(Enums.Race.Enana));
var female2 = new Female("Able", new Race(Enums.Race.Ichini));
var male3 = new Male("Popito", new Race(Enums.Race.Midert));

world.AddEvolito(male);
world.AddEvolito(female);
world.AddEvolito(male1);
world.AddEvolito(female2);
world.AddEvolito(male3);

world.Run();