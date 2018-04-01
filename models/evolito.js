import Enums from '../common/enums.js';
import Circle from '../common/circle.js';

class Evolito{
    constructor(name, race){
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
        this.elementHeight = 10;
        this.elementWidth = 10;
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

    Spawn(ctx, coord){
        this.xcoord = coord.x || 0;
        this.ycoord = coord.y || 0;

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
            var body = new Circle(this.xcoord, this.ycoord, this.elementWidth, this.elementHeight, this.lineWidth);
            var skin = new Circle(
                  this.xcoord + (this.lineWidth * 2)
                , this.ycoord + (this.lineWidth * 2)
                , this.elementWidth - (this.lineWidth * 2)
                , this.elementHeight - (this.lineWidth * 2)
                , this.lineWidth * 2);
            body.paint(this.ctx, this.borderColor, sexColor);
            skin.paint(this.ctx, raceColor, sexColor);
        }
    }
}

class Male extends Evolito{
    constructor(name, race){
        super(name, race);

        this.sex = new Sex(Enums.Sex.Male);
    }

    Reproduce(partner, mutacoef){
        if(partner.sex == Enums.Sex.Female){
            partner.GetPreagnant();
        }
    }
}

class Female extends Evolito{
    constructor(name, race){
        super(name, race);

        this.sex = new Sex(Enums.Sex.Female);
        this.IsPreagnant = false;
        this.preagnancyTimeLeft = 0;
        this.fetus = null;

    }

    GetPreagnant(partner){
        this.IsPreagnant = true;
        this.preagnancyTimeLeft = 9;
        this.fetus = new Fetus();
        this.fetus.Conception(partner, this, 0);
        this.lineWidth = this.lineWidth * 2;
        this.Erase();
        this.PaintBody();
    }

    GiveBirth(){
        this.fetus.BecomeEvolito();
    }
}

class Fetus{
    constructor(){
        this.father = null;
        this.mother = null;
        this.mutacoef = 0;
    }

    Conception(father, mother, mutacoef){
        this.father = father;
        this.mother = mother;

        this.mutacoef = mutacoef;
    }
    
    BecomeEvolito(){
        return new Evolito();
    }
}

class Race {
    constructor(r,g,b)
    {
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
    }

    get Color(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}

class Sex{
    constructor(sex){
        this.sex = sex;

        switch(this.sex){
            case Enums.Sex.Male:
                this.r = 137;
                this.g = 207;
                this.b = 240;
                break;
            case Enums.Sex.Female:
                this.r = 255;
                this.g = 113;
                this.b = 181;
                break;
            default:
                this.r = 255;
                this.g = 255;
                this.b = 255;
        }
    }

    get Color(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;        
    }
}

export default Evolito
export {Male}
export {Female}
export {Race}