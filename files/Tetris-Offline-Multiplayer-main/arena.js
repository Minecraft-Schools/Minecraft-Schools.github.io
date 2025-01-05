class Arena
{
    constructor(height, width)
    {
        const matrix = [];
        
        while (height--) {
            matrix.push(new Array(width).fill(0));
        }
    
        this.matrix = matrix;
    }

    deleteFullRows() {
        let rowCounter = 0;
        this.matrix.forEach((row, index) => {
            if(isRowFull(row)) {
                const row = this.matrix.splice(index, 1)[0].fill(0); //remove the row from the arena and reset the value.
                this.matrix.unshift(row); //put the row on top of the arena.
                rowCounter++;
            }
        });
    
        return rowCounter;
    }

    resetArena() {
        this.matrix.forEach(row => row.fill(0));
    }

    merge(player) {
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    this.matrix[y + player.position.y][x + player.position.x] = value;
                }
            });
        });
    }

    collide(player) {
        for (let y = 0; y < player.matrix.length; y++) {
    
            let row = player.matrix[y];
    
            for (let x = 0; x < row.length; x++) {
                if (player.matrix[y][x] !== 0) {
                    if (!this.matrix[y + player.position.y] || //the row in the arena does not exist.
                        (this.matrix[y + player.position.y][x + player.position.x]) !== 0) { //exist but is occupied.
    
                        return true;
                    }
                }
            }
    
        }
    
        return false;
    }
}

let isRowFull = function(row) {
	
	for(let i=0; i<row.length ; i++) {
		if(row[i] === 0) {
			return false;
		}
	}

	return true;
}