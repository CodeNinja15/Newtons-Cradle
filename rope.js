class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
            bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
		//create rope constraint here
        con = Rope.Constraint.create({
			pointA:{x:200,y:20},
			bodyB:bob,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		});

		World.add(world,con);

		con2 = Rope.Constraint.create({
			bodyA:bob,
			pointA:{x:0,y:0},
			bodyB:bob2,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		});

		World.add(world,con2);
	}


    //create display() here 
    rope.display();
}
