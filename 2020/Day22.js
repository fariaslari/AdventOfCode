let rawInput = "Player 1:\r\n10\r\n39\r\n16\r\n32\r\n5\r\n46\r\n47\r\n45\r\n48\r\n26\r\n36\r\n27\r\n24\r\n37\r\n49\r\n25\r\n30\r\n13\r\n23\r\n1\r\n9\r\n3\r\n31\r\n14\r\n4\n\nPlayer 2:\r\n2\r\n15\r\n29\r\n41\r\n11\r\n21\r\n8\r\n44\r\n38\r\n19\r\n12\r\n20\r\n40\r\n17\r\n22\r\n35\r\n34\r\n42\r\n50\r\n6\r\n33\r\n7\r\n18\r\n28\r\n43";

function combat(playersDeck) {
    let done = false;
    while (!done) {
        let deckPlayerOne = playersDeck.get(1);
        let deckPlayerTwo = playersDeck.get(2);
        let cardPlayerOne = deckPlayerOne[0];
        let cardPlayerTwo = deckPlayerTwo[0];

        if (cardPlayerOne > cardPlayerTwo) {
            deckPlayerOne.push(cardPlayerOne);
            deckPlayerOne.push(cardPlayerTwo);
            playersDeck.set(1, deckPlayerOne.slice(1, deckPlayerOne.length));
            playersDeck.set(2, deckPlayerTwo.slice(1, deckPlayerTwo.length));
        } else {
            deckPlayerTwo.push(cardPlayerTwo);
            deckPlayerTwo.push(cardPlayerOne);
            playersDeck.set(1, deckPlayerOne.slice(1, deckPlayerOne.length));
            playersDeck.set(2, deckPlayerTwo.slice(1, deckPlayerTwo.length));
        }
        done = playersDeck.get(1).length === 0 || playersDeck.get(2).length === 0;
    }
}

function recursiveCombat(playersDeck) {
    let cacheRounds = [];
    
    let done = false;
    while (!done) {
        let deckPlayerOne = playersDeck.get(1);
        let deckPlayerTwo = playersDeck.get(2);

        let roundCards = deckPlayerOne.join("")+"/"+deckPlayerTwo.join("");
        if (cacheRounds.find(cache => cache === roundCards)) {
            playersDeck.set(2, []);
            break;
        }
        cacheRounds.push(roundCards);
        
        let cardPlayerOne = deckPlayerOne[0];
        let cardPlayerTwo = deckPlayerTwo[0];

        let didPlayerOneWin = cardPlayerOne > cardPlayerTwo;
        if (cardPlayerOne <= (deckPlayerOne.length-1)
            && cardPlayerTwo <= (deckPlayerTwo.length-1)) {

            let subGameDeck = new Map([
                [1, deckPlayerOne.slice(1, cardPlayerOne + 1)],
                [2, deckPlayerTwo.slice(1, cardPlayerTwo + 1)]
            ]);
            recursiveCombat(subGameDeck);
            didPlayerOneWin = subGameDeck.get(1).length > 0;
        }
        
        if (didPlayerOneWin) {
            deckPlayerOne.push(cardPlayerOne);
            deckPlayerOne.push(cardPlayerTwo);
            playersDeck.set(1, deckPlayerOne.slice(1, deckPlayerOne.length));
            playersDeck.set(2, deckPlayerTwo.slice(1, deckPlayerTwo.length));
        } else {
            deckPlayerTwo.push(cardPlayerTwo);
            deckPlayerTwo.push(cardPlayerOne);
            playersDeck.set(1, deckPlayerOne.slice(1, deckPlayerOne.length));
            playersDeck.set(2, deckPlayerTwo.slice(1, deckPlayerTwo.length));
        }

        done = playersDeck.get(1).length === 0 || playersDeck.get(2).length === 0;
    }
}

function playCombat(cardsDealt, recursive = false) {
    let playersDeck = new Map();
    cardsDealt.map((cards, i) => {
        playersDeck.set(i+1, cards.split("\r\n").slice(1, cards.length).map(card => Number(card)))
    });
    
    if (recursive) {
        recursiveCombat(playersDeck);
    } else {
        combat(playersDeck);
    }

    let winnerDeck = playersDeck.get(1).length > 0 ? playersDeck.get(1) : playersDeck.get(2);
    let i = 0;
    let score = 0;
    while (i < winnerDeck.length) {
        score += winnerDeck[i] * (winnerDeck.length - i);
        i++;
    }
    return score;
}

let cardsDealt = rawInput.split("\n\n");

console.log("Play the small crab in a game of Combat using the two decks you just dealt.\nWhat is the winning player's score?\nA:",
    playCombat(cardsDealt)
);
console.log("Defend your honor as Raft Captain by playing the small crab in a game of Recursive Combat using the same two decks as before.\nWhat is the winning player's score?\nA:",
    playCombat(cardsDealt, true)
);