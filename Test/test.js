let table = document.getElementById("board"),
tableItems = table.getElementsByTagName("td")
describe('test setup', function () {
    it('setting up tests', function () {
      expect(1 + 1).to.be.equal(2)
    })
})
describe("Board Array Checks",function(){
    it("Board length", function(){
        console.log(game.board.cells.length)
        expect(game.board.cells.length).to.be.equal(8)
        game.board.cells.forEach(element => {
            expect(element.length).to.be.equal(8)
        });
    })
    it("Board Drawn",function(){
        expect(tableItems.length).to.be.equal(64)
    })
})

describe("Movement checks",function(){
    it("pawnMovement",function(){
        checkSquaresMovements(7,2,5,2)
        //reset game
        resetGame()
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
        checkSquaresMovements(1,1,8,1)//fix
        resetGame()
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