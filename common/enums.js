class Enums {

    constructor(){

    }

    static get Sex() {
     return {
            None: -1,
            Female: 0,
            Male: 1
        }
    }

    static get Race() {
        return {
               Defaultonian: -1,
               Solains: 0,
               Blancus: 1,
               Sauro: 2,
               Enana: 3,
               Midert: 4,
               Ichini: 5
           }
    }

    static get Directions() {
        return {
            X : {
                Right: 1,
                Stay: 0,
                Left: -1,
            },
            Y : {
                Up: -1,
                Stay: 0,
                Down: 1
            }
        }
    }
}

export default Enums