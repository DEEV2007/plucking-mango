class tree{
    constructor(x,y){
        var options={
            isStatic:true
        }
     this.body=Bodies.rectangle(x,y,700,700,options)
     this.width=700;
     this.height=700;
     this.image=loadImage("tree.png")
     World.add(world,this.body)
    }

    display(){
        push();
        translate(this.body.x,this.body.y)
        imageMode(CENTER)
        image(this.image,300,355,this.width,this.height)
        pop();
    }
}