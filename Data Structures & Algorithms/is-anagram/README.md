# Is Anagram

## Problem

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An anagram is a word formed by rearranging the letters of another, using all the original letters exactly once.

### Examples

| Input | Output |
|---|---|
| `s = "anagram"`, `t = "nagaram"` | `true` |
| `s = "rat"`, `t = "car"` | `false` |

### Constraints

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

---

## Approach — Sort & Compare

Sort both strings alphabetically and compare. Two strings are anagrams if and only if their sorted forms are identical.

**Time complexity:** O(n log n)  
**Space complexity:** O(n)

```js
class Solution {
    isAnagram(s, t) {
        return s.split('').sort().join('') === t.split('').sort().join('');
    }
}
```

> **Alternative (O(n)):** Use a frequency counter (hash map) to count characters in `s`, then decrement for each character in `t`. If any count goes below zero, they are not anagrams.

---

## Files

| File | Description |
|---|---|
| `submission-0.js` | Sort & Compare solution (JavaScript) |
