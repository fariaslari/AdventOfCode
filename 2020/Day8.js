let rawInput = "acc +17\r\nacc +37\r\nacc -13\r\njmp +173\r\nnop +100\r\nacc -7\r\njmp +447\r\nnop +283\r\nacc +41\r\nacc +32\r\njmp +1\r\njmp +585\r\njmp +1\r\nacc -5\r\nnop +71\r\nacc +49\r\nacc -18\r\njmp +527\r\njmp +130\r\njmp +253\r\nacc +11\r\nacc -11\r\njmp +390\r\njmp +597\r\njmp +1\r\nacc +6\r\nacc +0\r\njmp +588\r\nacc -17\r\njmp +277\r\nacc +2\r\nnop +163\r\njmp +558\r\nacc +38\r\njmp +369\r\nacc +13\r\njmp +536\r\nacc +38\r\nacc +39\r\nacc +6\r\njmp +84\r\nacc +11\r\nnop +517\r\nacc +48\r\nacc +47\r\njmp +1\r\nacc +42\r\nacc +0\r\nacc +2\r\nacc +24\r\njmp +335\r\nacc +44\r\nacc +47\r\njmp +446\r\nnop +42\r\nnop +74\r\nacc +45\r\njmp +548\r\njmp +66\r\nacc +1\r\njmp +212\r\nacc +18\r\njmp +1\r\nacc +4\r\nacc -16\r\njmp +366\r\nacc +0\r\njmp +398\r\nacc +45\r\njmp +93\r\nacc +40\r\nacc +38\r\nacc +21\r\nnop +184\r\njmp -46\r\nnop -9\r\njmp +53\r\nacc +46\r\nacc +36\r\njmp +368\r\nacc +16\r\nacc +8\r\nacc -9\r\nacc -4\r\njmp +328\r\nacc -15\r\nacc -5\r\nacc +21\r\njmp +435\r\nacc -5\r\nacc +36\r\njmp +362\r\nacc +26\r\njmp +447\r\njmp +1\r\njmp +412\r\nacc +11\r\nacc +41\r\nnop -32\r\nacc +17\r\njmp -63\r\njmp +1\r\nnop +393\r\njmp +62\r\nacc +18\r\nacc +30\r\nnop +417\r\njmp +74\r\nacc +29\r\nacc +23\r\njmp +455\r\njmp +396\r\njmp +395\r\nacc +33\r\nnop +137\r\nnop +42\r\njmp +57\r\njmp +396\r\nacc +7\r\nacc +0\r\njmp +354\r\nacc +15\r\nacc +50\r\njmp -12\r\njmp +84\r\nnop +175\r\nacc +5\r\nacc -2\r\njmp -82\r\nacc +1\r\nacc +26\r\njmp +288\r\nnop -113\r\nnop +366\r\nacc +45\r\njmp +388\r\nacc +21\r\nacc +38\r\njmp +427\r\nacc +33\r\njmp -94\r\nnop -118\r\nnop +411\r\njmp +472\r\nnop +231\r\nnop +470\r\nacc +48\r\njmp -124\r\njmp +1\r\nacc +5\r\nacc +37\r\nacc +42\r\njmp +301\r\nacc -11\r\nacc -17\r\nacc +14\r\njmp +357\r\nacc +6\r\nacc +20\r\nacc +13\r\njmp +361\r\njmp -65\r\nacc +29\r\njmp +26\r\njmp +329\r\nacc +32\r\nacc +32\r\nacc +17\r\njmp -102\r\nacc -6\r\nacc +33\r\nacc +9\r\njmp +189\r\nacc +3\r\njmp -128\r\njmp -142\r\nacc +24\r\nacc -5\r\njmp +403\r\nacc +28\r\njmp +310\r\nacc +34\r\nacc +4\r\nacc +33\r\nacc +18\r\njmp +227\r\nacc -8\r\nacc -15\r\njmp +112\r\njmp +54\r\nacc +21\r\nacc +23\r\nacc +20\r\njmp +320\r\nacc +13\r\njmp -77\r\nacc +15\r\nnop +310\r\nnop +335\r\njmp +232\r\nacc -3\r\nnop +50\r\nacc +41\r\njmp +112\r\nnop -10\r\nacc +29\r\nacc +27\r\njmp +52\r\nacc +40\r\nnop -132\r\nacc -16\r\nacc +27\r\njmp +309\r\nacc -8\r\nnop +147\r\nacc +20\r\nacc +46\r\njmp +202\r\nacc +27\r\njmp -43\r\njmp +1\r\nacc +33\r\nacc -13\r\njmp +300\r\nacc +1\r\njmp -202\r\nacc -17\r\nacc +0\r\nacc +34\r\njmp -5\r\nnop +335\r\nacc -16\r\nacc -17\r\njmp -120\r\nacc -19\r\nacc -13\r\nacc +4\r\njmp +368\r\njmp +21\r\nacc +39\r\nacc +39\r\nacc -18\r\njmp -157\r\nnop +280\r\nacc +33\r\nnop -37\r\njmp +32\r\nacc -16\r\nacc +18\r\nacc +46\r\njmp -121\r\nacc -19\r\njmp +195\r\nacc +28\r\njmp +124\r\njmp +331\r\njmp -228\r\njmp -146\r\njmp +85\r\njmp +60\r\nacc +20\r\nacc -9\r\njmp +303\r\njmp -122\r\njmp +111\r\nacc +32\r\nacc +0\r\nacc +39\r\nacc +29\r\njmp -31\r\nnop +320\r\njmp -63\r\njmp +223\r\nnop -149\r\nacc -12\r\nacc -11\r\nacc +32\r\njmp +309\r\njmp -13\r\nacc -19\r\njmp -123\r\nacc +21\r\nacc +18\r\nacc +49\r\njmp +175\r\nacc -14\r\nnop -129\r\nacc -2\r\nacc +31\r\njmp +79\r\nacc +23\r\nacc +50\r\nacc +39\r\nacc +7\r\njmp -235\r\njmp -166\r\nacc +9\r\njmp +293\r\nacc -11\r\njmp +76\r\nacc +44\r\nacc +3\r\nacc +37\r\njmp +123\r\nnop -104\r\njmp -157\r\nacc +14\r\nacc +10\r\nacc +28\r\njmp +25\r\nacc +37\r\njmp +188\r\njmp -49\r\nacc -11\r\njmp -90\r\nacc -8\r\njmp +197\r\nacc +5\r\njmp +115\r\nacc +44\r\njmp -228\r\nnop -2\r\nacc +46\r\njmp +130\r\nnop +183\r\nnop +106\r\nacc +27\r\nacc +37\r\njmp -309\r\nacc +28\r\nacc -4\r\nacc -12\r\nacc +38\r\njmp +93\r\nacc +8\r\nacc +23\r\nacc -9\r\nacc +6\r\njmp -42\r\nacc +10\r\nacc +35\r\nacc +4\r\njmp -231\r\nacc +19\r\nacc +7\r\nacc +23\r\nacc +11\r\njmp -90\r\nacc +0\r\nnop +158\r\nnop -150\r\nacc +33\r\njmp +107\r\nacc +48\r\nacc -2\r\njmp -104\r\nacc +6\r\nnop -57\r\nnop +172\r\nacc -11\r\njmp -7\r\nacc +6\r\nacc +50\r\nacc -9\r\nacc +12\r\njmp -171\r\nacc +3\r\njmp +26\r\nacc +42\r\nacc +31\r\nacc +20\r\nacc +32\r\njmp -48\r\nacc +13\r\njmp -6\r\njmp +178\r\nacc +47\r\njmp -153\r\nacc +28\r\nnop +74\r\njmp -162\r\nacc -15\r\nnop -104\r\nacc -9\r\njmp -227\r\nacc +49\r\nacc -19\r\nacc +41\r\njmp -318\r\nacc +9\r\nacc +12\r\nacc +7\r\njmp +34\r\njmp +137\r\nnop -143\r\nacc -8\r\nacc +5\r\nacc +31\r\njmp -20\r\njmp -237\r\nacc +39\r\nacc +0\r\njmp -298\r\nacc +45\r\nacc -19\r\nacc +11\r\njmp -151\r\nacc +40\r\nacc +27\r\nnop +150\r\nnop -391\r\njmp -341\r\nacc +1\r\nacc +11\r\nacc +18\r\nnop -234\r\njmp +77\r\nnop +104\r\njmp -65\r\nacc +32\r\njmp -27\r\nnop -317\r\nnop +159\r\nacc +14\r\nacc -10\r\njmp -348\r\nacc +29\r\njmp +32\r\nacc +48\r\nacc -19\r\njmp +17\r\njmp -201\r\njmp -224\r\nnop +26\r\nacc -7\r\nacc +23\r\nacc +46\r\njmp -6\r\nacc +22\r\nacc +39\r\nacc +9\r\nacc +23\r\njmp -30\r\njmp -243\r\nacc +47\r\nacc -15\r\njmp -298\r\njmp -393\r\njmp +1\r\nacc +3\r\nnop -24\r\nacc +7\r\njmp -59\r\nacc -6\r\nacc +26\r\njmp -102\r\nacc +34\r\nacc +24\r\njmp -207\r\nacc +36\r\nacc +40\r\nacc +41\r\njmp +1\r\njmp -306\r\njmp +57\r\njmp +1\r\nnop +99\r\nacc +28\r\njmp -391\r\nacc +50\r\njmp -359\r\nacc -5\r\njmp +9\r\njmp -355\r\nacc +5\r\nacc +2\r\njmp -77\r\nacc +40\r\nacc +28\r\nacc +22\r\njmp -262\r\nnop -287\r\nacc +34\r\nacc -4\r\nnop +112\r\njmp -195\r\nacc +29\r\nnop -94\r\nnop -418\r\njmp +24\r\njmp -190\r\nacc +2\r\njmp -311\r\njmp -178\r\njmp -276\r\nacc -12\r\nacc -18\r\njmp +62\r\njmp -174\r\nnop +31\r\nacc +33\r\nnop -158\r\njmp -417\r\nacc +3\r\nacc +21\r\nacc +47\r\njmp +87\r\nacc +45\r\njmp -77\r\nacc +6\r\nacc -10\r\njmp +1\r\njmp -240\r\nacc +7\r\nacc +47\r\njmp -379\r\nacc -14\r\nacc +50\r\nnop -75\r\nacc +30\r\njmp +70\r\njmp -392\r\njmp -430\r\nacc +22\r\nacc -2\r\njmp -492\r\njmp +1\r\nacc -6\r\nacc +38\r\njmp -36\r\nnop -336\r\njmp -32\r\njmp +61\r\nacc +20\r\nacc -9\r\nacc +2\r\njmp -175\r\nacc +21\r\nacc -2\r\njmp -6\r\njmp -527\r\nacc +11\r\nacc +16\r\njmp -262\r\njmp +1\r\nnop -327\r\nacc +29\r\njmp -114\r\nacc +11\r\nacc +17\r\nacc +26\r\nnop -104\r\njmp -428\r\nnop -178\r\nnop -242\r\nacc +29\r\nacc +5\r\njmp -245\r\njmp -417\r\njmp -278\r\nacc +35\r\nacc +21\r\njmp +1\r\nnop -263\r\njmp +8\r\nacc +42\r\njmp -95\r\nnop -312\r\nacc -11\r\nacc +34\r\nacc +0\r\njmp +19\r\nacc +8\r\nacc -13\r\nacc +32\r\nacc +21\r\njmp -208\r\nacc +15\r\nacc +39\r\nnop -194\r\njmp -280\r\njmp +24\r\nnop -516\r\nacc +21\r\nacc +48\r\njmp -367\r\njmp -121\r\nacc +49\r\nacc -16\r\njmp -136\r\nacc +0\r\njmp -148\r\njmp -85\r\njmp -103\r\nnop -446\r\njmp -242\r\nacc -12\r\nacc +13\r\nacc +31\r\nacc -1\r\njmp -435\r\nnop -420\r\nacc +22\r\nacc -5\r\njmp -567\r\nnop -354\r\nacc +11\r\nacc +33\r\nacc +45\r\njmp -76\r\nacc -2\r\nacc +0\r\nacc +25\r\nacc +46\r\njmp -555\r\nacc +0\r\nacc +11\r\nnop -2\r\njmp -394\r\njmp -395\r\nacc +8\r\nacc +14\r\nacc +47\r\nacc +22\r\nnop +1";

