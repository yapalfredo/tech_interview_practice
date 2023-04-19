const printSquares = () => {
  //empty 2 dimensional array of 8 rows and 8 columns
  //   const chessArray = Array.from({ length: 8 }, () => Array(8).fill(''));//

  let chessBoardHolder = ``;

  let square = true; // if black square else white square

  //for loop for 8 rows
  for (let i = 0; i < 8; i++) {
    //for loop for 8 columns
    for (let j = 0; j < 8; j++) {
      //if square is true then black '■' square else white '□' square
      //   chessArray[i][j] = square ? '■' : '□';

      chessBoardHolder += square ? '□ ' : '■ ';

      //flip the square value when it's less than 7 but keep the value when it's 8
      square = j < 7 ? !square : square;
    }
    chessBoardHolder += `\n`;
  }
  console.log(chessBoardHolder);
};

printSquares();
