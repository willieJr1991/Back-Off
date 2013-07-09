#pragma strict

var Hill : Transform;
private var gravitation_point : Vector3;

function Start () 
{
	gravitation_point = Hill.position;
	gravitation_point.x += transform.position.x;
	
	
}

function Update () 
{
	transform.rigidbody.AddForce(transform.forward);
	var force : Vector3 = gravitation_point - transform.position;
	transform.rigidbody.AddForce(force);
	
	transform.forward =  Vector3.Cross(force, transform.right).normalized;
}

function OnCollisionStay(object : Collision)
{
	if (object.transform.tag == "Hill")
	{
		
	}
}

