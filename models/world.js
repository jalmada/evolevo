
class World {

    constructor(containerId, infoContainerId){
        
        this.containerId = containerId;
        this.container = document.getElementById(this.containerId);
        this.evolitos = [];
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.infoContainerId = infoContainerId;
        this.infoContainer = document.getElementById(this.infoContainerId);
        this._initCanvas();
    }

    _initCanvas(){
            
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.canvasWidth || this.container.clientWidth;
        this.canvas.height = this.canvasHeight || this.container.clientHeight;

        
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

        this.evolitos.forEach(evolito => {
            this.SpawnEvolito(evolito);
        });
    }

    SpawnEvolito(evolito){
        if(evolito.Spawn){
            evolito.Spawn(this.ctx, this.GetRandomPosition(evolito.OffsetX, evolito.OffsetY));
        }
    }

    AddEvolito(evolito){
        this.evolitos.push(evolito);                
    }

    GetRandomPosition(offsetx, offsety){
        let offx = offsetx || 0;
        let offy = offsety || 0

        return {
            x: Math.floor((Math.random() * (this.canvasWidth - (offx * 2))) + 1),
            y: Math.floor((Math.random() * (this.canvasHeight - (offy * 2))) + 1)
        };
    }

    SetInfo(){
        if(this.infoContainer){
            this.infoContainer.innerHTML = '';
            for(var x = 0; x < this.evolitos.length; x++){
                let evolito = this.evolitos[x];
            
                let data = document.createElement("div");
                data.innerHTML = `${evolito.name} X: ${evolito.xcoord}, Y: ${evolito.ycoord}, OffsetX: ${evolito.OffsetX}, OffsetY: ${evolito.OffsetY}, Id: ${evolito.id}`;
            
                this.infoContainer.appendChild(data);
            }
        }
    }

    Update(){
        this.draw();
        this.SetInfo();
    }

    Run(){
        setInterval(() => {this.Update()}, 500);
    }
}

export default World
