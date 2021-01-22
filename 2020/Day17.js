let rawInput = "...#..#.\r\n.....##.\r\n##..##.#\r\n#.#.##..\r\n#..#.###\r\n...##.#.\r\n#..##..#\r\n.#.#..#.";

function getAdjacentKeys(x, y, z, h, useHyper = false) {
    let adjacentCubesKeys = [];
    [-1, 0, 1].forEach(dX => {
        [-1, 0, 1].forEach(dY => {
            [-1, 0, 1].forEach(dZ => {
                if (useHyper) {
                    [-1, 0, 1].forEach(dH => {
                        adjacentCubesKeys.push([x+dX,y+dY,z+dZ,h+dH].join(","));
                    })
                } else {
                    adjacentCubesKeys.push([x+dX,y+dY,z+dZ,h].join(","));
                }
            })
        })
    });
    return adjacentCubesKeys.filter(c => c !== [x, y, z, h].join(","));
}

function simulateConwayCubes(rawInput, useHyper = false) {
    let pocketDimension = new Map();
    rawInput.split("\r\n").forEach((input, y) => {
        [...input].forEach((cube, x) => {
            pocketDimension.set([x, y, 0, 0].join(","), cube);
        });
    });
    
    for (let i=0;i<6;i++) {
        let initialValues = new Map(pocketDimension);

        pocketDimension.forEach((_, key) => {
            let [x, y, z, h] = key.split(",").map(m=> Number(m));
            let adjacentCubesKeys = getAdjacentKeys(x, y, z, h, useHyper);

            adjacentCubesKeys.forEach(adjacentKey => {
                let value = initialValues.get(adjacentKey);
                if (!value) {
                    initialValues.set(adjacentKey, ".")
                }
            })
        });

        initialValues.forEach((value, key) => {
            let [x, y, z, h] = key.split(",").map(m=> Number(m));
            let adjacentCubesKeys = getAdjacentKeys(x, y, z, h, useHyper);
            let activeCubesCount = adjacentCubesKeys.reduce((acc, cubeKey) => acc + (initialValues.get(cubeKey) === "#"), 0);

            if (activeCubesCount === 3) {
                pocketDimension.set(key, "#");
            } else if (value === "#" && activeCubesCount === 2) {
                pocketDimension.set(key, "#");
            } else {
                pocketDimension.set(key, ".");
            }

        });
    }
    
    return [...pocketDimension.values()].filter(cube => cube === "#").length;
}

console.log("Starting with your given initial configuration, simulate six cycles. How many cubes are left in the active state after the sixth cycle?\nA:", 
    simulateConwayCubes(rawInput)
);
console.log("Starting with your given initial configuration, simulate six cycles in a 4-dimensional space. How many cubes are left in the active state after the sixth cycle?\nA:", 
    simulateConwayCubes(rawInput, true)
);