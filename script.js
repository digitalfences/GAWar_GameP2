



/* 
PseudoCode for War Game
ON LOAD:
display instructions
prompt player to name players
set player name and computer name to input or defaults
prompt player to begin game when ready

SET-UP(When game is initiated)
let a card {
	 suit: “spades “||”hearts” ||”diamonds” ||”clubs”
	 rank: an integer between 2-14 inclusive
}
let deck be an array of cards
for each possible suit(4){
	for each rank (13){
		add card object to deck{
			rank: rank,
			suit: suit
		}
	}
}

shuffle deck by randomizing indices of cards in deck
deal deck into two equal arrays of 26
	playerDeck[];
	compDeck[];
clear instructions to make room for game messages
initialize game arrays:
	cardsInPlay[];
	cardsInRound[];

GAME LOOP:
for both players:

push (pop playerDeck[0])  && push (pop compDeck[0] to cardsInPlay;
compare value 
higher value is the winner (pop to cards in round)
cards in round go to the deck the winner originated from
if cards are equal initiate war pop all cardsinplay and three more cards to cards In round from both decks
    if one of the arrays is empty after a pop
        if in war, last card popped goes to in play
        in not in war, end game, print victory or defeat message(whoever ran out of cards lost) and break loop. 
continue loop

POST-GAME
when game is exited, result should be displayed on screen in place of instructions. The buttons to reinitiate game should display as well as options to change name of players. 





*/
class Card{
    constructor(rank, suit){
        this.rank = rank,
        this.suit = suit;
        if (rank > 10){
            if( rank == 11){
                this.name = "Jack of " + suit;
            }
            else if (rank == 12){
            this.name = "Queen of " + suit;
         }
            else if (rank == 13){
                this.name = "King of " + suit;
            }
            else{
                this.name = "Ace of " + suit;
            }
        }
        else{
            this.name = rank + " of " + suit;
        }
    }
}

/** make deck uses the inner function make rank to create every card of every suit from 2 - Ace */
class Deck{
    constructor(suits,ranks){
        this.suits = [...suits];
        this.ranks = [...ranks];
        this.deck = this.makeDeck;
    }
    makeDeck(){
        this.ranks.forEach(rank => makeRank(rank));

        function makeRank(rank){
                this.suits.forEach(suit => makeCard(suit))
        }
    }
    shuffleDeck(){
        let deck2 = [];
        let iterationLength = this.deck.length;
        for(let i = 0; i < iterationLength; i++){
            let destination = Math.floor(Math.random()*(this.deck.length-1));
            deck2.push[this.deck[destination]];
        }
        this.deck = deck2;
        return this.deck;
    }
    dealDeck(){
        shuffleDeck(this.deck);
        let playerDeck = deck.slice(0,26);
        let computerDeck = deck.slice(26,52);
        deck = [playerDeck,computerDeck];
        return deck
    }
    


}
class Players{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    takeCards(targetDeck, handSize){
        let hand = []
        for (let i = 0; i < handSize; i++){
            hand.push(targetDeck.pop)
        }
        return hand;
    }
}
class WarGame{
    constructor(){
        this.players = [];
        this.board = [];
        let suits = ["Spades","Hearts","Diamonds","Clubs"];
        let ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14]
        this.deck  = new Deck(suits, ranks);
    }
}

takeCards(targetDeck, handSize){
    let hand = []
    for (let i = 0; i < handSize; i++){
        hand.push(targetDeck.pop)
    }
    return hand;
}

function 

function 
