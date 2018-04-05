import Enums from '../common/enums.js';
import Circle from '../common/circle.js';
import Race from '../models/race.js';
import Sex from './sex.js';
import uuidv4 from 'uuid/v4';

class Evolito{
    constructor(name, race, maxSize){
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

        this.ctx = null;
    }

    get OffsetX(){
        return  this.elementWidth;
    }

    get OffsetY(){
        return this.elementHeight;
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

    Move(limitX, limitY){
        this.limitX = limitX || 0;
        this.limitY = limitY || 0;

        let currXDir = Enums.Directions.X.Right;
        let currYDir = Enums.Directions.Y.Down;

        let offx = (this.elementWidth * 2) || 0;
        let offy = (this.elementHeight * 2) || 0;
        this.xcoord = Math.floor((Math.random() * (limitX - offx)) + 1);
        this.ycoord = Math.floor((Math.random() * (limitY - offy)) + 1);
    }
}

export default Evolito