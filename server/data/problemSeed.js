export const problemsSeed =[
  {
    "title": "Add Two Numbers",
    "description": "Write add(a,b) that returns sum of two numbers.",
    "difficulty": "beginner",
    "tags": ["math","basic"],
    "inputExample": "add(3,5)",
    "outputExample": "8",
    "constraints": "Numbers are integers.",
    "starterCode": "function add(a,b){\n  // return sum\n}",
    "solution": "function add(a,b){return a+b;}",
    "testCases": [
      {"input":"add(2,3)","output":"5"},
      {"input":"add(-1,5)","output":"4"},
      {"input":"add(100,200)","output":"300"}
    ]
  },
  {
    "title": "Subtract Two Numbers",
    "description": "Write subtract(a,b) that returns a-b.",
    "difficulty": "beginner",
    "tags": ["math","basic"],
    "inputExample": "subtract(5,3)",
    "outputExample": "2",
    "constraints": "Integers.",
    "starterCode": "function subtract(a,b){\n  // return a-b\n}",
    "solution": "function subtract(a,b){return a-b;}",
    "testCases": [
      {"input":"subtract(5,3)","output":"2"},
      {"input":"subtract(0,5)","output":"-5"},
      {"input":"subtract(-2,-3)","output":"1"}
    ]
  },
  {
    "title": "Multiply Two Numbers",
    "description": "Write multiply(a,b) that returns product.",
    "difficulty": "beginner",
    "tags": ["math","basic"],
    "inputExample": "multiply(2,3)",
    "outputExample": "6",
    "constraints": "Integers.",
    "starterCode": "function multiply(a,b){\n  // return product\n}",
    "solution": "function multiply(a,b){return a*b;}",
    "testCases": [
      {"input":"multiply(2,3)","output":"6"},
      {"input":"multiply(-1,5)","output":"-5"},
      {"input":"multiply(0,100)","output":"0"}
    ]
  },
  {
    "title": "Divide Two Numbers",
    "description": "Write divide(a,b) that returns integer division a/b (floor for positive).",
    "difficulty": "beginner",
    "tags": ["math"],
    "inputExample": "divide(7,2)",
    "outputExample": "3",
    "constraints": "b != 0",
    "starterCode": "function divide(a,b){\n  // integer division\n}",
    "solution": "function divide(a,b){return Math.trunc(a/b);}",
    "testCases": [
      {"input":"divide(7,2)","output":"3"},
      {"input":"divide(5,2)","output":"2"},
      {"input":"divide(-7,2)","output":"-3"}
    ]
  },
  {
    "title": "Factorial",
    "description": "Return factorial of n.",
    "difficulty": "beginner",
    "tags": ["math","recursion"],
    "inputExample": "factorial(5)",
    "outputExample": "120",
    "constraints": "0 ≤ n ≤ 15",
    "starterCode": "function factorial(n){\n  // compute factorial\n}",
    "solution": "function factorial(n){if(n<=1) return 1; return n*factorial(n-1);}",
    "testCases": [
      {"input":"factorial(5)","output":"120"},
      {"input":"factorial(0)","output":"1"},
      {"input":"factorial(1)","output":"1"}
    ]
  },
  {
    "title": "Fibonacci Number",
    "description": "Return nth Fibonacci number (fib(0)=0,fib(1)=1).",
    "difficulty": "beginner",
    "tags": ["math","recursion"],
    "inputExample": "fib(6)",
    "outputExample": "8",
    "constraints": "n ≤ 30",
    "starterCode": "function fib(n){\n  // compute nth fib\n}",
    "solution": "function fib(n){if(n<=1) return n; return fib(n-1)+fib(n-2);}",
    "testCases": [
      {"input":"fib(6)","output":"8"},
      {"input":"fib(1)","output":"1"},
      {"input":"fib(0)","output":"0"}
    ]
  },
  {
    "title": "Sum of Array",
    "description": "Return sum of numbers in an array.",
    "difficulty": "beginner",
    "tags": ["array","reduce"],
    "inputExample": "sumArray([1,2,3])",
    "outputExample": "6",
    "constraints": "Array length ≤ 1000",
    "starterCode": "function sumArray(arr){\n  // return sum\n}",
    "solution": "function sumArray(arr){return arr.reduce((s,n)=>s+n,0);}",
    "testCases": [
      {"input":"sumArray([1,2,3])","output":"6"},
      {"input":"sumArray([])","output":"0"},
      {"input":"sumArray([-1,1])","output":"0"}
    ]
  },
  {
    "title": "Find Maximum in Array",
    "description": "Return maximum number inside array.",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "maxInArray([1,5,3])",
    "outputExample": "5",
    "constraints": "Array non-empty",
    "starterCode": "function maxInArray(arr){\n  // return max\n}",
    "solution": "function maxInArray(arr){return Math.max(...arr);}",
    "testCases": [
      {"input":"maxInArray([1,2,3])","output":"3"},
      {"input":"maxInArray([-1,-5,-2])","output":"-1"},
      {"input":"maxInArray([100])","output":"100"}
    ]
  },
  {
    "title": "Find Minimum in Array",
    "description": "Return minimum number inside array.",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "minInArray([1,5,3])",
    "outputExample": "1",
    "constraints": "Array non-empty",
    "starterCode": "function minInArray(arr){\n  // return min\n}",
    "solution": "function minInArray(arr){return Math.min(...arr);}",
    "testCases": [
      {"input":"minInArray([1,2,3])","output":"1"},
      {"input":"minInArray([-1,-5,-2])","output":"-5"},
      {"input":"minInArray([0])","output":"0"}
    ]
  },
  {
    "title": "Array Contains Value",
    "description": "Check if value exists in array.",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "contains([1,2,3],2)",
    "outputExample": "true",
    "constraints": "Boolean output as string 'true'/'false'.",
    "starterCode": "function contains(arr,val){\n  // return true/false\n}",
    "solution": "function contains(arr,val){return arr.includes(val);}",
    "testCases": [
      {"input":"contains([1,2],2)","output":"true"},
      {"input":"contains([1,2],3)","output":"false"},
      {"input":"contains([],1)","output":"false"}
    ]
  },
  {
    "title": "Intersection of Arrays",
    "description": "Return common elements of two arrays as comma-separated string.",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "intersection([1,2,3],[2,3,4])",
    "outputExample": "2,3",
    "constraints": "Order: elements in first array order.",
    "starterCode": "function intersection(arr1,arr2){\n  // return common\n}",
    "solution": "function intersection(a,b){return a.filter(x=>b.includes(x));}",
    "testCases": [
      {"input":"intersection([1,2],[2,3])","output":"2"},
      {"input":"intersection([1,2,3],[4,5])","output":""},
      {"input":"intersection([1,1,2],[1])","output":"1"}
    ]
  },
  {
    "title": "Remove Duplicates",
    "description": "Return array with duplicates removed (keep order).",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "unique([1,1,2])",
    "outputExample": "1,2",
    "constraints": "Return CSV string of items.",
    "starterCode": "function unique(arr){\n  // remove duplicates\n}",
    "solution": "function unique(arr){return [...new Set(arr)];}",
    "testCases": [
      {"input":"unique([1,1,2])","output":"1,2"},
      {"input":"unique([])","output":""},
      {"input":"unique([5,5,5])","output":"5"}
    ]
  },
  {
    "title": "Reverse String",
    "description": "Return reversed string.",
    "difficulty": "beginner",
    "tags": ["string"],
    "inputExample": "reverseString(\"hello\")",
    "outputExample": "olleh",
    "constraints": "Case-sensitive.",
    "starterCode": "function reverseString(s){\n  // reverse\n}",
    "solution": "function reverseString(s){return s.split('').reverse().join('');}",
    "testCases": [
      {"input":"reverseString(\"hello\")","output":"olleh"},
      {"input":"reverseString(\"\")","output":""},
      {"input":"reverseString(\"a\")","output":"a"}
    ]
  },
  {
    "title": "Palindrome Check",
    "description": "Return true if string is palindrome.",
    "difficulty": "beginner",
    "tags": ["string"],
    "inputExample": "isPalindrome(\"madam\")",
    "outputExample": "true",
    "constraints": "Case-sensitive.",
    "starterCode": "function isPalindrome(s){\n  // check\n}",
    "solution": "function isPalindrome(s){return s===s.split('').reverse().join('');}",
    "testCases": [
      {"input":"isPalindrome(\"madam\")","output":"true"},
      {"input":"isPalindrome(\"hello\")","output":"false"},
      {"input":"isPalindrome(\"\")","output":"true"}
    ]
  },
  {
    "title": "Count Vowels",
    "description": "Count vowels in a string.",
    "difficulty": "beginner",
    "tags": ["string"],
    "inputExample": "countVowels(\"hello\")",
    "outputExample": "2",
    "constraints": "Lowercase letters.",
    "starterCode": "function countVowels(s){\n  // count vowels\n}",
    "solution": "function countVowels(s){return (s.match(/[aeiou]/g)||[]).length;}",
    "testCases": [
      {"input":"countVowels(\"hello\")","output":"2"},
      {"input":"countVowels(\"bcdf\")","output":"0"},
      {"input":"countVowels(\"\")","output":"0"}
    ]
  },
  {
    "title": "String Compression",
    "description": "Compress consecutive letters: aaabb -> a3b2.",
    "difficulty": "beginner",
    "tags": ["string"],
    "inputExample": "compress(\"aaabb\")",
    "outputExample": "a3b2",
    "constraints": "Only letters.",
    "starterCode": "function compress(s){\n  // compress\n}",
    "solution": "function compress(s){if(!s) return \"\";let r='',c=1;for(let i=1;i<=s.length;i++){if(s[i]===s[i-1])c++;else{r+=s[i-1]+(c>1?c:'');c=1;}}return r;}",
    "testCases": [
      {"input":"compress(\"aaabb\")","output":"a3b2"},
      {"input":"compress(\"aabb\")","output":"a2b2"},
      {"input":"compress(\"\")","output":""}
    ]
  },
  {
    "title": "Count Characters",
    "description": "Return frequency map of characters as key:value CSV (a:2,b:1).",
    "difficulty": "beginner",
    "tags": ["string","hashmap"],
    "inputExample": "charCount(\"aab\")",
    "outputExample": "a:2,b:1",
    "constraints": "Lowercase letters.",
    "starterCode": "function charCount(s){\n  // return counts\n}",
    "solution": "function charCount(s){let m={};for(let ch of s) m[ch]=(m[ch]||0)+1;return Object.entries(m).map(([k,v])=>k+':'+v).join(',');}",
    "testCases": [
      {"input":"charCount(\"aab\")","output":"a:2,b:1"},
      {"input":"charCount(\"\")","output":""},
      {"input":"charCount(\"abca\")","output":"a:2,b:1,c:1"}
    ]
  },
  {
    "title": "First Unique Character",
    "description": "Return index of first non-repeating char or -1.",
    "difficulty": "beginner",
    "tags": ["string","hashmap"],
    "inputExample": "firstUnique(\"leetcode\")",
    "outputExample": "0",
    "constraints": "Return integer index.",
    "starterCode": "function firstUnique(s){\n  // find index\n}",
    "solution": "function firstUnique(s){let m={};for(let i=0;i<s.length;i++)m[s[i]]=(m[s[i]]||0)+1;for(let i=0;i<s.length;i++)if(m[s[i]]===1) return i;return -1;}",
    "testCases": [
      {"input":"firstUnique(\"leetcode\")","output":"0"},
      {"input":"firstUnique(\"loveleetcode\")","output":"2"},
      {"input":"firstUnique(\"\")","output":"-1"}
    ]
  },
  {
    "title": "Rotate Array Right",
    "description": "Rotate array to right by k steps.",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "rotate([1,2,3,4,5],2)",
    "outputExample": "4,5,1,2,3",
    "constraints": "0 ≤ k",
    "starterCode": "function rotate(arr,k){\n  // rotate\n}",
    "solution": "function rotate(arr,k){k=k%arr.length;return arr.slice(-k).concat(arr.slice(0,arr.length-k));}",
    "testCases": [
      {"input":"rotate([1,2,3,4,5],2)","output":"4,5,1,2,3"},
      {"input":"rotate([1,2,3],3)","output":"1,2,3"},
      {"input":"rotate([1],10)","output":"1"}
    ]
  },
  {
    "title": "Two Sum",
    "description": "Return indices of two numbers that add to target (first pair).",
    "difficulty": "beginner",
    "tags": ["array","hashmap"],
    "inputExample": "twoSum([2,7,11,15],9)",
    "outputExample": "0,1",
    "constraints": "Exactly one solution.",
    "starterCode": "function twoSum(arr,target){\n  // return indices CSV\n}",
    "solution": "function twoSum(nums,t){let m={};for(let i=0;i<nums.length;i++){if(m[nums[i]]!==undefined) return [m[nums[i]],i]; m[t-nums[i]]=i;} }",
    "testCases": [
      {"input":"twoSum([2,7,11,15],9)","output":"0,1"},
      {"input":"twoSum([3,2,4],6)","output":"1,2"},
      {"input":"twoSum([3,3],6)","output":"0,1"}
    ]
  },
  {
    "title": "Merge Two Sorted Arrays",
    "description": "Merge two sorted arrays and return sorted array.",
    "difficulty": "beginner",
    "tags": ["array","merge"],
    "inputExample": "merge([1,3,5],[2,4,6])",
    "outputExample": "1,2,3,4,5,6",
    "constraints": "Arrays sorted ascending.",
    "starterCode": "function merge(a,b){\n  // merge\n}",
    "solution": "function merge(a,b){let i=0,j=0,r=[];while(i<a.length&&j<b.length) r.push(a[i]<b[j]?a[i++]:b[j++]);return r.concat(a.slice(i)).concat(b.slice(j));}",
    "testCases": [
      {"input":"merge([1,3,5],[2,4,6])","output":"1,2,3,4,5,6"},
      {"input":"merge([],[])","output":""},
      {"input":"merge([1],[0])","output":"0,1"}
    ]
  },
  {
    "title": "Find Index of Element",
    "description": "Return index of first occurrence or -1.",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "indexOf([1,2,3],2)",
    "outputExample": "1",
    "constraints": "Return -1 if not found.",
    "starterCode": "function indexOf(arr,val){\n  // return index\n}",
    "solution": "function indexOf(arr,val){return arr.indexOf(val);}",
    "testCases": [
      {"input":"indexOf([1,2,3],2)","output":"1"},
      {"input":"indexOf([1,2,3],5)","output":"-1"},
      {"input":"indexOf([],1)","output":"-1"}
    ]
  },
  {
    "title": "Move Zeroes",
    "description": "Move all zeroes to end preserving order of non-zero elements (return CSV).",
    "difficulty": "beginner",
    "tags": ["array"],
    "inputExample": "moveZeroes([0,1,0,3,12])",
    "outputExample": "1,3,12,0,0",
    "constraints": "In-place not required.",
    "starterCode": "function moveZeroes(arr){\n  // move zeros\n}",
    "solution": "function moveZeroes(a){let r=a.filter(x=>x!==0);return r.concat(Array(a.length-r.length).fill(0));}",
    "testCases": [
      {"input":"moveZeroes([0,1,0,3,12])","output":"1,3,12,0,0"},
      {"input":"moveZeroes([0])","output":"0"},
      {"input":"moveZeroes([1,2])","output":"1,2"}
    ]
  },
  {
    "title": "Valid Anagram",
    "description": "Check if two strings are anagrams.",
    "difficulty": "beginner",
    "tags": ["string","hashmap"],
    "inputExample": "isAnagram(\"anagram\",\"nagaram\")",
    "outputExample": "true",
    "constraints": "Lowercase letters.",
    "starterCode": "function isAnagram(s,t){\n  // check\n}",
    "solution": "function isAnagram(s,t){let a=[...s].sort().join(''),b=[...t].sort().join('');return a===b;}",
    "testCases": [
      {"input":"isAnagram(\"anagram\",\"nagaram\")","output":"true"},
      {"input":"isAnagram(\"rat\",\"car\")","output":"false"},
      {"input":"isAnagram(\"\",\"\")","output":"true"}
    ]
  },
  {
    "title": "Rotate Matrix 90°",
    "description": "Given NxN matrix, rotate by 90 degrees clockwise and return flattened CSV rows.",
    "difficulty": "intermediate",
    "tags": ["matrix"],
    "inputExample": "rotateMatrix([[1,2],[3,4]])",
    "outputExample": "3,1,4,2",
    "constraints": "Square matrix.",
    "starterCode": "function rotateMatrix(mat){\n  // rotate\n}",
    "solution": "function rotateMatrix(m){let n=m.length;let r=Array.from({length:n},()=>Array(n));for(let i=0;i<n;i++)for(let j=0;j<n;j++)r[j][n-1-i]=m[i][j];return r.flat();}",
    "testCases": [
      {"input":"rotateMatrix([[1,2],[3,4]])","output":"3,1,4,2"},
      {"input":"rotateMatrix([[1]])","output":"1"},
      {"input":"rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])","output":"7,4,1,8,5,2,9,6,3"}
    ]
  },
  {
    "title": "Balanced Parentheses",
    "description": "Check if parentheses string is valid.",
    "difficulty": "beginner",
    "tags": ["stack","string"],
    "inputExample": "isValid(\"()[]{}\")",
    "outputExample": "true",
    "constraints": "Characters are (),{},[] only.",
    "starterCode": "function isValid(s){\n  // check\n}",
    "solution": "function isValid(s){let m={')':'(',']':'[','}':'{'};let st=[];for(let c of s){if(m[c]){if(st.pop()!=m[c])return false;}else st.push(c);}return st.length===0;}",
    "testCases": [
      {"input":"isValid(\"()\")","output":"true"},
      {"input":"isValid(\"(])\")","output":"false"},
      {"input":"isValid(\"\")","output":"true"}
    ]
  },
  {
    "title": "Evaluate Reverse Polish Notation",
    "description": "Evaluate RPN expression tokens and return result.",
    "difficulty": "intermediate",
    "tags": ["stack","math"],
    "inputExample": "evalRPN([\"2\",\"1\",\"+\",\"3\",\"*\"])",
    "outputExample": "9",
    "constraints": "Operators +,-,*,/; integer division trunc toward zero.",
    "starterCode": "function evalRPN(tokens){\n  // evaluate\n}",
    "solution": "function evalRPN(t){let st=[];for(let x of t){if(!isNaN(x)) st.push(Number(x)); else{let b=st.pop(),a=st.pop(); if(x=='+')st.push(a+b); if(x=='-')st.push(a-b); if(x=='*')st.push(a*b); if(x=='/')st.push(Math.trunc(a/b));}}return st.pop();}",
    "testCases": [
      {"input":"evalRPN([\"2\",\"1\",\"+\",\"3\",\"*\"])","output":"9"},
      {"input":"evalRPN([\"4\",\"13\",\"5\",\"/\",\"+\"])","output":"6"},
      {"input":"evalRPN([\"3\",\"-4\",\"+\"])","output":"-1"}
    ]
  },
  {
    "title": "Climbing Stairs",
    "description": "Number of ways to climb n stairs taking 1 or 2 steps.",
    "difficulty": "beginner",
    "tags": ["dp","math"],
    "inputExample": "climbStairs(3)",
    "outputExample": "3",
    "constraints": "n ≤ 45",
    "starterCode": "function climbStairs(n){\n  // ways\n}",
    "solution": "function climbStairs(n){let a=1,b=1;for(let i=2;i<=n;i++){let c=a+b;a=b;b=c;}return b;}",
    "testCases": [
      {"input":"climbStairs(2)","output":"2"},
      {"input":"climbStairs(3)","output":"3"},
      {"input":"climbStairs(4)","output":"5"}
    ]
  },
  {
    "title": "Merge Intervals",
    "description": "Merge overlapping intervals and return merged array flattened as CSV pairs.",
    "difficulty": "intermediate",
    "tags": ["intervals","array"],
    "inputExample": "mergeIntervals([[1,3],[2,6],[8,10]])",
    "outputExample": "1,6,8,10",
    "constraints": "Intervals as [start,end]",
    "starterCode": "function mergeIntervals(intervals){\n  // merge\n}",
    "solution": "function mergeIntervals(iv){if(iv.length==0)return [];iv.sort((a,b)=>a[0]-b[0]);let res=[iv[0]];for(let i=1;i<iv.length;i++){let last=res[res.length-1];if(iv[i][0]<=last[1]) last[1]=Math.max(last[1],iv[i][1]); else res.push(iv[i]);}return res.flat();}",
    "testCases": [
      {"input":"mergeIntervals([[1,3],[2,6],[8,10]])","output":"1,6,8,10"},
      {"input":"mergeIntervals([[1,4],[4,5]])","output":"1,5"},
      {"input":"mergeIntervals([])","output":""}
    ]
  },
  {
    "title": "Maximum Subarray (Kadane)",
    "description": "Return maximum subarray sum.",
    "difficulty": "intermediate",
    "tags": ["array","dp"],
    "inputExample": "maxSubArray([-2,1,-3,4,-1,2,1,-5,4])",
    "outputExample": "6",
    "constraints": "At least one element.",
    "starterCode": "function maxSubArray(arr){\n  // kadane\n}",
    "solution": "function maxSubArray(a){let maxSoFar=a[0],cur=a[0];for(let i=1;i<a.length;i++){cur=Math.max(a[i],cur+a[i]);maxSoFar=Math.max(maxSoFar,cur);}return maxSoFar;}",
    "testCases": [
      {"input":"maxSubArray([-2,1,-3,4,-1,2,1,-5,4])","output":"6"},
      {"input":"maxSubArray([1])","output":"1"},
      {"input":"maxSubArray([-1,-2,-3])","output":"-1"}
    ]
  },
  {
    "title": "Product of Array Except Self",
    "description": "Return array where each element is product of all others (no division).",
    "difficulty": "intermediate",
    "tags": ["array","prefix"],
    "inputExample": "productExceptSelf([1,2,3,4])",
    "outputExample": "24,12,8,6",
    "constraints": "Use O(n) time.",
    "starterCode": "function productExceptSelf(nums){\n  // compute\n}",
    "solution": "function productExceptSelf(nums){let n=nums.length,ans=Array(n).fill(1);let left=1;for(let i=0;i<n;i++){ans[i]=left;left*=nums[i];}let right=1;for(let i=n-1;i>=0;i--){ans[i]*=right;right*=nums[i];}return ans;}",
    "testCases": [
      {"input":"productExceptSelf([1,2,3,4])","output":"24,12,8,6"},
      {"input":"productExceptSelf([0,0])","output":"0,0"},
      {"input":"productExceptSelf([1,0,3])","output":"0,3,0"}
    ]
  },
  {
    "title": "Minimum Window Substring (simplified)",
    "description": "Return length of smallest window containing all chars of pattern (if not found return 0).",
    "difficulty": "advanced",
    "tags": ["string","sliding-window"],
    "inputExample": "minWindow(\"ADOBECODEBANC\",\"ABC\")",
    "outputExample": "4",
    "constraints": "Chars uppercase.",
    "starterCode": "function minWindow(s,t){\n  // return length\n}",
    "solution": "function minWindow(s,t){let need={};for(let c of t)need[c]=(need[c]||0)+1;let missing=t.length,i=0,start=0,min=Infinity;for(let j=0;j<s.length;j++){let c=s[j];if(need[c]!==undefined){if(--need[c]>=0)missing--;}while(missing===0){if(j-i+1<min){min=j-i+1;start=i;}let d=s[i++];if(need[d]!==undefined){if(++need[d]>0)missing++;}}}return min===Infinity?0:min;}",
    "testCases": [
      {"input":"minWindow(\"ADOBECODEBANC\",\"ABC\")","output":"4"},
      {"input":"minWindow(\"a\",\"a\")","output":"1"},
      {"input":"minWindow(\"a\",\"b\")","output":"0"}
    ]
  },
  {
    "title": "Longest Common Prefix",
    "description": "Return longest common prefix among strings, empty string if none.",
    "difficulty": "beginner",
    "tags": ["string"],
    "inputExample": "longestCommonPrefix([\"flower\",\"flow\",\"flight\"])",
    "outputExample": "fl",
    "constraints": "Array size small.",
    "starterCode": "function longestCommonPrefix(strs){\n  // prefix\n}",
    "solution": "function longestCommonPrefix(strs){if(!strs.length) return '';let prefix=strs[0];for(let s of strs)while(s.indexOf(prefix)!==0)prefix=prefix.slice(0,-1);return prefix;}",
    "testCases": [
      {"input":"longestCommonPrefix([\"flower\",\"flow\",\"flight\"])","output":"fl"},
      {"input":"longestCommonPrefix([\"dog\",\"racecar\",\"car\"])","output":""},
      {"input":"longestCommonPrefix([])","output":""}
    ]
  },
  {
    "title": "Implement Queue with Two Stacks",
    "description": "Implement enqueue and dequeue; return dequeued values CSV for a sequence.",
    "difficulty": "intermediate",
    "tags": ["stack","design"],
    "inputExample": "simulateQueue([\"push\",1],[\"push\",2],[\"pop\"])",
    "outputExample": "1",
    "constraints": "Simplified simulate function.",
    "starterCode": "function simulateQueue(ops){\n  // process ops\n}",
    "solution": "function simulateQueue(ops){let inS=[],outS=[],res=[];for(let op of ops){if(op[0]=='push')inS.push(op[1]);else{if(outS.length==0)while(inS.length)outS.push(inS.pop());res.push(outS.pop());}}return res;}",
    "testCases": [
      {"input":"simulateQueue([[\"push\",1],[\"push\",2],[\"pop\"]])","output":"1"},
      {"input":"simulateQueue([[\"push\",5],[\"pop\"],[\"pop\"]])","output":"5,error"},
      {"input":"simulateQueue([])","output":""}
    ]
  },
  {
    "title": "Binary Search",
    "description": "Return index of target in sorted array or -1.",
    "difficulty": "beginner",
    "tags": ["binary-search"],
    "inputExample": "binarySearch([1,2,3,4],3)",
    "outputExample": "2",
    "constraints": "Sorted ascending.",
    "starterCode": "function binarySearch(arr,target){\n  // implement\n}",
    "solution": "function binarySearch(a,t){let l=0,r=a.length-1;while(l<=r){let m=Math.floor((l+r)/2);if(a[m]===t) return m; if(a[m]<t) l=m+1; else r=m-1;}return -1;}",
    "testCases": [
      {"input":"binarySearch([1,2,3,4],3)","output":"2"},
      {"input":"binarySearch([1,2,3],4)","output":"-1"},
      {"input":"binarySearch([],1)","output":"-1"}
    ]
  },
  {
    "title": "Search Insert Position",
    "description": "Return index if target found or index where it would be inserted.",
    "difficulty": "beginner",
    "tags": ["array","binary-search"],
    "inputExample": "searchInsert([1,3,5,6],5)",
    "outputExample": "2",
    "constraints": "Sorted array.",
    "starterCode": "function searchInsert(nums,target){\n  // implement\n}",
    "solution": "function searchInsert(a,t){let l=0,r=a.length;while(l<r){let m=(l+r)>>1; if(a[m]<t) l=m+1; else r=m;}return l;}",
    "testCases": [
      {"input":"searchInsert([1,3,5,6],5)","output":"2"},
      {"input":"searchInsert([1,3,5,6],2)","output":"1"},
      {"input":"searchInsert([1,3,5,6],7)","output":"4"}
    ]
  },
  {
    "title": "Convert Roman to Integer",
    "description": "Convert Roman numeral to integer.",
    "difficulty": "intermediate",
    "tags": ["string","math"],
    "inputExample": "romanToInt(\"MCMXCIV\")",
    "outputExample": "1994",
    "constraints": "Standard roman rules.",
    "starterCode": "function romanToInt(s){\n  // convert\n}",
    "solution": "function romanToInt(s){let m={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};let sum=0;for(let i=0;i<s.length;i++){if(m[s[i]]<m[s[i+1]])sum-=m[s[i]];else sum+=m[s[i]];}return sum;}",
    "testCases": [
      {"input":"romanToInt(\"III\")","output":"3"},
      {"input":"romanToInt(\"IV\")","output":"4"},
      {"input":"romanToInt(\"MCMXCIV\")","output":"1994"}
    ]
  },
  {
    "title": "Valid Palindrome (alphanumeric)",
    "description": "Check if s is palindrome considering only alphanumerics and ignoring cases.",
    "difficulty": "intermediate",
    "tags": ["string","two-pointers"],
    "inputExample": "isPalindromeAlnum(\"A man, a plan, a canal: Panama\")",
    "outputExample": "true",
    "constraints": "Ignore non-alphanumeric, case-insensitive.",
    "starterCode": "function isPalindromeAlnum(s){\n  // implement\n}",
    "solution": "function isPalindromeAlnum(s){s=s.toLowerCase().replace(/[^a-z0-9]/g,'');return s===s.split('').reverse().join('');}",
    "testCases": [
      {"input":"isPalindromeAlnum(\"A man, a plan, a canal: Panama\")","output":"true"},
      {"input":"isPalindromeAlnum(\"race a car\")","output":"false"},
      {"input":"isPalindromeAlnum(\"\")","output":"true"}
    ]
  },
  {
    "title": "Subarray Sum Equals K",
    "description": "Count continuous subarrays that sum to k.",
    "difficulty": "advanced",
    "tags": ["hashmap","prefix-sum"],
    "inputExample": "subarraySum([1,1,1],2)",
    "outputExample": "2",
    "constraints": "Array length ≤ 1000",
    "starterCode": "function subarraySum(nums,k){\n  // count\n}",
    "solution": "function subarraySum(nums,k){let map={0:1},sum=0,res=0;for(let n of nums){sum+=n; if(map[sum-k]) res+=map[sum-k]; map[sum]=(map[sum]||0)+1;}return res;}",
    "testCases": [
      {"input":"subarraySum([1,1,1],2)","output":"2"},
      {"input":"subarraySum([1,2,3],3)","output":"2"},
      {"input":"subarraySum([0,0,0],0)","output":"6"}
    ]
  }
]
