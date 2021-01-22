let rawInput = "1000066\r\n13,x,x,41,x,x,x,37,x,x,x,x,x,659,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,29,x,409,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17";

function printEarliestDeparture(earliestTimestamp, bussess) {
    let currTime = earliestTimestamp;
    let busIds = bussess.filter(f=> f !== 'x').map(m => Number(m))
    let earliestDeparture;
    let earliestBus;
    while(true) {
        busIds.forEach(bId => {
            if (currTime % bId === 0) {
                earliestDeparture = currTime;
                earliestBus = bId;
            }
        })
       
        if (!!earliestDeparture && earliestDeparture > 0) {
            console.log("What is the ID of the earliest bus you can take to the airport multiplied by the number of minutes you'll need to wait for that bus?\nA: ", 
                (earliestDeparture - earliestTimestamp) * earliestBus
            );
            break;
        }
        currTime++;
    }
}

function printSubsequentDepartures(busses) {
    let busIds = busses.map(m => m === "x" ? 1 : Number(m));
    let currTime = 0;
    let incrementador = 1;
    while(true) {
        let subSeqMatches = 0;;
        let currBus = 0;
        let bId = busIds[currBus];
    
        if (currTime % bId === 0) {
            incrementador = bId;
            subSeqMatches++;
            currBus++;
            while (currBus <= busIds.length) {
                bId = busIds[currBus];
                if ((currTime + currBus) % bId === 0) {
                    incrementador *= bId;
                    subSeqMatches++;
                }
                currBus++;
            }
        }
        
        if(subSeqMatches === busIds.length) {
            console.log("What is the earliest timestamp such that all of the listed bus IDs depart at offsets matching their positions in the list?\nA: ", currTime);
            break;
        }
        currTime += incrementador;
    }
}

let input = rawInput.split("\r\n");
let busList = input[1].split(",");

printEarliestDeparture(Number(input[0]), busList);
printSubsequentDepartures(busList);