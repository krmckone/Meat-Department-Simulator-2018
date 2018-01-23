var faceBack;
var walkingBack;
var facingForward;
var walkingForward;

var mainCharacter;

var mainCharacterSpriteSheet = new createjs.SpriteSheet({
	images: ["assets/meatman.png"],
	frames: {
		width: 34,
		height: 50,
		regX: 55,
		regY: 27,
		spacing: 1,
		margin: 18,
		count: 6
	},
	animations: {
		facingBack: 0,
		walkingBack: [1,2, "walkingBack"],
		facingForward: 3,
		walkingForward: [4,5, "walkingForward"] 
	}
});

function makeMainCharacter() {

	mainCharacter = new createjs.Sprite(mainCharacterSpriteSheet, "facingBack");
	mainCharacter.x = 200;
	mainCharacter.y = 300;
	stage.addChild(mainCharacter);

	faceBack = new createjs.Sprite(mainCharacterSpriteSheet, "facingBack");
	walkingBack = new createjs.Sprite(mainCharacterSpriteSheet, "walkingBack");
	facingForward = new createjs.Sprite(mainCharacterSpriteSheet, "facingForward");
	walkingForward = new createjs.Sprite(mainCharacterSpriteSheet, "walkingForward");

}
