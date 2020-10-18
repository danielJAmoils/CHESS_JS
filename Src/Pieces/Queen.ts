class Queen extends Piece {
    constructor(color: string, x: number, y: number) {
        super(color, x, y, "♕", "♛")
        super.drawPiece()
    }
    correctMovement(newX: number, newY: number) {
        if (Math.abs(this.x - newX) === Math.abs(this.y - newY)) {
            //bishop like movement
            if (this.x < newX && this.y < newY) {
                //moving down right
                for (let i = Math.abs(this.x - newX) - 1; i > 0; i--) {
                    if (
                        game.board.cells[this.y - 1 + i][this.x - 1 + i].piece
                    ) {
                        return false //piece blocking
                    }
                }
                return true
            } else if (this.x < newX && this.y > newY) {
                //moving up right
                for (let i = Math.abs(this.x - newX) - 1; i > 0; i--) {
                    if (
                        game.board.cells[this.y - 1 - i][this.x - 1 + i].piece
                    ) {
                        return false //piece blocking
                    }
                }
                return true
            } else if (this.x > newX && this.y < newY) {
                //moving down left
                for (let i = Math.abs(this.x - newX) - 1; i > 0; i--) {
                    if (
                        game.board.cells[this.y - 1 + i][this.x - 1 - i].piece
                    ) {
                        return false //piece blocking
                    }
                }
                return true
            } else if (this.x > newX && this.y > newY) {
                //moving up left
                for (let i = Math.abs(this.x - newX) - 1; i > 0; i--) {
                    if (
                        game.board.cells[this.y - 1 - i][this.x - 1 - i].piece
                    ) {
                        return false //piece blocking
                    }
                }
                return true
            }
        } else if (
            (this.x === newX && this.y !== newY) ||
            (this.x !== newX && this.y === newY)
        ) {
            //rook like movement
            if (this.x === newX && this.y !== newY) {
                if (this.y < newY) {
                    //y moving down
                    for (let i = this.y; i < newY - 2; i++) {
                        if (game.board.cells[i][this.x - 1].piece) {
                            //piece blocking path y
                            return false
                        } else {
                            //path clear y
                        }
                    }
                    return true
                } else {
                    //y moving up
                    for (let i = newY; i < this.y - 1; i++) {
                        if (game.board.cells[i][this.x - 1].piece) {
                            //piece blocking path y
                            return false
                        } else {
                            //path clear y
                        }
                    }
                    return true
                }
            } else if (this.x !== newX && this.y === newY) {
                if (this.x < newX) {
                    //x moving down
                    for (let i = this.x; i < newX - 2; i++) {
                        if (game.board.cells[this.y - 1][i].piece) {
                            //piece blocking path x
                            return false
                        } else {
                            //path clear x
                        }
                    }
                    return true
                } else {
                    //x moving up
                    for (let i = newX; i < this.x - 1; i++) {
                        if (game.board.cells[this.y - 1][i].piece) {
                            //piece blocking path x
                            return false
                        } else {
                            //path clear x
                        }
                    }
                    return true
                }
            }
        } else {
            return false
        }
    }
}
