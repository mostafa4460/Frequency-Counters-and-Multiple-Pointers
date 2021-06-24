function countPairs(nums, sum) {
    // make a count variable and set it to 0
    // make a set out of the nums array
    // loop over nums
        // subtract num from sum
        // check if the result is in the set
            // if so increment count
    // return count/2

    let count = 0,
        numsSet = new Set(nums);
    for (let num of nums) {
        let diff = sum - num;
        if (diff !== num && numsSet.has(diff)) count += 1;
    }
    return count/2;
}
