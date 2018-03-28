import Enums from '../common/enums.js';
import Circle from '../common/circle.js';

class Evolito{
    constructor(){
        this.name = "Evolito D. Fault";
        this.age = 0;
        this.race = new Race();
        this.father = null;
        this.mother = null;
        this.children = [];
        this.mutacoef = 0;
        this.partners = [];        
        this.xcoord = 0;
        this.ycoord = 0;
        this.elementHeight = 10;
        this.elementWidth = 10;
        this.lineWidth = 10;

        this.ctx = null;
    }

    Spawn(ctx){
        this.ctx = ctx;
        if(this.ctx){
            var body = new Circle(this.xcoord, this.ycoord, this.elementWidth, this.elementHeight, this.lineWidth);
            body.paint(this.ctx, this.race.GetRaceColor());
        }
    }
}

class Male extends Evolito{
    constructor(){
        super();

        this.sex = Enums.Sex.Male;
    }

    Reproduce(partner, mutacoef){
        if(partner.sex == Enums.Sex.Female){
            partner.GetPreagnant();
        }
    }
}

class Female extends Evolito{
    constructor(){
        super();

        this.sex = Enums.Sex.Female;
        this.IsPreagnant = false;
        this.preagnancyTimeLeft = 0;
        this.fetus = null;

    }

    GetPreagnant(partner){
        this.IsPreagnant = true;
        this.preagnancyTimeLeft = 9;
        this.fetus = new Fetus();
        this.fetus.Conception(partner, this, 0);
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
    constructor()
    {
        this.r = 0;
        this.g = 255;
        this.b = 255;
    }

    GetRaceColor(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

}

export default Evolito
export {Male}