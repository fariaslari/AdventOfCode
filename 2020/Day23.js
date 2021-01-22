let rawInput = "716892543";

function playCrabCups(input, advanced = false) {
    let cupsMap = new Map();
    cups.forEach((c, i) => {
        cupsMap.set(c, cups[i+1] || cups[0]);
    });

    let min = Math.min(...cups);
    let max = Math.max(...cups);
    let iterations = 100;

    if (advanced) {
        cupsMap.set(cups[cups.length-1], 10);
        for (let i=10;i<=1000000;i++){
            cupsMap.set(i, i===1000000 ? cups[0] : i+1);
        }
        max = 1000000;
        iterations = 10000000;
    }

    let destination;
    let currentCup = cups[0];
    for (let i=0;i<iterations;i++) {
        let pickUp = [cupsMap.get(currentCup)];
        pickUp.push(cupsMap.get(pickUp[0]));
        pickUp.push(cupsMap.get(pickUp[1]));

        destination = currentCup-1;
        while (pickUp.includes(destination) || destination < min) {
            destination = destination - 1;
            if (destination < min) destination = max;
        }

        cupsMap.set(currentCup, cupsMap.get(pickUp[2]))

        let aux = cupsMap.get(destination);
        cupsMap.set(destination, pickUp[0]);
        cupsMap.set(pickUp[2], aux);

        currentCup = cupsMap.get(currentCup);
    }
    
    let next = 1;
    let labels = [];
    for (let i=0;i<(advanced ? 2 : cups.length-1);i++) {
        let label = cupsMap.get(next);
        labels.push(label);
        next = label;
    }

    return labels;
}

let cups = rawInput.split("").map(m=> Number(m));

console.log("Using your labeling, simulate 100 moves. What are the labels on the cups after cup 1?\nA:",
    playCrabCups(cups).join("")
);

let result = playCrabCups(cups, true)
console.log("Determine which two cups will end up immediately clockwise of cup 1. What do you get if you multiply their labels together?\nA:",
    result[0] * result[1]
);