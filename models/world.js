import QuadTree from '../common/QuadTree.js'

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
       
        this.quadtree = new  window.QuadTree({x:0, y:0, width: this.canvasWidth, height: this.canvasHeight}, false, 4,4);

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

    AddEvolito(evolito, x, y){
        evolito.xcoord = x || 0;
        evolito.ycoord = y || 0;
        if(evolito != null){
            this.evolitos.push(evolito);    
            this.quadtree.insert(evolito);                   
        }
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

    updateTree()
    {   
	    this.quadtree.clear();
	    this.quadtree.insert(this.evolitos);
    }

    checkCollisions(){

        var items;
        var c;
        var len;
        var item;
        var dx, dy, radii;
        var colliding = false;
        

        for(var i = 0; i < this.evolitos.length; i++)
        {
            c = this.evolitos[i];

            items = this.quadtree.retrieve(c);
            len = items.length;
            for(var j = 0; j < len; j++)
            {
                item = items[j];
                
                if(c == item)
                {
                    continue;
                }
                
                if(c.isColliding && item.isColliding)
                {
                    let tx = c.currXDir;
                    let ty = c.currYDir;

                    c.currXDir = item.currXDir;
                    c.currYDir = item.currYDir;

                    item.currXDir = tx;
                    item.currYDir = ty;

                    c.isColliding = false;
                    item.isColliding = false;
                    
                    continue;
                }
                
                dx = c.x - item.x;
                dy = c.y - item.y;
                radii = c.radius + item.radius;		
                
                colliding = (( dx * dx )  + ( dy * dy )) < (radii * radii);
                
                if(!c.isColliding)
                {
                    c.isColliding = colliding;
                }
                
                if(!item.isColliding)
                {
                    item.isColliding = colliding;
                }
            }
        }
    }

    Update(){

        let canvasWidth = this.canvasWidth || 0;
        let canvasHeight = this.canvasHeight || 0;

        this.evolitos.forEach(evolito => {
            evolito.Move(this.canvasWidth, this.canvasHeight, this.speed, this.speedMult);
        });
        
        this.updateTree();
        this.draw();
        this.SetInfo();
        this.checkCollisions();
    }

    Run(){
        if(this.speedMult == 0 || this.pause) {
            this.Stop()
            return;
        } 
        else if (this.speed > 0){
            this.Update();
            window.requestAnimationFrame(this.Run.bind(this));
        }
        
    }

    Start(){
        if(this.evolitos.length <= 0) return;
        this.pause = false;
        this.Run();
    }

    Stop(){
        this.pause = true;
    }

    get Speed(){
        return this.speedMult
    }

    set Speed(speedMult){
        this.speedMult = speedMult;
    }

    get IsRunning(){
        return !this.pause;
    }
}

export default World
