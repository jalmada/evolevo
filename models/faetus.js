import Evolito from './evolito.js';

class Faetus{
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

export default Faetus