function averagePair(nums, target) {
    // make 2 pointers: left (start) & right (end)
    // while the 2 pointers are not equal
        // get avg of pair at the 2 pointers
        // if avg is equal to target, return true
        // if avg is greater than target, decrement right by 1
        // else, increment left by 1 
    // return false;

    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        let currAvg = (nums[left] + nums[right]) / 2;
        if (currAvg === target) return true;
        else if (currAvg > target) right -= 1;
        else left += 1;
    }
    return false;
}
