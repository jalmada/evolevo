import Enums from '../common/enums.js';
import Evolito from './evolito.js';
import Sex from './sex.js';


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

export default Male