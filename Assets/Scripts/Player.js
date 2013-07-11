#pragma strict

public var playerBall : GameObject;

function Start () {

}

function Update () {
	if (Input.GetButtonDown ("Fire1")) {
		var hit : RaycastHit;
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);    
		if (Physics.Raycast (ray, hit)) {			
			Instantiate (playerBall, hit.point, transform.rotation);
		}
	}
}