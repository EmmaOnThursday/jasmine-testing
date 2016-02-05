/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       // Add a matcher for this test.
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       // Add 2 matchers for this test, one for cellNumber1 and one for cellNumber2.
       expect(cellNumber1).toBe(4);
       expect(cellNumber2).toBe(0);
    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       var newBoardPiece = board[1];
       // Add a matcher for this test.
       expect(newBoardPiece).toBe("O");
    });

    // END STEP 2

    // Add the following tests, or think of some of your own.
    it("should update the board correctly based on the board variable", function() {
        board = ["X", "O", null, "X", "X", "X", "X", "X", "X"];
        updateBoard();
        var cellNumber0 = $('#cell-0').text();
        var cellNumber1 = $('#cell-1').text();
        expect(cellNumber0).toBe("X");
        expect(cellNumber1).toBe("O");
    });

    it("should not fill in board slots that are already occupied", function() {
        board = ["X", "O", null, "X", "X", "X", "X", "X", "X"];
        expect(placePiece(0,"X")).toBeFalsy();
        expect(placePiece(2,"O")).toBeTruthy();
    });

    it ("should be able to determine a winner", function() {
        board = ["X", "O", null, "X", "X", "X", "O", "X", "O"];
        expect(findWinner()).toBe("X");
    });

    it("should not determine a winner when there is a tie", function() {
        board = ["X", "O", "X", "O", "X", "X", "O", "X", "O"];
        expect(findWinner()).toBeFalsy();
    });

    it("should be able to deduce the correct cell number", function() {
        handleClick($("#cell-4").click());
        expect(board[4]).toBe("X");
    });
    // it should be able to declare a tie and end the game

});
