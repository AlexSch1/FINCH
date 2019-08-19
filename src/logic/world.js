function getNumWord(num) {
    let word1 = 'число';
    let word2 = 'числа';
    let word5 = 'чисел';
    var dd = num % 100;

    if ((dd >= 11) && (dd <= 19)) {
        return word5;
    }

    var d = num % 10;

    if (d === 1) {
        return word1;
    }
    
    if ((d >= 2) && (d <= 4)) {
        return word2;
    }

    return word5;
}

export default getNumWord;