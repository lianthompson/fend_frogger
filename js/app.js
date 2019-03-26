// Enemies our player must avoid
const Enemy = function(row, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.y = 60 + (row - 1) * 80;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 500) this.x = -100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 200;
    this.y = 380;
    this.sprite = "images/char-cat-girl.png";
};

Player.prototype.update = function() {
    this.x = 200;
    this.y = 380;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyPress) {

    if(keyPress == 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (keyPress == 'right' && this.x < 400) {
        this.x += 100;
    } 
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 80;
    } 
    if (keyPress == 'down' && this.y < 380) {
        this.y += 80;
    }
}

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [];

for(let i = 0; i < 7; i++) {
    const random_speed = getRandomNumber(10, 31) * 10;
    const random_row = getRandomNumber(1, 4);
    allEnemies[i] = new Enemy(random_row, random_speed);
}

const player = new Player();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
