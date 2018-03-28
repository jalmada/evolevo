class World {

    constructor(containerId){
        
        this.containerId = containerId;
        this.container = document.getElementById(this.containerId);
        this.evolitos = [];
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this._initCanvas();
    }

    _initCanvas(){
            
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;

        
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }

    draw(width, height, color) {
            
        this.canvasWidth = width || this.canvasWidth;
        this.canvasHeight = height || this.canvasHeight;
        this.Color = color || this.Color;

        if(!this.canvas){
            this._initCanvas();
        }

        if (this.canvas.getContext) {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    SpawnEvolito(evolito){
        if(evolito.Spawn){
            evolito.Spawn(this.ctx);
            this.evolitos.push(evolito);
        }
    }
}

export default World
