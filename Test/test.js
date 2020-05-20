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
        const table = document.getElementById("board"),
        tableItems = table.getElementsByTagName("td")
        expect(tableItems.length).to.be.equal(64)
    })
})

describe("Movement checks",function(){
    it("pawnMovement",function(){
        
    })
})