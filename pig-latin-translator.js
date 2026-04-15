const userInput = process.argv.slice(2);
const vowels = ["a", "e", "i", "o", "u"];
const result = [];

userInput.forEach((word) => {
    word = word.toLowerCase();
    const firstLetter = word[0];
    const secondLetter = word[1];
    const isFirstVowel = vowels.includes(firstLetter);
    const isSecondVowel = vowels.includes(secondLetter);
    

    if (!isFirstVowel && isSecondVowel) {
        result.push(word.slice(1) + firstLetter + "ay");
    } else if (!isFirstVowel && !isSecondVowel) {
        result.push(word.slice(2) + firstLetter + secondLetter + "ay");
    } else if (isFirstVowel) {
        result.push(word + "way");
    }
});

console.log(result.join(" "));
