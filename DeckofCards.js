class Deck {
    constructor() {
        this.deck = [];
    }

    reset() {
        this.deck = [];
        var val = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        for (var suit of suits) {
            for (var value of val) {
                this.deck.push(`${value} of ${suit}`);
            }
        }
        return this;
    }

    shuffle() {
        let currentIndex = this.deck.length,
            temporaryValue, randomIndex;
        while (0 != currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = temporaryValue;
        }
        return this;
    }

    deal() {
        return this.deck.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    take(deck) {
        this.cards.push(deck.deal());
        return this;
    }
    discard() {
        this.cards.pop();
        return this;
    }
}
var d1 = new Deck();
var p1 = new Player("Fred");
d1.reset().shuffle();
// console.log(d1);
p1.take(d1).take(d1).take(d1).take(d1).take(d1);
console.log(p1.cards);
p1.discard();
console.log(p1.cards);