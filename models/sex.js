import Enums from '../common/enums.js'

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

export default Sex