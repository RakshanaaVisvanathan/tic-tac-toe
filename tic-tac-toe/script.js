document.addEventListener('DOMContentLoaded', function () {

  const PLAYER_X = 'X';
  const PLAYER_O = 'O';
  let currentPlayer = PLAYER_X;
  let gameBoard = ['', '', '', '', '', '', '', '', ''];

  
  const buttons = document.querySelectorAll('.button-option');
  
  buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
  });

 
  function handleButtonClick(event) {
      const buttonIndex = Array.from(buttons).indexOf(event.target);

      if (gameBoard[buttonIndex] === '' && !checkWinner()) {
          gameBoard[buttonIndex] = currentPlayer;
          event.target.textContent = currentPlayer;
          
          var modal = document.getElementById('myModal');
          if (checkWinner()) {
            document.getElementById('modalText').innerText = `Player ${currentPlayer} won!`;
            modal.style.display = 'block';
       } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('modalText').innerText = 'It\'s a tie!';
            modal.style.display = 'block';
       } else {
            currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
       }
      }
      window.onclick = function (event) {
        if (event.target == document.getElementById('myModal')) {
             var modal = document.getElementById('myModal');
             modal.style.display = 'none';
        }
     }
  }

  
  function checkWinner() {
      const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];

      for (const combo of winningCombinations) {
          const [a, b, c] = combo;
          if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
              return true;
          }
      }

      return false;
  }
});
