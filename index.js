import World from './models/world.js';
import Male from './models/male.js';
import Female from './models/female.js';
import Race from './models/race.js';
import Enums from './common/enums.js';

var speedrange = document.getElementById('speedrange');
var speedSpan = document.getElementById('currentSpeed');
var pauseButton = document.getElementById('pauseButton');
var addEvolitoButton = document.getElementById('addevolito');

var world = new World('evolevo', 'data');
var male = new Male("Adam", new Race(Enums.Race.Solains), null, null, 1, 1);
var male2 = new Male("Adam", new Race(Enums.Race.Solains), null, null, -1, 1);
var female = new Female("Eve", new Race(Enums.Race.Defaultonian), null, null, -1, -1);

world.AddEvolito(male,10,0);
world.AddEvolito(male2,215,0);
world.AddEvolito(female,210,200);


world.Start();

speedrange.oninput = updateSpeed;
speedrange.onchange = updateSpeed;
pauseButton.onclick = toggleWorld;
addEvolitoButton.onclick = addEvolito;


function addEvolito(){
    var name = document.getElementById("name").value;
    var sexElem = document.getElementsByName("sex");
    var sex = '';
    var raceElem = document.getElementsByName("race");
    var race = '';

    for(var i = 0; i < sexElem.length; i++){
        if(sexElem[i].checked){
            sex = sexElem[i].value;
            break;
        }
    }

    for(var i = 0; i < raceElem.length; i++){
        if(raceElem[i].checked){
            race = parseInt(raceElem[i].value);
            break;
        }
    }

    if(!name || !sex || !race){
        alert("Please fill all the required data.");
        return;
    }
    if(sex == "0"){
        world.AddEvolito(new Female(name, new Race(race)))
    } else if (sex == "1"){
        world.AddEvolito(new Male(name, new Race(race)))        
    }
}

function toggleWorld(){
    if(pauseButton.innerHTML == "Pause"){
        pauseButton.innerHTML = "Play";
        world.Stop();
    } else {
        pauseButton.innerHTML = "Pause";
        world.Start();
    }
}

function updateSpeed(e){
    speedSpan.innerHTML = speedrange.value;
    world.Speed = speedrange.value;    
    if(speedrange.value > 0 && !world.IsRunning){
        world.Start();
    }
}