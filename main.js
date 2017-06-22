//Creating new arrays to include four objects, one for each card
var cards = [
{
	rank: 'queen',
	suit: 'harts',
	cardImage: 'images/queen-of-harts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'harts',
	cardImage: 'images/king-of-harts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
// Cards in play array
var cardsInPlay = [];

var checkForMatch = function () {
 if (cardsInPlay [0] === cardsInPlay [1]) {
		console.log("You've found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

	var flipCard = function (cardId) {
		console.log("User flipped " + cards[cardId].rank);

cardsInPlay.push(cards[cardId].card);

console.log(cards[cardId].cardImage);

console.log(cards[cardId].suit);


if (cardsInPlay.length === 2) {

	checkForMatch();
	cardsInPlay = [];
 }
};

flipCard(0);
flipCard(2);