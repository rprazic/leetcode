function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const median: number = Math.floor(start + (end - start) / 2);
        if (nums[median] === target) {
            return median;
        }

        if (target > nums[median]) {
            start = median + 1;
        } else {
            end = median - 1;
        }
    }

    return -1;
};
