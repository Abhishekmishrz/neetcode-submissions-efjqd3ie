# Duplicate Integer

## Problem

Given an integer array `nums`, return `true` if any value appears **more than once** in the array, otherwise return `false`.

### Examples

| Input | Output |
|---|---|
| `nums = [1, 2, 3, 3]` | `true` |
| `nums = [1, 2, 3, 4]` | `false` |

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

---

## Approach — Hash Set

Insert every element into a `Set`. If the set's size ends up smaller than the array length, at least one duplicate existed.

**Time complexity:** O(n)  
**Space complexity:** O(n)

```js
class Solution {
    hasDuplicate(nums) {
        let set = new Set(nums);
        return set.size !== nums.length;
    }
}
```

---

## Files

| File | Description |
|---|---|
| `submission-0.js` | Hash Set solution (JavaScript) |
