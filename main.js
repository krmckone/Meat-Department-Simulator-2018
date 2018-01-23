var rect;
var stage;
var circle;


function init() {
	setControls();
	makeBackground();
	makeMeatGuy();
	updateStage();
}

function updateStage() {
	stage.update();
}

function makeMeatGuy() {
	makeMainCharacter();
}

