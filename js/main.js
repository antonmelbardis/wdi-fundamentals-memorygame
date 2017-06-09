//Creating variable with card properties
var cards = [
   {
       rank: 'queen',
       suit: 'hearts',
       cardImage: 'images/queen-of-hearts.png'
   },
   {
       rank: 'queen',
       suit: 'diamonds',
       cardImage: 'images/queen-of-diamonds.png'
   },
      {
       rank: 'king',
       suit: 'hearts',
       cardImage: 'images/king-of-hearts.png'
   },
      {
       rank: 'king',
       suit: 'diamonds',
       cardImage: 'images/king-of-diamonds.png'
   },
];
//Creating an empty array for selected cards
var cardsInPlay = [];


//Function to check if user got a match
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
	}
};

//Function to place the selected cards to to array of playing cards
var flipCard = function() {
	cardId = this.getAttribute('data-id');
	console.log(cardId);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2){
		checkForMatch();
		cardsInPlay = [];
	}


};
//Function to create a board and opening them up on user click
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }

}

createBoard();
