let rawInput = "12,1,16,3,11,0";

let startingNumbers = rawInput.split(",").map(m => Number(m));

function RambunctiousRecitation(position, startingNumbers) {
    let numberCache = new Map();
    startingNumbers.forEach((sn, i) => {
        numberCache.set(sn, [i]);
    });

    let lastNumber = startingNumbers[startingNumbers.length - 1];
    let round = startingNumbers.length;

    while(round < position) {
        if (numberCache.get(lastNumber).length === 1) {
            numberCache = setRound(numberCache, 0, round);
            lastNumber = 0;
        } else {
            let aux = numberCache.get(lastNumber).length - 1;
            let nextNumber = numberCache.get(lastNumber)[aux] - numberCache.get(lastNumber)[aux-1];
            numberCache = setRound(numberCache, nextNumber, round);
            lastNumber = nextNumber;
        }
        round++;
    }
    
    return lastNumber;
}

function setRound(cache, number, round) {
    let aux = cache.get(number);
    if (aux) {
        aux.push(round);
        cache.set(number, aux);
    } else {
        cache.set(number, [round]);
    }
    return cache;
}

console.log("What will be the 2020th number spoken? \nA: ", RambunctiousRecitation(2020, startingNumbers));
console.log("What will be the 30000000th number spoken? \nA: ", RambunctiousRecitation(30000000, startingNumbers));