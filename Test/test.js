let table = document.getElementById("board"),
tableItems = table.getElementsByTagName("td")
describe("Board Array Checks",function(){
    it("Board length ", function(){
        expect(game.board.cells.length).to.be.equal(8)
        game.board.cells.forEach(element => {
            expect(element.length).to.be.equal(8)
        });
    })
    it("Board Drawn ",function(){
        expect(tableItems.length).to.be.equal(64)
    })
})

describe("In check tests",function(){
    this.afterEach(resetGame)
    it("Not in check test ",function(){//test with no piece movemments
        expect(game.board.cells[0][4].piece.isInCheck(5,1)).to.be.equal(false)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(false)
    })
    it("In check from bishop test ",function(){
        checkSquaresMovements(7,4,6,4)
        checkSquaresMovements(2,5,3,5)
        checkSquaresMovements(7,8,6,8)
        checkSquaresMovements(1,6,5,2)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(true)
    })
})

describe("Block Check Tests ",function(){
    this.afterEach(resetGame)
    it("Bishop block check from bishop ",function(){
        checkSquaresMovements(7,4,6,4)
        checkSquaresMovements(2,5,3,5)
        checkSquaresMovements(7,8,6,8)
        checkSquaresMovements(1,6,5,2)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(true)
        checkSquaresMovements(8,3,7,4)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(false)
    })
    it("Pawn Block check from bishop ",function(){
        checkSquaresMovements(7,4,6,4)
        checkSquaresMovements(2,5,3,5)
        checkSquaresMovements(7,8,6,8)
        checkSquaresMovements(1,6,5,2)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(true)
        checkSquaresMovements(7,3,6,3)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(false)
    })
    it("Knight Block check from Queen by capturing ",function(){
        checkSquaresMovements(8,2,6,3)
        checkSquaresMovements(2,4,4,4)
        checkSquaresMovements(7,5,5,5)
        checkSquaresMovements(1,4,3,4)
        checkSquaresMovements(5,5,4,4)
        checkSquaresMovements(3,4,4,4)
        checkSquaresMovements(7,8,6,8)
        checkSquaresMovements(4,4,5,5)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(true)
        checkSquaresMovements(6,3,5,5)
        expect(game.board.cells[7][4].piece.isInCheck(5,8)).to.be.equal(false)
    })
})
describe("Movement checks",function(){
    this.afterEach(resetGame)//resets game between each it
    it("pawn movement 1 ",function(){
        checkSquaresMovements(7,2,5,2)
        checkSquaresMovementsFalse(7,3,5,3)
    })
    it("pawn movement test 2 ",function(){
        checkSquaresMovements(7,4,5,4)
        checkSquaresMovements(2,5,4,5)
        checkSquaresMovements(5,4,4,5)
        checkSquaresMovements(2,4,3,4)
        checkSquaresMovements(4,5,3,4)
        checkSquaresMovements(2,3,3,4)
        checkSquaresMovements(7,3,5,3)
        checkSquaresMovements(3,4,4,4)
        checkSquaresMovements(5,3,4,4)
        checkSquaresMovements(2,7,4,7)
    })
    it("knight movement test 1 ",function(){
        checkSquaresMovements(8,2,6,3)
        checkSquaresMovements(1,7,3,6)
        checkSquaresMovements(6,3,4,4)
        checkSquaresMovements(3,6,4,4)
        checkSquaresMovements(7,3,6,3)
        checkSquaresMovements(4,4,6,3)
        checkSquaresMovements(7,7,6,7)
        checkSquaresMovements(6,3,7,5)
        checkSquaresMovements(8,7,6,6)
        checkSquaresMovements(7,5,6,7)
        checkSquaresMovements(6,6,4,5)
        checkSquaresMovements(6,7,8,6)
        checkSquaresMovements(4,5,2,4)
        checkSquaresMovements(8,6,7,4)
        checkSquaresMovements(2,4,1,6)
        checkSquaresMovements(7,4,8,2)
        checkSquaresMovements(1,6,2,8)
    })
    it("bishop movement test 1 ",function(){
        checkSquaresMovements(7,4,6,4)
        checkSquaresMovements(2,5,3,5)
        checkSquaresMovements(8,3,4,7)
        checkSquaresMovements(1,6,4,3)
        checkSquaresMovements(4,7,1,4)
        checkSquaresMovements(4,3,7,6)
        checkSquaresMovements(1,4,2,3)
        checkSquaresMovements(3,5,4,5)
        checkSquaresMovements(2,3,3,4)
        checkSquaresMovements(7,6,6,7)
        checkSquaresMovements(3,4,4,3)
        checkSquaresMovements(6,7,5,6)
        checkSquaresMovements(4,3,3,2)
        checkSquaresMovements(5,6,6,7)
        checkSquaresMovements(3,2,5,4)
        checkSquaresMovements(6,7,8,5)
        checkSquaresMovements(5,4,4,5)
        checkSquaresMovements(8,5,6,3)
        checkSquaresMovements(4,5,1,2)
        checkSquaresMovements(6,3,7,2)
        checkSquaresMovements(1,2,2,1)
        checkSquaresMovements(7,2,5,4)
    })
    it("rook movement test 1 ",function(){
        checkSquaresMovements(7,1,5,1)
        checkSquaresMovements(2,1,4,1)
        checkSquaresMovements(8,1,6,1)
        checkSquaresMovements(1,1,3,1)
        checkSquaresMovements(6,1,6,4)
        checkSquaresMovements(3,1,3,3)
        checkSquaresMovements(6,4,2,4)
        checkSquaresMovements(3,3,7,3)
        checkSquaresMovements(2,4,2,3)
        checkSquaresMovements(7,3,2,3)// rook fails to caputre upward
    })
    it("queen movement test 1 ",function(){
        checkSquaresMovements(7,4,6,4)
        checkSquaresMovements(2,4,3,4)
        checkSquaresMovements(8,4,7,4)
        checkSquaresMovements(1,4,2,4)
        checkSquaresMovements(7,4,3,8)
        checkSquaresMovements(2,4,4,2)
        checkSquaresMovements(3,8,2,7)
        checkSquaresMovements(4,2,6,4)
        checkSquaresMovements(2,7,1,6)
        checkSquaresMovements(6,4,7,5)
        checkSquaresMovements(8,2,6,3)
        checkSquaresMovements(2,6,4,6)
        checkSquaresMovements(6,3,5,5)
        checkSquaresMovements(7,5,5,5)
        checkSquaresMovements(1,6,4,6)
        checkSquaresMovements(5,5,4,6)
        checkSquaresMovements(8,3,5,6)
        checkSquaresMovements(4,6,5,6)
        checkSquaresMovements(7,3,6,3)
        checkSquaresMovements(5,6,7,6)
        checkSquaresMovements(6,3,5,3)
        checkSquaresMovements(7,6,7,2)//fail
    })
    it("castling test 1 ",function(){
        checkSquaresMovements(8,7,6,6)
        checkSquaresMovements(2,6,3,6)
        checkSquaresMovementsFalse(8,5,8,7)
    })
    it("castiling test 2 ",function(){
        checkSquaresMovements(7,7,6,7)
        checkSquaresMovements(2,7,3,7)
        checkSquaresMovements(8,6,6,8)
        checkSquaresMovements(2,5,3,5)
        checkSquaresMovements(8,7,6,6)
        checkSquaresMovements(2,4,3,4)
        checkSquaresMovements(8,5,8,7)
        checkSquaresMovements(8,8,8,6)
        expect(tableItems[getIndex(8,8)].innerText).to.be.equal("")//rook movement test
        expect(tableItems[getIndex(8,6)].innerText).to.not.equal("")//rook movement test

    })
    it("mutliple piece with multiple movements test 1 ",function(){
        /*chess code for test being done
        f4,Nc6,e3,Nf,Nc3,h5,a3,e6,d4,h4,Be2,d6,Na4,Ne7,h3,c6,Nf3,b5,Nc3,Bb7,Qd3,a5,b4,axb4,axb4,Rxa1
        link:https://www.chess.com/analysis?fen=3qkb1r%2F1b2npp1%2F2pppn2%2F1p6%2F1P1P1P1p%2F2NQPN1P%2F2P1B1P1%2Fr1B1K2R+w+Kk+-+0+14&flip=false&diagramType=computer
         */
        checkSquaresMovements(7,6,5,6)
        checkSquaresMovements(1,2,3,3)
        checkSquaresMovements(7,5,6,5)
        checkSquaresMovements(1,7,3,6)
        checkSquaresMovements(8,2,6,3)
        checkSquaresMovements(2,8,4,8)
        checkSquaresMovements(7,1,6,1)
        checkSquaresMovements(2,5,3,5)
        checkSquaresMovements(7,4,5,4)
        checkSquaresMovements(4,8,5,8)
        checkSquaresMovements(8,6,7,5)
        checkSquaresMovements(2,4,3,4)
        checkSquaresMovements(6,3,5,1)
        checkSquaresMovements(3,3,2,5)
        checkSquaresMovements(7,8,6,8)
        checkSquaresMovements(2,3,3,3)
        checkSquaresMovements(8,7,6,6)
        checkSquaresMovements(2,2,4,2)
        checkSquaresMovements(5,1,6,3)
        checkSquaresMovements(1,3,2,2)
        checkSquaresMovements(8,4,6,4)
        checkSquaresMovements(2,1,4,1)
        checkSquaresMovements(7,2,5,2)
        checkSquaresMovements(4,1,5,2)
        checkSquaresMovements(6,1,5,2)
        checkSquaresMovements(1,1,8,1)//rook fails to capture downward
    })
})
function getIndex(y,x){
    return ((8*(y-1))+x-1)
}
function clickSquares(firstY,firstX,secondY,secondX){
    let cell = tableItems[getIndex(firstY,firstX)],
    cell2 = tableItems[getIndex(secondY,secondX)]
    cellClicked(cell)
    cellClicked(cell2)
}
function checkSquaresMovements(firstY,firstX,secondY,secondX){
    clickSquares(firstY,firstX,secondY,secondX)
    expect(tableItems[getIndex(firstY,firstX)].innerText).to.be.equal("")
    expect(tableItems[getIndex(secondY,secondX)].innerText).to.not.equal("")
}
function resetGame(){//removes table and creates entire new game
    table.parentNode.removeChild(table)
    game = new Game
    table = document.getElementById("board")//links to new table
    tableItems = table.getElementsByTagName("td")
}
function checkSquaresMovementsFalse(firstY,firstX,secondY,secondX){
    clickSquares(firstY,firstX,secondY,secondX)
    expect(tableItems[getIndex(firstY,firstX)].innerText).to.not.equal("")
    expect(tableItems[getIndex(secondY,secondX)].innerText).to.be.equal("")
}