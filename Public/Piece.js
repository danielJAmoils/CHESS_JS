class Piece {
    constructor(color, x, y, whiteSymbol, blackSymbol) {
        this.color = color;
        this.x = x;
        this.y = y;
        if (color == "white") {
            this.symbol = whiteSymbol;
        }
        else {
            this.symbol = blackSymbol;
        }
    }
    capture(piece2) {
        const targetCell = game.board.cells[piece2.y - 1][piece2.x - 1], oldCell = game.board.cells[this.y - 1][this.x - 1];
        game.erasePiece(piece2.x, piece2.y);
        game.erasePiece(this.x, this.y);
        this.x = piece2.x;
        this.y = piece2.y;
        targetCell.piece = this;
        oldCell.clicked = false;
        oldCell.status = statusEnum.Empty;
        oldCell.piece = null;
        this.drawPiece();
    }
    drawPiece() {
        const table = document.getElementById("board"), tableItems = table.getElementsByTagName("td"), location = 8 * (this.y - 1) + this.x - 1, cell = tableItems.item(location);
        cell.innerText = this.symbol;
    }
    correctMovement(newX, newY) {
        //dummy function to make pieces compatible with piece type
        return true;
    }
    getOtherColorPieces() {
        //returns all pieces of opposite color
        const pieces = [];
        for (let i = 0; i < 8; i++) {
            //gets all other color pieces
            for (let j = 0; j < 8; j++) {
                const pieceChecked = game.board.cells[i][j].piece;
                if (pieceChecked && !(pieceChecked instanceof King)) {
                    //if piece exists
                    if (pieceChecked.color !== this.color) {
                        pieces.push(pieceChecked);
                    }
                }
            }
        }
        return pieces;
    }
    stopsCheck(newX, newY) {
        //check if in check and move stops check else just checks if move is correct
        const king = game.getKing(), isCorrectMove = this.correctMovement(newX, newY), oldX = this.x, oldY = this.y, targetCell = game.board.cells[newY - 1][newX - 1], currentCell = game.board.cells[oldX - 1][oldY - 1];
        let isChecked = true, targetPiece;
        let checkedX, checkedY;
        if (king.isInCheck(king.x, king.y)) {
            if (this != king) {
                //checks weather king is moving
                checkedX = king.x; //checks x and y of stationary king
                checkedY = king.y;
            }
            else {
                checkedX = newX; //checks x and y of moving king
                checkedY = newY;
            }
            if (isCorrectMove) {
                //if is in check and move correct
                targetPiece = targetCell.piece;
                targetCell.piece = this;
                currentCell.piece = null;
                isChecked = king.isInCheck(checkedX, checkedY);
                currentCell.piece = this;
                targetCell.piece = targetPiece;
                if (isChecked) {
                    //check if stops check
                    return false; //move doesent stop check
                }
                else {
                    return true; //move stops check
                }
            }
            else {
                //no check
                return isCorrectMove; //return regular
            }
        }
        else {
            return isCorrectMove;
        }
    }
}
//# sourceMappingURL=Piece.js.map