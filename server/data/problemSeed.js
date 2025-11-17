export const problemsSeed = [
  // 1
  {
    title: "Add Two Numbers",
    description: `
Write a function add(a, b) that returns the sum of two numbers.
    `,
    difficulty: "beginner",
    tags: ["math", "easy"],
    inputExample: "add(3, 7)",
    outputExample: "10",
    constraints: `
- Input will always be numbers.
- Return output directly.
    `,
    starterCode: `
function add(a, b) {
  // write code
}
export default add;`,
    solution: `
function add(a, b) {
  return a + b;
}
export default add;`,
    testCases: [
      { input: "add(2, 3)", output: "5" },
      { input: "add(-1, 5)", output: "4" },
    ],
  },

  // 2
  {
    title: "Reverse a String",
    description: "Return the reversed version of a string.",
    difficulty: "beginner",
    tags: ["string", "logic"],
    inputExample: `reverse("hello")`,
    outputExample: `"olleh"`,
    constraints: `Do not use built-in reverse()`,
    starterCode: `
function reverse(str) {}
export default reverse;`,
    solution: `
function reverse(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) res += str[i];
  return res;
}
export default reverse;`,
    testCases: [
      { input: `reverse("abc")`, output: `"cba"` },
      { input: `reverse("vivek")`, output: `"keviv"` },
    ],
  },

  // 3
  {
    title: "Count Vowels",
    description: "Return how many vowels are in a string.",
    difficulty: "beginner",
    tags: ["string"],
    inputExample: `countVowels("hello")`,
    outputExample: "2",
    constraints: "Only lowercase English letters",
    starterCode: `
function countVowels(str) {}
export default countVowels;`,
    solution: `
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let ch of str) if (vowels.includes(ch)) count++;
  return count;
}
export default countVowels;`,
    testCases: [
      { input: `countVowels("abcde")`, output: "2" },
      { input: `countVowels("rhythm")`, output: "0" },
    ],
  },

  // 4
  {
    title: "Find Maximum in Array",
    description: "Return the maximum number inside an array.",
    difficulty: "beginner",
    tags: ["array", "math"],
    inputExample: "maxInArray([1, 5, 3])",
    outputExample: "5",
    constraints: "Do not use Math.max",
    starterCode: `
function maxInArray(arr) {}
export default maxInArray;`,
    solution: `
function maxInArray(arr) {
  let max = arr[0];
  for (let n of arr) if (n > max) max = n;
  return max;
}
export default maxInArray;`,
    testCases: [
      { input: "maxInArray([1,2,3])", output: "3" },
      { input: "maxInArray([-1,0,10])", output: "10" },
    ],
  },

  // 5
  {
    title: "Sum of Array",
    description: "Return the sum of all elements in an array.",
    difficulty: "beginner",
    tags: ["array"],
    inputExample: "sumArray([1,2,3])",
    outputExample: "6",
    starterCode: `
function sumArray(arr) {}
export default sumArray;`,
    solution: `
function sumArray(arr) {
  let sum = 0;
  for (let n of arr) sum += n;
  return sum;
}
export default sumArray;`,
    testCases: [
      { input: "sumArray([5,5])", output: "10" },
    ],
  },

  // 6
  {
    title: "Check Palindrome",
    description: "Return true if string is palindrome.",
    difficulty: "beginner",
    tags: ["string"],
    inputExample: `isPalindrome("madam")`,
    outputExample: "true",
    starterCode: `function isPalindrome(str) {} export default isPalindrome`,
    solution: `function isPalindrome(str){return str===str.split("").reverse().join("")} export default isPalindrome`,
    testCases: [
      { input: `isPalindrome("racecar")`, output: "true" },
      { input: `isPalindrome("hello")`, output: "false" },
    ],
  },

  // 7
  {
    title: "Factorial",
    description: "Return factorial of a number.",
    difficulty: "intermediate",
    tags: ["math", "loops"],
    inputExample: "factorial(5)",
    outputExample: "120",
    starterCode: "function factorial(n) {} export default factorial",
    solution: "function factorial(n){let f=1;for(let i=2;i<=n;i++)f*=i;return f;}export default factorial",
    testCases: [
      { input: "factorial(3)", output: "6" },
      { input: "factorial(6)", output: "720" },
    ],
  },

  // 8–20 (remaining 13 problems)
  ...[
    {
      title: "Fibonacci Number",
      difficulty: "intermediate",
      tags: ["math"],
      description: "Return nth Fibonacci number.",
      inputExample: "fib(6)",
      outputExample: "8",
      starterCode: "function fib(n) {} export default fib",
      solution: "function fib(n){if(n<=1)return n;return fib(n-1)+fib(n-2);}export default fib",
      testCases: [{ input: "fib(5)", output: "5" }],
    },
    {
      title: "Find Missing Number",
      difficulty: "intermediate",
      tags: ["math"],
      description: "Find missing number in 1..n.",
      inputExample: "missing([1,2,4,5])",
      outputExample: "3",
      starterCode: "function missing(arr){}export default missing",
      solution:
        "function missing(arr){const n=arr.length+1;const sum=n*(n+1)/2;return sum-arr.reduce((a,b)=>a+b);}export default missing",
      testCases: [{ input: "missing([1,2,3,5])", output: "4" }],
    },
    {
      title: "Count Digits",
      difficulty: "beginner",
      tags: ["math"],
      description: "Count digits in a number.",
      inputExample: "countDigits(532)",
      outputExample: "3",
      starterCode: "function countDigits(n){}export default countDigits",
      solution: "function countDigits(n){return String(n).length;}export default countDigits",
      testCases: [{ input: "countDigits(9999)", output: "4" }],
    },
    {
      title: "Find First Duplicate",
      difficulty: "intermediate",
      tags: ["array", "logic"],
      description: "Return first repeated element.",
      inputExample: "firstDuplicate([1,2,3,2])",
      outputExample: "2",
      starterCode: "function firstDuplicate(arr){}export default firstDuplicate",
      solution:
        "function firstDuplicate(arr){const map=new Set();for(let x of arr){if(map.has(x))return x;map.add(x);}return -1;}export default firstDuplicate",
      testCases: [{ input: "firstDuplicate([1,2,3,1])", output: "1" }],
    },
    {
      title: "Remove Duplicates",
      difficulty: "intermediate",
      tags: ["array"],
      description: "Remove duplicate values.",
      inputExample: "removeDup([1,1,2,3])",
      outputExample: "[1,2,3]",
      starterCode: "function removeDup(arr){}export default removeDup",
      solution:
        "function removeDup(arr){return [...new Set(arr)]}export default removeDup",
      testCases: [{ input: "removeDup([4,4,5])", output: "[4,5]" }],
    },
    {
      title: "String Compression",
      difficulty: "advanced",
      tags: ["string", "logic"],
      description: `Compress "aaabb" → "a3b2"`,
      inputExample: `compress("aaabb")`,
      outputExample: `"a3b2"`,
      starterCode: "function compress(str){}export default compress",
      solution:
        "function compress(str){let res='',count=1;for(let i=1;i<=str.length;i++){if(str[i]===str[i-1])count++;else{res+=str[i-1]+count;count=1;}}return res;}export default compress",
      testCases: [{ input: `compress("aabb")`, output: `"a2b2"` }],
    },
    {
      title: "Find Minimum",
      difficulty: "beginner",
      tags: ["array"],
      description: "Find smallest number in array.",
      inputExample: "min([3,1,5])",
      outputExample: "1",
      starterCode: "function min(arr){}export default min",
      solution:
        "function min(arr){let ans=arr[0];for(let x of arr)if(x<ans)ans=x;return ans;}export default min",
      testCases: [{ input: "min([9,2])", output: "2" }],
    },
    {
      title: "Array Contains Value",
      difficulty: "beginner",
      tags: ["array"],
      description: "Check if value exists.",
      inputExample: "contains([1,2,3],2)",
      outputExample: "true",
      starterCode: "function contains(arr, x){}export default contains",
      solution:
        "function contains(arr,x){return arr.includes(x);}export default contains",
      testCases: [{ input: "contains([1,2],3)", output: "false" }],
    },
    {
      title: "Count Words",
      difficulty: "beginner",
      tags: ["string"],
      description: "Count words in sentence.",
      inputExample: `countWords("hello world")`,
      outputExample: "2",
      starterCode: "function countWords(str){}export default countWords",
      solution: "function countWords(str){return str.trim().split(/\\s+/).length;}export default countWords",
      testCases: [{ input: `countWords("hi vivek")`, output: "2" }],
    },
    {
      title: "Find Average",
      difficulty: "beginner",
      tags: ["math"],
      description: "Return average of numbers.",
      inputExample: "avg([1,2,3])",
      outputExample: "2",
      starterCode: "function avg(arr){}export default avg",
      solution: "function avg(arr){return arr.reduce((a,b)=>a+b)/arr.length;}export default avg",
      testCases: [{ input: "avg([10,20])", output: "15" }],
    },
    {
      title: "Capitalize First Letter",
      difficulty: "beginner",
      tags: ["string"],
      description: "Return string with first letter uppercase.",
      inputExample: `cap("vivek")`,
      outputExample: `"Vivek"`,
      starterCode: "function cap(str){}export default cap",
      solution: "function cap(str){return str[0].toUpperCase()+str.slice(1);}export default cap",
      testCases: [{ input: `cap("mahima")`, output: `"Mahima"` }],
    },
    {
      title: "Array Intersection",
      difficulty: "intermediate",
      tags: ["array"],
      description: "Return intersection of two arrays.",
      inputExample: "intersect([1,2],[2,3])",
      outputExample: "[2]",
      starterCode: "function intersect(a,b){}export default intersect",
      solution:
        "function intersect(a,b){return a.filter(x=>b.includes(x));}export default intersect",
      testCases: [{ input: "intersect([1,2],[2,3])", output: "[2]" }],
    }
  ],
];
