import Enums from '../common/enums.js';
import Evolito from './evolito.js';
import Sex from './sex.js';


class Male extends Evolito{
    constructor(name, race, maxSize, speed, dirx, diry){
        super(name, race, maxSize, speed, dirx, diry);        

        this.sex = new Sex(Enums.Sex.Male);
    }

    Reproduce(partner, mutacoef){
        if(partner.sex == Enums.Sex.Female){
            partner.GetPreagnant();
        }
    }
}

export default Male