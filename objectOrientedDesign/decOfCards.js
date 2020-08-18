// 7.1 Deck of Cards: Design the data structures for a generic deck of cards.  Explain how you would subclass the data structures to implement blackjack.

class Card {
	constructor (suit, value) {
		this.suit = suit;
		this.value = value;
		this.dealt = false; // Lets us know if this card is unavailable/has been dealt.
	}

	// Lets us know this card is unavailable.
	markDealt () {
		this.dealt = true;
	}

	// Lets us know this card is available.
	markunDealt () {
		this.dealt = false;
	}
}

class Deck {
	constructor () {
		this.suits = ['clubs', 'spades', 'hearts', 'diamonds'];
		this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
		this.cards = this.init(this.suits, this.values);
		this.dealtCount = 0; // How many cards have been dealt.
	}

	// Creates all cards.
	init (suits, values) {
		const cards = [];

		for (let suit of suits) {
			// console.log(`suit: ${suit}`);
			for (let value of values) {
				// console.log(`value: ${value}`);
				this.cards.push(new Card(suit, value));
			}
		}

		return cards;
	}

	// Shuffles cards in deck.
	shuffle () {
		if (this.cards.length === 0) return 'Error: There are no cards in this deck to shuffle.';
		console.log('Shuffling cards');
	}

	getRemainingCards () {
		return this.cards.length - this.dealtCount;
	}

	// Deals a hand with the indicated size.
	dealHand (handSize) {
		console.log('Dealing hand.');
	}
}

class Hand {
	constructor () {
		this.cards = [];  // Initializes hand to empty array of cards.
		this.turn = 0; // Indicates turn order.
		this.score = 0;  // Initializes score.
	}

	// Adds card to hand.
	buildHand (card) {
		this.cards.push(card);
	}

	// Clears entire hand.
	clearHand () {
		this.hand = [];
	}

	// Removes specified cards from hand.
	removeCard (arrOfIndices) {
		for (let i = 0; i < arrOfIndices.length; i++) {
			this.cards.pop(i);
		}
	}

	adjustScore () {
		for (let card of cards) {
			if (card.value === 'J' || card.value === 'Q' || card.value === 'K') {
				this.score += 10;
			} else if (card.value === 'A') {
				this.score += 11;
			} else {
				this.score += card.value;
			}
		}
	}

	// Resets score.
	clearScore () {
		this.score = 0;
	}
}

class BlackJackHand extends Hand {
	constructor () {
		this.busted = false; // Status of current hand.
		this.isBlackJack = false; // If hand is black jack.
	}

	// Determines if hand is busted.
	determineBust () {
		if (this.score > 21) this.busted = true;
	}

	// Determines score based on Black Jack scoring.
	determineBlackJack () {
		if (this.score === 21 && this.cards.includes('A') && this.cards.includes('J')) {
			this.isBlackJack = true;
		}
	}
}

const testDeck = new Deck();
console.log(testDeck.cards);