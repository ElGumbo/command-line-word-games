const inputPhrase = process.argv.slice(2)[0].split(" ");
const shiftNumber = Number(process.argv.slice(2)[1]);
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const result = [];

inputPhrase.forEach((word) => {
    word = word.toLowerCase();
    let newWord = "";
    for (let letter of word) {
        let shiftIndex = alphabet.indexOf(letter) + shiftNumber;

        if (shiftIndex >= alphabet.length) {
            shiftIndex = shiftIndex - alphabet.length;
        }
        if (shiftIndex < 0) {
            shiftIndex = shiftIndex + alphabet.length;
        }

        const newLetter = alphabet[shiftIndex];
        newWord += newLetter;
    }
    result.push(newWord);
});

console.log(result.join(" "));
