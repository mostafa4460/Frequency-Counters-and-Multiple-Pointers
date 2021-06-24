function getCharFreq(word) {
    // make charFreq variable and set it to {}
    // loop over each char in word
        // if char is in charFreq, increment the count by 1
        // else set char to 1
    // return charFreq

    let charFreq = {};
    for (let char of word) {
        charFreq[char] = (charFreq[char] + 1) || 1;
    }
    return charFreq;
}

function constructNote(msg, ltrs) {
    // make helper function getCharFreq that will get the frequency of each char in msg
    // get getCharFreq of msg & ltrs
    // loop over charFreq of msg and make sure that:
        // each key is in the charFreq of ltrs
        // the value (count) of each keys are equal

    let msgCharFreq = getCharFreq(msg),
        ltrsCharFreq = getCharFreq(ltrs);

    for (let k in msgCharFreq) {
        if (!ltrsCharFreq[k]) return false;
        else if (ltrsCharFreq[k] < msgCharFreq[k]) return false;
    }
    return true;
}
