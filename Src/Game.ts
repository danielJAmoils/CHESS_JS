const turnEnum = {
    stoped: 0,
    white: 1,
    black: 2
}

class Game {
    turn: number
    board: Board
    whiteKing: King | undefined
    blackKing: King | undefined
    constructor() {
        this.turn = turnEnum.stoped
        this.board = new Board(8, 8) //can change board size
        this.startGame()
    }
    createPiece(type: typeof King, color: string, x: number, y: number) {
        const piece = new type(color, x, y)
        this.addPieceToBoard(piece)
        return piece
    }
    addPieceToBoard(piece: Piece) {
        const cell = this.board.cells[piece.y - 1][piece.x - 1]
        cell.status = statusEnum.Full
        cell.piece = piece
    }
    movePiece(
        targetX: number,
        targetY: number,
        currentX: number,
        currentY: number
    ) {
        //all attributes recived start at 1
        //called when moving a piece
        //        checkSquaresMovements(3,6,4,4)
        //test log for getting test function

        //
        //console.log(`checkSquaresMovements(${currentY},${currentX},${targetY},${targetX})`)
        //
        const targetCell = this.board.cells[targetY - 1][targetX - 1],
            currentCell = this.board.cells[currentY - 1][currentX - 1]

        if (currentCell.piece.stopsCheck(targetX, targetY)) {
            //checks if movement is correct
            resetCellColor(currentX, currentY)
            targetCell.piece = currentCell.piece
            currentCell.piece = null
            currentCell.clicked = false
            targetCell.piece.x = targetX
            targetCell.piece.y = targetY
            targetCell.status = statusEnum.Full
            currentCell.status = statusEnum.Empty
            targetCell.piece.drawPiece()
            this.erasePiece(currentX, currentY)
            if (targetCell.piece.color == "white") {
                //changes turn
                this.turn = turnEnum.black
            } else {
                this.turn = turnEnum.white
            }
        }
    }
    erasePiece(x: number, y: number) {
        const table = document.getElementById("board"),
            tableItems = table.getElementsByTagName("td"),
            location = 8 * (y - 1) + x - 1,
            cell = tableItems.item(location)
        cell.innerText = ""
    }
    checkCapture(piece1: Piece, piece2: Piece) {
        //get function movement for test
        //
        //console.log(`checkSquaresMovements(${piece1.y},${piece1.x},${piece2.y},${piece2.x})`)
        //
        if (piece1.stopsCheck(piece2.x, piece2.y)) {
            //checks if movement is correct
            if (piece1.color == piece2.color) {
                //if you try to move piece to same color piece it will not move
            } else {
                //when capturing
                resetCellColor(piece1.x, piece1.y)
                piece1.capture(piece2)
                if (piece1.color == "white") {
                    //changes turn
                    this.turn = turnEnum.black
                } else {
                    this.turn = turnEnum.white
                }
            }
        }
    }
    startGame() {
        //piece starting positions
        for (let i = 1; i <= 8; i++) {
            this.createPiece(Pawn, "white", i, 7)
            //white pawns
        }
        for (let i = 2; i <= 7; i += 5) {
            this.createPiece(Knight, "white", i, 8)
            //white knight
        }
        for (let i = 3; i <= 6; i += 3) {
            this.createPiece(Bishop, "white", i, 8)
            //white bishop
        }
        for (let i = 1; i <= 8; i += 7) {
            this.createPiece(Rook, "white", i, 8)
            //white rook
        }
        this.createPiece(Queen, "white", 4, 8)
        //white queen
        this.whiteKing = this.createPiece(King, "white", 5, 8)
        //white king

        /**************************************/

        for (let i = 1; i <= 8; i++) {
            this.createPiece(Pawn, "black", i, 2)
            //black pawns
        }
        for (let i = 2; i <= 7; i += 5) {
            this.createPiece(Knight, "black", i, 1)
            //black knight
        }
        for (let i = 3; i <= 6; i += 3) {
            this.createPiece(Bishop, "black", i, 1)
            //black bishop
        }
        for (let i = 1; i <= 8; i += 7) {
            this.createPiece(Rook, "black", i, 1)
            //black rook
        }
        this.createPiece(Queen, "black", 4, 1)
        //black queen
        this.blackKing = this.createPiece(King, "black", 5, 1)
        //black king

        this.turn = turnEnum.white
        //set game turn to white
    }
    getKing() {
        if (turnEnum.white === this.turn) {
            return this.whiteKing
        } else {
            return this.blackKing
        }
    }
}
