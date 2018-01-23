var background;

function makeBackground() {
	stage = new createjs.Stage("demoCanvas");
	background = new createjs.Bitmap("assets/meatDepartment.png");

	stage.addChild(background);
}