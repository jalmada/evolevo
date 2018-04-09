
class World {

    constructor(containerId, infoContainerId){
        
        this.containerId = containerId;
        this.container = document.getElementById(this.containerId);
        this.evolitos = [];
        this.canvasWidth = 1000;
        this.canvasHeight = 600;
        this.speed = 1;
        this.speedMult = 1;
        this.pause = false;
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
            evolito.Spawn(this.ctx);
        });
    }

    AddEvolito(evolito){
        this.evolitos.push(evolito);                
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

        let canvasWidth = this.canvasWidth || 0;
        let canvasHeight = this.canvasHeight || 0;

        this.evolitos.forEach(evolito => {
            evolito.Move(this.canvasWidth, this.canvasHeight, this.speed, this.speedMult);
        });
        this.draw();
        this.SetInfo();
    }

    Run(){
        if(this.pause || this,this.speedMult == 0) return;

        this.Update();
        window.requestAnimationFrame(this.Run.bind(this));     
                   
        //setInterval(() => {this.Update()}, 5);
    }

    TogglePause(){
        if(this.pause){
            this.pause = false;
        } else {
            this.pause = true;
            this.Run();
        }
    }

    set Speed(speedMult){
        this.speedMult = speedMult;
    }
}

export default World
