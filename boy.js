class boy{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,150,300,options)
        this.width=180;
        this.height=340;
        this.image=loadImage("boy.png")
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}