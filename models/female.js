import Enums from '../common/enums.js';
import Evolito from './evolito.js';
import Faetus from './faetus.js';
import Sex from './sex.js';

class Female extends Evolito{
    constructor(name, race, maxSize, speed, dirx, diry){
        super(name, race, maxSize, speed, dirx, diry);

        this.sex = new Sex(Enums.Sex.Female);
        this.IsPreagnant = false;
        this.preagnancyTimeLeft = 0;
        this.fetus = null;

    }

    GetPreagnant(partner){
        this.IsPreagnant = true;
        this.preagnancyTimeLeft = 9;
        this.faetus = new Faetus();
        this.Faetus.Conception(partner, this, 0);
        this.lineWidth = this.lineWidth * 2;
        this.Erase();
        this.PaintBody();
    }

    GiveBirth(){
        this.faetus.BecomeEvolito();
    }
}

export default Female