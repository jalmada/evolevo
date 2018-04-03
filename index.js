import World from './models/world.js';
import Male from './models/male.js';
import Female from './models/female.js';
import Race from './models/race.js';
import Enums from './common/enums.js';

var world = new World('evolevo', 'data');
var male = new Male("Adam", new Race(Enums.Race.Solains));
var female = new Female("Eve", new Race(Enums.Race.Defaultonian));

world.AddEvolito(male);
world.AddEvolito(female);

world.Run();