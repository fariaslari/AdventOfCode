let rawInput = "16915772\r\n18447943";

function findEncryptionKey(cardPublicKey, doorPublicKey) {
    let cardSecretLoop = 1;
    let encryptionKey = 1;
    while (cardSecretLoop !== cardPublicKey) {
        cardSecretLoop = (cardSecretLoop * 7) % 20201227;
        encryptionKey = (encryptionKey * doorPublicKey) % 20201227;
    }
    
    return encryptionKey;
}

let [cardPublicKey, doorPublicKey] = rawInput.split("\r\n").map(m=> Number(m));
console.log("What encryption key is the handshake trying to establish?\nA:", findEncryptionKey(cardPublicKey, doorPublicKey));