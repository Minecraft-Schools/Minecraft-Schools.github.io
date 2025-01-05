class PieceFactory
{
    createPiece() {
        const numPieces = 7;
        var pieceNum = Math.floor((Math.random() * numPieces) + 1);
        
        switch (pieceNum) {
    
            case 1:
                return createSquare();
    
            case 2:
                return createLong();
    
            case 3:
                return createZigR();
    
            case 4:
                return createZigL();
    
            case 5:
                return createTri();
    
            case 6:
                return createLL();
    
            case 7:
                return createLR();
            }
        }
}

let createSquare = function() {
	return [
		[1, 1],
		[1, 1]
	];
}

let createLong = function () {
	return [
		[0, 2, 0, 0],
		[0, 2, 0, 0],
		[0, 2, 0, 0],
		[0, 2, 0, 0]
	];
}

let createZigR = function () {
	return [
		[3, 3, 0],
		[0, 3, 3],
		[0, 0, 0]
	];
}

let createZigL = function () {
	return [
		[0, 4, 4],
		[4, 4, 0],
		[0, 0, 0]
	];
}

let createTri = function () {
	return [
		[0, 5, 0],
		[5, 5, 5],
		[0, 0, 0]
	];
}

let createLL = function () {
	return [
		[0, 6, 0],
		[0, 6, 0],
		[6, 6, 0]
	];
}

let createLR = function () {
	return [
		[0, 7, 0],
		[0, 7, 0],
		[0, 7, 7]
	];
}