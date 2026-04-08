class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr ={}
        for(let i=0;i<nums.length;i++){

            let value = target - nums[i];
            if(value in arr){
                return [arr[value],i]
            }
            arr[nums[i]] = i;
        }
    }
}
