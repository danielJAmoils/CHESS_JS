class King extends Piece {
    constructor(color, x, y) {
        super(color, x, y, "♔", "♚");
        super.drawPiece();
        this.hasMoved = false;
    }
    correctMovement(newX, newY) {
        if (Math.abs(this.x - newX) <= 1 && Math.abs(this.y - newY) <= 1) {
            this.hasMoved = true;
            return true;
        }
        else if (this.x - 2 === newX && this.y === newY && !this.hasMoved) {
            //castiling left
            if (game.board.cells[this.y - 1][this.x - 2].piece || game.board.cells[this.y - 1][this.x - 4].piece) {
                //piece blocking
                return false;
            }
            //start castling left
            const rook = game.board.cells[this.y - 1][this.x - 5].piece;
            if (!rook.hasMoved) {
                rook.castling = true;
                game.movePiece(this.x - 1, this.y, rook.x, rook.y);
                rook.hasMoved = true;
                this.hasMoved = true;
                return true;
            }
            else {
                return false;
            }
        }
        else if (this.x + 2 === newX && this.y === newY && game.board.cells[newY - 1][newX].piece instanceof Rook && !this.hasMoved) {
            //castiling right
            if (game.board.cells[this.y - 1][this.x].piece) {
                //piece blocking
                return false;
            }
            //start castling right
            const rook = game.board.cells[this.y - 1][this.x + 2].piece;
            if (!rook.hasMoved) {
                rook.castling = true;
                game.movePiece(this.x + 1, this.y, rook.x, rook.y);
                this.hasMoved = true;
                rook.hasMoved = true;
                return true;
            }
        }
        else {
            //incorrect movement
            return false;
        }
    }
    isInCheck() {
        const oppositeColorPieces = this.getOtherColorPieces();
        let checked = false;
        for (let i = 0; i < oppositeColorPieces.length; i++) {
            const element = oppositeColorPieces[i];
            if (element.correctMovement(this.x, this.y)) {
                checked = true;
                break;
            }
        }
        return checked;
    }
}
//# sourceMappingURL=King.js.map