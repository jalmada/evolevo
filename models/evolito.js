import Enums from '../common/enums.js';

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
    }

    Conception(father, mother, mutacoef){
        this.father = father;
        this.mother = mother;

        this.mutacoef = mutacoef;
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
        this.r = 255;
        this.g = 255;
        this.b = 255;
    }

    GetRaceColor(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

}

