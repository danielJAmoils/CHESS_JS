const table = document.getElementById("board"),
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
        clickSquares(7,2,5,2)
        console.log(tableItems[getIndex(7,2)].innerText,tableItems[getIndex(5,2)].innerText)
        expect(tableItems[getIndex(7,2)].innerText).to.be.equal("")
        expect(tableItems[getIndex(5,2)].innerText).to.not.equal("")
        //reset game
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