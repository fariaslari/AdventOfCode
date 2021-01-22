let rawEntry = "8\r\n131\r\n91\r\n35\r\n47\r\n116\r\n105\r\n121\r\n56\r\n62\r\n94\r\n72\r\n13\r\n82\r\n156\r\n102\r\n12\r\n59\r\n31\r\n138\r\n46\r\n120\r\n7\r\n127\r\n126\r\n111\r\n2\r\n123\r\n22\r\n69\r\n18\r\n157\r\n75\r\n149\r\n88\r\n81\r\n23\r\n98\r\n132\r\n1\r\n63\r\n142\r\n37\r\n133\r\n61\r\n112\r\n122\r\n128\r\n155\r\n145\r\n139\r\n66\r\n42\r\n134\r\n24\r\n60\r\n9\r\n28\r\n17\r\n29\r\n101\r\n148\r\n96\r\n68\r\n25\r\n19\r\n6\r\n67\r\n113\r\n55\r\n40\r\n135\r\n97\r\n79\r\n48\r\n159\r\n14\r\n43\r\n86\r\n36\r\n41\r\n85\r\n87\r\n119\r\n30\r\n108\r\n80\r\n152\r\n158\r\n151\r\n32\r\n78\r\n150\r\n95\r\n3\r\n52\r\n49";
let adapters = rawEntry.split("\r\n").map(m => Number(m)).sort((a,b) => a - b);

let d1 = 0;
let d2 = 0;
let d3 = 0;

let pivot = 0;
let i = 0;
while (i <= adapters.length) {
    let curr = adapters[i] || (adapters[adapters.length-1] + 3);
    let diff = curr - pivot;
    if (diff === 1) {
        d1++;
    } else if(diff === 2) {
        d2++;
    } else if(diff === 3) {
        d3++;
    }
    pivot = curr;
    i++;
}
console.log("What is the number of 1-jolt differences multiplied by the number of 3-jolt differences? \nA:", d1*d3);

function paths(list, pivot, cache) {
    let opts = list.filter(f => {
        let diff = (f - pivot);
        return diff >= 1 && diff <=3;
    });
    if (!opts.length) return 1;
    if (!cache[pivot]) {
        cache[pivot] = opts.reduce((acc, curr) => acc + paths(list, curr, cache), 0);
    }
    return cache[pivot];
}
console.log("What is the total number of distinct ways you can arrange the adapters to connect the charging outlet to your device? \nA:", paths(adapters, 0, {}));