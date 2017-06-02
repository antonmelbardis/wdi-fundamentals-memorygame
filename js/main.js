var cards = ["Queen", "Queen", "King", "King"]

var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("Cards in play are: " , cardsInPlay);

if (cardsInPlay.length === 2) {
	console.log("Two cards are in play")
  }
  
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  }
  else {
  	alert("Sorry,try again!")
  }

console.log("User flipped " + cardsInPlay[0] +" and "+ cardsInPlay[1] + "!");