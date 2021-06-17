/**
 * Problems
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * Runtime: 184 ms (faster than 9.62%)
 * Memory Usage: 39.6 MB (less than 24.88%)
 */

const twoSum = (nums, target) => {
    let pre = 0;
    let post = 1;

    while(true){
        if(nums[pre]+nums[post] === target){
            return [pre, post];
        } else if(post === nums.length){
            pre += 1;
            post = pre + 1;
        } else post++;
    }
    
};

/**
 * good example
 * Runtime: 72 ms (faster than 96.18%)
 * Memory Usage: 41.3 MB (less than 9.43%)
 */

const twoSum2 = (nums, target) => {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
};