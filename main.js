var rect;
var stage;
var circle;

var keyPressedCollection = {
	DOWN_KEY_PRESSED: false,
    UP_KEY_PRESSED: false,
	LEFT_KEY_PRESSED: false,
	RIGHT_KEY_PRESSED: false
}

var keyPresses = {
	DOWN_KEY: 40,
	UP_KEY: 38,
	LEFT_KEY: 37,
	RIGHT_KEY: 39
};

function init() {
	setControls();
	makeShapesAndStage();
	addOurNewListenerToTheTicker("tick", moveRectIfKeyPressed);
}
 
function setControls() {
	window.onkeydown = keyDownEvent;
	window.onkeyup = keyUpEvent;
}

function makeShapesAndStage() {
	rect = new createjs.Shape();
	circle = new createjs.Shape();

	stage = new createjs.Stage("demoCanvas");

	rect.graphics.beginFill("#42f45f").drawRect(0,0,100,100);
	circle.graphics.beginFill("#f4a742").drawCircle(0,0,20);

	stage.addChild(rect);
	stage.addChild(circle);

	updateStage();
}

function addOurNewListenerToTheTicker(listenerName, eventToAdd) {
	createjs.Ticker.addEventListener(listenerName, eventToAdd);
}

function keyDownEvent(e) {
	switch(e.keyCode) {
		case keyPresses.DOWN_KEY:
			keyPressedCollection.DOWN_KEY_PRESSED = true;
			break;
		case keyPresses.UP_KEY:
			keyPressedCollection.UP_KEY_PRESSED = true;
			break;
		case keyPresses.LEFT_KEY:
			keyPressedCollection.LEFT_KEY_PRESSED = true;
			break;
		case keyPresses.RIGHT_KEY:
			keyPressedCollection.RIGHT_KEY_PRESSED = true;
	}	
}

function keyUpEvent(e) {
	switch(e.keyCode) {
		case keyPresses.DOWN_KEY:
			keyPressedCollection.DOWN_KEY_PRESSED = false;
			break;
		case keyPresses.UP_KEY:
			keyPressedCollection.UP_KEY_PRESSED = false;
			break;
		case keyPresses.LEFT_KEY:
			keyPressedCollection.LEFT_KEY_PRESSED = false;
			break;
		case keyPresses.RIGHT_KEY:
			keyPressedCollection.RIGHT_KEY_PRESSED = false;
	}
}

function updateStage() {
	stage.update();
}

function moveRectIfKeyPressed() {

	if(keyPressedCollection.DOWN_KEY_PRESSED) {
		moveRectDown();
	}
	if(keyPressedCollection.UP_KEY_PRESSED) {
		moveRectUp();
	}
	if(keyPressedCollection.LEFT_KEY_PRESSED) {
		moveRectLeft();
	}
	if(keyPressedCollection.RIGHT_KEY_PRESSED) {
		moveRectRight();
	}

	updateStage();
	moveCircleDiagonallyDownAndRight();
}

function moveCircleDiagonallyDownAndRight() {
	circle.x+=1;
	circle.y+=1;
}

function moveRectDown() {
	rect.y +=1;
}

function moveRectUp() {
	rect.y -=1
}

function moveRectLeft () {
	rect.x -= 1;
}

function moveRectRight() {
	rect.x += 1;
}









