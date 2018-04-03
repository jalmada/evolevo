import Enums from '../common/enums.js';

class Race {
    constructor(raceType, r,g,b)
    {
        if(!!r && !!g && !!b){
            this.r = r;
            this.g = g;
            this.b = b;
        } else {
        switch(raceType){
            case Enums.Race.Defaultonian:
                this.r = 0;
                this.g = 0;
                this.b = 255;
                break;
            case Enums.Race.Blancus:
                this.r = 255;
                this.g = 224;
                this.b = 189;
                break;
            case Enums.Race.Enana:
                this.r = 255;
                this.g = 125;
                this.b = 10;
                break;
            case Enums.Race.Ichini:
                this.r = 100;
                this.g = 100;
                this.b = 100;
                break;
            case Enums.Race.Midert:
                this.r = 55;
                this.g = 255;
                this.b = 110;
                break;
            case Enums.Race.Sauro:
                this.r = 0;
                this.g = 255;
                this.b = 100;
                break;
            case Enums.Race.Solains:
                this.r = 101;
                this.g = 67;
                this.b = 33;
                break;
            default:
                this.r = 0;
                this.g = 0;
                this.b = 0;          
            }
        }
    }

    get Color(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}

export default Race