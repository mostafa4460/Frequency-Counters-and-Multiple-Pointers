function isSubsequence(subWord, fullWord) {
    // if the length of subWord is greater than fullWord: return false

    // make 2 pointers, p1 & p2, that start at the beginning of subWord & fullWord respectively
    // loop while p2 is less than the length of fullWord
        // if p1 is greater than or equal to the length of subWord, return true. 
        // else if ltr at p1 is equal to ltr at p2, increment both
        // else increment p2 only

    if (subWord.length > fullWord.length) return false;

    let p1 = 0,
        p2 = 0;
    while (p2 < fullWord.length) {
        if (p1 >= subWord.length) break;
        else if (subWord[p1] === fullWord[p2]) {
            p1 += 1;
            p2 += 1;
        }
        else p2 += 1;
    }
    if (p1 >= subWord.length) return true;
    else return false;
}
