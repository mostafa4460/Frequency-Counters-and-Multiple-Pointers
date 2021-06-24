function getNumFreq(num) {
    let numsFreq = new Map ();
    for (let n of String(num)) {
        let numFreq = (numsFreq.get(n) + 1) || 1;
        numsFreq.set(n, numFreq);
    }
    return numsFreq;
}

function sameFrequency(num1, num2) {
    // check if length of num1 === length of num2
        // if not, return false
    // make helper function to get the freq of each num in num1 & num2
    // loop over keys of num1Freq
        // check if each key exists in num2Freq and if so:
            // check if value is same
        // if not, return false
    // return true

    if (num1.length !== num2.length) return false;

    let num1Freq = getNumFreq(num1),
        num2Freq = getNumFreq(num2);
    for (let key of num1Freq.keys()) {
        if (num2Freq.get(key) === undefined) return false;
        else if (num2Freq.get(key) !== num1Freq.get(key)) return false;
    }
    return true;
}
