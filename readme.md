Chess game
game link:file:///C:/Users/danie/OneDrive/Documents/Chess_JS/Public/index.html
test link:file:///C:/Users/danie/OneDrive/Documents/Chess_JS/Test/test.html

game class
    board-creates board
    piece-isCaptured,capturing


    Todo
        MinimuuM:
            bundle all js into one file(use tsc compiler)
            add description text
            jumping pieces/stop pieces jumping
            endings:victory/draw
            pawn to queen
            check and check rules
                king can not move into check king cannot move to where opposite pawn moves because there is no piece there yet
                need to make sure that pieces can not move while king is in check
                tests for isInCheck
            tests
            clean up code       

        Possible additons:    
            make cell amount custimizable
            make peice unselect automatic if piece can not move
            add table items into an array so you dont have to recreate table in js every time you acsess it
            connect an ai:https://byanofsky.com/2017/07/06/building-a-simple-chess-ai/
            click on piece twice to deselect
            refactor restart game function in main.js
            make chess board size responsive
            add js dock notations
            make getting pieces its own function which take a callback with what to do with the pieces
            make bishop and piece movement checks there own functions so they do not have to be repeated

         

   