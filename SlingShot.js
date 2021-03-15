class sling{
    constructor(bodyA,pointB){ //bird object, log object
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.rope = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.rope)
      
    }
    display(){
        strokeWeight(3)
        if(this.rope.bodyA)
      line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
 fly(){
     this.rope.bodyA = null
 }
 
}