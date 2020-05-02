//new board line document.write('<br/><div style="background-color:#000000;float:left;">&nbsp</div>');
//black square document.write('<div style="background-color:#000000;float:left;">&nbsp</div>');    
//white square document.write('<div style="background-color:#FFFFFF;float:left;">&nbsp</div>');

console.log("Main js")

game = new Game()
game.startGame()
console.log(game.board.cells[4][3])