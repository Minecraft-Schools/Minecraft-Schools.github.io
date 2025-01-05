class Tetris
{
    constructor(element)
    {
        this.element = element;
        this.canvas = element.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.context.scale(20, 20);

        this.arena = new Arena(20, 12);
        this.player = new Player(this.arena);
        
        let lastTime = 0;
        let accumulator = 0;
        const step = 1/60;
        
        const mainLoop = (millis) => {
            if(lastTime) {
                this.draw();
                accumulator += (millis - lastTime) / 1000;
        
                while(accumulator > step) {
                    update(this, step);
                    accumulator -= step;
                }
            }
            lastTime = millis;
            requestAnimationFrame(mainLoop);
        }
        
        mainLoop();
    }

    draw() {
        resetCanvas(this);
        refreshScore(this);

        drawMatrix(this.arena.matrix, { x: 0, y: 0 }, this.context);
        drawMatrix(this.player.matrix, this.player.position, this.context);
    }
}

const colors = [
    null,
    'green', 'red', 'blue', 'purple', 'orange', 'blueviolet', 'magenta',
];

let update = function (tetris, step) {
    tetris.player.update(step);
}

let drawMatrix = function (matrix, offset, context) {
	matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if (value) {
				context.fillStyle = colors[value];
				context.fillRect(x + offset.x, y + offset.y, 1, 1);
			}
		});
	});
}

let resetCanvas = function (tetris) {
    tetris.context.fillStyle = '#71ffea'; //background black
    tetris.context.fillRect(0, 0, tetris.canvas.width, tetris.canvas.height);
}


// Function to update the score on the screen and save it to local storage
function refreshScore(tetris) {
    let text = 'Level:' + "  " + tetris.player.level + ' Scores:' + "   "+ tetris.player.score;
    const scoreElement = tetris.element.querySelector('.score');
    scoreElement.innerText = text;

    // Save the score to local storage
    localStorage.setItem('.score', JSON.stringify(tetris.player.score));
}

// Function to load the saved score from local storage
function loadScore(tetris) {
    const savedScore = localStorage.getItem('.score');
    if (savedScore) {
        tetris.player.score = JSON.parse(savedScore);
    }
}
const tetris = {
    player: {
        level: 1,
        score: 0
    },
    element: document.getElementById('.score')  
};


loadScore(tetris);


refreshScore(tetris);







