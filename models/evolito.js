import Enums from '../common/enums.js';
import Circle from '../common/circle.js';
import Race from '../models/race.js';
import Sex from './sex.js';
import uuidv4 from 'uuid/v4';

class Evolito{
    constructor(name, race, maxSize, speed, dirx, diry){
        this.id = uuidv4();
        this.name = name || "Evolito D. Fault";
        this.age = 0;
        this.race = race || new Race();
        this.father = null;
        this.mother = null;
        this.children = [];
        this.mutacoef = 0;
        this.partners = [];        
        this.xcoord = 0;
        this.ycoord = 0;
        this.elementHeight = 20;
        this.elementWidth = 20;
        this.maxSize = maxSize || 10
        this.lineWidth = 1;
        this.sex = new Sex(Enums.Sex.None);
        this.borderColor = "rgb(0,0,0)";
        this.speed = speed || 5;
        this.isColliding = false;
        this.currXDir = dirx != undefined ? dirx : 1;
        this.currYDir = diry != undefined ? diry : 1;
        this.fixDirection = dirx != undefined && diry != undefined;
        this.directionSteps = 0;
        this.collidingWith = [];

        this.ctx = null;
    }


    get x(){
        return this.xcoord;
    }

    get y(){
        return this.ycoord;
    }

    get radius(){
        return this.elementWidth;
    }

    get width(){
        return this.elementWidth;
    }

    get height(){
        return this.elementHeight;
    }

    get OffsetX(){
        return  this.elementWidth * 2;
    }

    get OffsetY(){
        return this.elementHeight * 2;
    }

    get Width(){
        return this.elementWidth;
    }

    get Height(){
        return this.elementHeight;
    }

    Spawn(ctx, x, y){
        this.xcoord = x || this.xcoord;
        this.ycoord = y || this.ycoord;

        this.PaintBody(ctx);
    }

    Erase(ctx){
        this.ctx = this.ctx || ctx;
        this.PaintBody(this.ctx, "rgb(0,0,0)");
    }

    IsCollidingWith(id){
        var iscolliding = false;

        for(let x = 0; x < this.collidingWith.length; x++){
            if(this.collidingWith[x] == id){
                this.iscolliding = true;
                break;
            }
        }

        return iscolliding;
    }

    PaintBody(ctx, c, s){
        this.ctx = this.ctx || ctx;        
        let raceColor = c || this.race.Color;
        let sexColor = s || this.sex.Color;

        if(this.ctx){
            var skin = new Circle(this.xcoord, this.ycoord, this.elementWidth, this.elementHeight, this.lineWidth);
            var body = new Circle(
                  this.xcoord + (this.lineWidth * 10)
                , this.ycoord + (this.lineWidth * 10)
                , this.elementWidth - (this.lineWidth * 10)
                , this.elementHeight - (this.lineWidth * 10)
                , this.lineWidth);
            skin.paint(this.ctx, this.borderColor, this.race.Color);
            body.paint(this.ctx, this.borderColor, sexColor);
        }
    }

    Move(limitX, limitY, speed, speedMult){
        this.speed = speed || this.speed;
        speedMult = speedMult || 1;

        this.limitX = limitX || 0;
        this.limitY = limitY || 0;

        if(this.directionSteps == 0){
            this.directionSteps = this.GetRandomNoSteps();//this.directionSteps || 10;            
            this.currXDir = !this.fixDirection ? this.GetRandomDirection() : this.currXDir;
            this.currYDir = !this.fixDirection ? this.GetRandomDirection() : this.currYDir;
        }
        this.directionSteps--;

        let nextPositionX = this.xcoord + (this.speed * speedMult * this.currXDir);
        let nextPositionY = this.ycoord + (this.speed * speedMult * this.currYDir);

        let offx = (this.elementWidth * 2) || 0;
        let offy = (this.elementHeight * 2) || 0;

        if(nextPositionX < 0 || nextPositionX > this.limitX - offx){
            this.currXDir = this.currXDir * -1;
        }

        if(nextPositionY < 0 || nextPositionY > this.limitY - offx){
            this.currYDir = this.currYDir * -1;
        }

        this.xcoord = nextPositionX > (this.limitX - offx) ? this.xcoord : nextPositionX;
        this.ycoord = nextPositionY > (this.limitY - offy) ? this.ycoord : nextPositionY;
        
    }

    GetRandomDirection(){
        return Math.floor(Math.random() * (2 - (-1)) -1);
    }

    GetRandomNoSteps(){
        return Math.floor(Math.random() * (50)) + 1;
    }
}

export default Evolito