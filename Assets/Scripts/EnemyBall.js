#pragma strict

var Hill : Transform;
private var gravitation_point : Vector3;

function Start () 
{
	Hill = GameObject.FindGameObjectWithTag("Hill").transform;
	gravitation_point = Hill.position;
	gravitation_point.x += transform.position.x;
}

function Update () 
{

	//have the enemy move in it's current forward direction
	transform.rigidbody.AddForce(transform.forward);
	
	//get the "gravity force" from the hill and pull the enemy towards the center
	var force : Vector3 = gravitation_point - transform.position;
	transform.rigidbody.AddForce(force*1.5);
	
	//then make sure that it's up vector is pointing towards the center
	transform.forward = Vector3.Cross(transform.right, force).normalized;
	transform.up = -force;
	//to make it travel up the hill in the right direction, flip the Y angle
	transform.Rotate(180,0,0);
}
