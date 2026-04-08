# Two Integer Sum (Two Sum)

## Problem

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers that add up to `target`.

You may assume that each input has **exactly one solution**, and you may not use the same element twice. The answer can be returned in any order.

### Examples

| Input | Output |
|---|---|
| `nums = [2, 7, 11, 15]`, `target = 9` | `[0, 1]` |
| `nums = [3, 4]`, `target = 7` | `[0, 1]` |

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

---

## Approach — Hash Map (One Pass)

While iterating, store each number's index in a hash map. For every element, check whether its complement (`target - nums[i]`) already exists in the map. If it does, return both indices immediately.

**Time complexity:** O(n)  
**Space complexity:** O(n)

```js
class Solution {
    twoSum(nums, target) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (complement in map) {
                return [map[complement], i];
            }
            map[nums[i]] = i;
        }
    }
}
```

---

## Files

| File | Description |
|---|---|
| `submission-0.js` | Hash Map solution (JavaScript) |
| `submission-1.js` | Hash Map solution (JavaScript) |
| `submission-3.js` | Hash Map solution (JavaScript) |
