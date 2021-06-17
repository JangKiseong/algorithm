/**
 * Problems
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * Runtime: 136 ms (faster than 97.64%)
 * Memory Usage: 49.1 MB (less than 49.62%)
 */

const threeSum = (nums) => {
    if(nums.length < 3) return [];
    nums = nums.sort((a,b) => a-b);
    const answer = [];

    for(let pre=0;pre<nums.length-2;pre++){

        if(nums[pre] > 0) break;
        if(pre > 0 && nums[pre] === nums[pre-1]) continue;

        let middle = pre+1;
        let post = nums.length-1;

        while(middle < post){
            const sum = nums[pre] + nums[middle] + nums[post];

            if(sum === 0){
                answer.push([nums[pre], nums[middle], nums[post]]);
    
                while(nums[middle] === nums[middle+1]) middle++;
                while(nums[post] === nums[post-1]) post--;
    
                middle++;
                post--;
    
                continue;
            }
    
            if(sum < 0){
                middle++;
                continue;
            }
            if(sum > 0){
                post--;
                continue;
            }
        }
    }
    
    return answer;
};