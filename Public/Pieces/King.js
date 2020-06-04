class King extends Piece {
    constructor(color, x, y) {
        super(color, x, y, "♔", "♚");
        super.drawPiece();
    }
    correctMovement(newX, newY) {
        newX = parseInt(newX);
        newY = parseInt(newY); //changes to numbers
        if (Math.abs(this.x - newX) <= 1 && Math.abs(this.y - newY) <= 1) {
            return true;
        }
        else if (this.x - 2 === newX && this.y === newY) {
            //castiling left
            if (game.board.cells[this.y - 1][this.x - 2].piece || game.board.cells[this.y - 1][this.x - 4].piece) {
                //piece blocking
                return false;
            }
            //start castling left
            const rook = game.board.cells[this.y - 1][this.x - 5].piece;
            rook.castling = true;
            game.movePiece(this.x - 1, this.y, rook.x, rook.y);
            return true;
        }
        else if (this.x + 2 === newX && this.y === newY && game.board.cells[newY - 1][newX].piece instanceof Rook) {
            //castiling right
            if (game.board.cells[this.y - 1][this.x].piece) {
                //piece blocking
                return false;
            }
            //start castling right
            const rook = game.board.cells[this.y - 1][this.x + 2].piece;
            rook.castling = true;
            game.movePiece(this.x + 1, this.y, rook.x, rook.y);
            return true;
        }
        else {
            //incorrect movement
            return false;
        }
    }
}
//# sourceMappingURL=King.js.map