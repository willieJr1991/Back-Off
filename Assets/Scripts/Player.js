#pragma strict

public var playerBall : GameObject;

private var touchDown = false;
private var touchDownPoint : Vector3;

private var hit : RaycastHit;
private var ray : Ray;
private var ball :GameObject;

function Start () {
}

function Update () {

	if (Input.GetButtonDown("Fire1") || Input.GetButtonDown("Fire2") ) {
		touchDown = true;

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);    
		if (Physics.Raycast (ray, hit)) {			
			touchDownPoint = hit.point;
		}
		
	} else if ( Input.GetButtonUp("Fire1") || Input.GetButtonUp("Fire2") && touchDown ) {
		touchDown = false;
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);    
		if ( Physics.Raycast (ray, hit) ) {			
			ball = Instantiate (playerBall, Vector3(0,-2,-10), transform.rotation);	
			var direction : Vector3 = hit.point - touchDownPoint;
			direction.z = direction.y;
			direction.y = 0;
			direction *= 40;	
			ball.transform.rigidbody.AddForce(direction);
		}
		
	}
}