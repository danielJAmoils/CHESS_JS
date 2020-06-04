let game = new Game();
function cellClicked(cell) {
    let pieceClicked = false, outsideX = 0, outsideY = 0;
    const x = cell.getAttribute("data-x"), y = cell.getAttribute("data-y");
    for (let i = 0; i < 8; i++) { //checks if any cell has been clicked and if it has sets pieceClicked to true and gives x,y of clicked cell
        for (let j = 0; j < 8; j++) {
            if (game.board.cells[i][j].clicked) {
                outsideY = i + 1;
                outsideX = j + 1;
                pieceClicked = true;
            }
        }
    }
    if (cell.innerHTML == "" && pieceClicked) {
        //if no piece in cell and piece has already been clicked,move piece
        //outside variables start at one
        game.movePiece(cell.getAttribute("data-x"), cell.getAttribute("data-y"), outsideX, outsideY);
    }
    else if (cell.innerHTML != "" && pieceClicked == true) {
        //if you click one piece and then another
        const cell1 = game.board.cells[outsideY - 1][outsideX - 1], cell2 = game.board.cells[parseInt(cell.getAttribute("data-y")) - 1][parseInt(cell.getAttribute("data-x")) - 1];
        game.checkCapture(cell1.piece, cell2.piece);
    }
    else if (cell.innerHTML == "") {
        //if no piece in cell
    }
    else {
        const cellY = parseInt(y) - 1;
        const cellX = parseInt(x) - 1;
        //if piece in cell
        //checks if you clicked the right color piece
        if ((game.board.cells[cellY][cellX].piece.color == "white" && game.turn == 1) || (game.board.cells[cellY][cellX].piece.color == "black" && game.turn == 2)) {
            game.board.cells[cellY][cellX].clicked = true;
            cell.style.backgroundColor = "blue";
        }
    }
}
function resetCellColor(x, y) {
    let color = "";
    if (y % 2 === 0) {
        //even row
        if (x % 2 !== 0) {
            //black even row
            color = "rgb(153, 159, 168)";
        }
        else {
            //white row even
            color = "rgb(221, 215, 215)";
        }
    }
    else {
        //odd row
        if (x % 2 == 0) {
            //white odd row
            color = "rgb(153, 159, 168)";
        }
        else {
            //black row odd
            color = "rgb(221, 215, 215)";
        }
    }
    const table = document.getElementById("board"), tableItems = table.getElementsByTagName("td"), location = ((8 * (y - 1)) + x - 1), cell = tableItems.item(location);
    cell.style.backgroundColor = color;
}
function unselectPiece() {
    for (let i = 0; i < 8; i++) { //checks if any cell has been clicked and if it has sets pieceClicked to true and gives x,y of clicked cell
        for (let j = 0; j < 8; j++) {
            if (game.board.cells[i][j].clicked) {
                game.board.cells[i][j].clicked = false;
                resetCellColor(j + 1, i + 1);
            }
        }
    }
}
function restart() {
    window.location.reload();
}
//# sourceMappingURL=main.js.map