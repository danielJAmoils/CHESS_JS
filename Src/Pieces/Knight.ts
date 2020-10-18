class Knight extends Piece {
    constructor(color: string, x: number, y: number) {
        super(color, x, y, "♘", "♞")
        super.drawPiece()
    }
    correctMovement(newX: number, newY: number) {
        if (
            (Math.abs(this.x - newX) === 2 && Math.abs(this.y - newY) === 1) ||
            (Math.abs(this.x - newX) === 1 && Math.abs(this.y - newY) === 2)
        ) {
            return true
        } else {
            return false
        }
    }
}
