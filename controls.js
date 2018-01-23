var keyPressedCollection = {
	DOWN_KEY_PRESSED: false,
    UP_KEY_PRESSED: false,
	LEFT_KEY_PRESSED: false,
	RIGHT_KEY_PRESSED: false
};

var keyPresses = {
	DOWN_KEY: 40,
	UP_KEY: 38,
	LEFT_KEY: 37,
	RIGHT_KEY: 39
};


function setControls() {
	window.onkeydown = keyDownEvent;
	window.onkeyup = keyUpEvent;
	createjs.Ticker.addEventListener("movementControls", moveMainCharacterIfPressed);
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

function moveMainCharacterIfPressed() {

	if(keyPressedCollection.DOWN_KEY_PRESSED) {
		moveCharacterDown();
	}
	if(keyPressedCollection.UP_KEY_PRESSED) {
		moveCharacterUp();
	}
	if(keyPressedCollection.LEFT_KEY_PRESSED) {
		moveCharacterLeft();
	}
	if(keyPressedCollection.RIGHT_KEY_PRESSED) {
		moveCharacterRight();
	}

	updateStage();
}

function moveCharacterDown() {
	mainCharacter.y +=1;
}

function moveCharacterUp() {
	mainCharacter.y -=1
}

function moveCharacterLeft () {
	mainCharacter.x -= 1;
}

function moveCharacterRight() {
	mainCharacter.x += 1;
}