let instructions = rawInput.split("\r\n").map((m)=>{
    let instruction = m.match(/([a-z]{3}) (\+|-)(\d+)/);
    return {
        op: instruction[1],
        forward: instruction[2] === "+",
        line: Number(instruction[3])
    }
});

function handheldGameConsoleOperations(fixCode = false) {
    let index = 0, acc = 0,  arrInstructions = [], savedIndex = 0;
    while (true) {
        if (instructions[index] === undefined) {
            return acc;
        } else if (arrInstructions.indexOf(instructions[index]) >= 0) {
            if (fixCode) {
                savedIndex++;
                acc = index = (arrInstructions = []).length            
            } else {
                return acc;
            }
        } else {
            arrInstructions.push(instructions[index])
        }

        if (instructions[index].op === "acc") {
            if (instructions[index].forward) {
                acc += instructions[index].line;
            } else {
                acc -= instructions[index].line;
            }
            index++;
        } else if (instructions[index].op === "jmp") {
            if (fixCode && index === savedIndex) {
                index++;
            } else {
                if (instructions[index].forward) {
                    index += instructions[index].line;
                } else {
                    index -= instructions[index].line;
                }
            }
        } else if (instructions[index].op === "nop") {
            if (fixCode && index === savedIndex) {
                if (instructions[index].forward) {
                    index += instructions[index].line;
                } else {
                    index -= instructions[index].line;
                }
            } else {
                index++;
            }
        }
    }
}

console.log("Run your copy of the boot code. Immediately before any instruction is executed a second time, what value is in the accumulator?\nA:",
    handheldGameConsoleOperations()
);

console.log("Fix the program so that it terminates normally by changing exactly one jmp (to nop) or nop (to jmp). What is the value of the accumulator after the program terminates?\nA:",
    handheldGameConsoleOperations(true)
);