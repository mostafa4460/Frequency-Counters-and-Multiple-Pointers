function separatePositive(nums) {
    // make 2 pointers that start from beginning: i & j
    // while j is less than the length of nums
        // if nums[i] is positive, increment i
        // else if nums[j] is positive and nums[i] is negative, swap and increment i
        // increment j
    // return nums

    let i = 0,
        j = 0;
    while (j < nums.length) {
        if (nums[i] > 0) i += 1;
        else if (nums[i] < 0 && nums[j] > 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i += 1;
        }
        j += 1;
    }
    return nums;
}
