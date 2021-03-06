// player.js

var colors = ['#682F8E', 'red', '#FF2ED2', '#001975', '#6BFFB3', 'yellow'];
var PL_MARGIN = 5;

function Player(id) {
	this.id = (undefined || id);
	this.color = colors[Math.floor(Math.random()*colors.length)];
	this.genBuffer();
	this.pos;
	this.x = 0;
	this.y = 0;
}

Player.prototype.logic = function (dt) {
	//this.targetPos = new Pos(Math.floor(this.pos.x/CELL_EDGE), Math.floor(this.pos.y/CELL_EDGE));
	if (kb.char('W')) camera.targetPos.y -= 1;
	else if (kb.char('S')) camera.targetPos.y += 1;
	if (kb.char('A')) camera.targetPos.x -= 1;
	else if (kb.char('D')) camera.targetPos.x += 1;
	map.movePlayerToPos(player, this.targetPos);
}

Player.prototype.genBuffer = function() {
	var plbuffer = document.createElement('canvas');
	plbuffer.width = CELL_EDGE;
	plbuffer.height = CELL_EDGE;
	var plbufferCtx = plbuffer.getContext('2d');
	plbufferCtx.fillStyle = this.color;
	plbufferCtx.fillRect(PL_MARGIN, PL_MARGIN, CELL_EDGE-2*PL_MARGIN, CELL_EDGE-2*PL_MARGIN);

	this.buff = plbuffer;
}