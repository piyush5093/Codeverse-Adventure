export const LEVELS = [
  {
    id: 1,
    name: "Beginner Land",
    theme: "beginner",
    description: "A peaceful green environment. Build confidence here!",
    color: "#10b981",
    difficulty: "Very Easy",
    gameActions: ["bridge", "gate", "coins", "stairs", "portal"],
    tasks: [
      {
        id: 1,
        title: "Hello World",
        description: "Print 'Hello World'",
        expectedOutput: "Hello World",
        hints: "Use the print statement",
        difficulty: "trivial"
      },
      {
        id: 2,
        title: "Greet a Friend",
        description: "Print your name",
        expectedOutput: (userInput) => userInput.trim() !== "",
        hints: "Replace the name with your own",
        difficulty: "trivial"
      },
      {
        id: 3,
        title: "Basic Math",
        description: "Add 5 and 3, then print the result",
        expectedOutput: "8",
        hints: "Use + to add numbers",
        difficulty: "easy"
      },
      {
        id: 4,
        title: "Number Sequence",
        description: "Print numbers from 1 to 5",
        expectedOutput: "1\n2\n3\n4\n5",
        hints: "Use a loop to print numbers",
        difficulty: "easy"
      },
      {
        id: 5,
        title: "Even or Odd",
        description: "Check if 7 is even or odd",
        expectedOutput: (output) => output.toLowerCase().includes("odd"),
        hints: "Use modulo (%) to check remainder",
        difficulty: "easy"
      }
    ]
  },
  {
    id: 2,
    name: "Loop Forest",
    theme: "forest",
    description: "Master loops in this enchanted forest",
    color: "#059669",
    difficulty: "Easy",
    gameActions: ["river", "trees", "bridge", "climb"],
    tasks: [
      {
        id: 1,
        title: "Times Table",
        description: "Print the multiplication table of 5 (5x1 to 5x10)",
        expectedOutput: "5\n10\n15\n20\n25\n30\n35\n40\n45\n50",
        hints: "Use a loop to multiply 5 by numbers 1-10",
        difficulty: "easy"
      },
      {
        id: 2,
        title: "Sum Numbers",
        description: "Calculate the sum of numbers from 1 to 10",
        expectedOutput: "55",
        hints: "Keep adding each number in a loop",
        difficulty: "easy"
      },
      {
        id: 3,
        title: "Count Digits",
        description: "Count how many digits are in 12345",
        expectedOutput: "5",
        hints: "Convert to string and check length",
        difficulty: "easy"
      },
      {
        id: 4,
        title: "Find Maximum",
        description: "Find the largest number among 15, 8, 42",
        expectedOutput: "42",
        hints: "Compare numbers one by one",
        difficulty: "easy"
      },
      {
        id: 5,
        title: "Loop Pattern",
        description: "Print numbers from 10 down to 1",
        expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1",
        hints: "Use a countdown loop",
        difficulty: "easy"
      }
    ]
  },
  {
    id: 3,
    name: "Array Desert",
    theme: "desert",
    description: "Discover the power of arrays in the sandy dunes",
    color: "#d97706",
    difficulty: "Easy-Medium",
    gameActions: ["door", "bridge", "chest"],
    tasks: [
      {
        id: 1,
        title: "Find Maximum",
        description: "Find the largest element in [12, 45, 3, 89, 23]",
        expectedOutput: "89",
        hints: "Iterate through array and track maximum",
        difficulty: "medium"
      },
      {
        id: 2,
        title: "Sum Array",
        description: "Calculate sum of [1, 2, 3, 4, 5]",
        expectedOutput: "15",
        hints: "Add all elements using a loop",
        difficulty: "medium"
      },
      {
        id: 3,
        title: "Count Even Numbers",
        description: "Count even numbers in [2, 5, 8, 3, 10, 7]",
        expectedOutput: "3",
        hints: "Use modulo to check if number is even",
        difficulty: "medium"
      },
      {
        id: 4,
        title: "Reverse Array",
        description: "Reverse the array [1, 2, 3, 4, 5]",
        expectedOutput: "5\n4\n3\n2\n1",
        hints: "Print array from last to first element",
        difficulty: "medium"
      },
      {
        id: 5,
        title: "Find Minimum",
        description: "Find the smallest element in [45, 12, 89, 3, 56]",
        expectedOutput: "3",
        hints: "Track the minimum value as you iterate",
        difficulty: "medium"
      }
    ]
  },
  {
    id: 4,
    name: "String Cave",
    theme: "cave",
    description: "Solve string mysteries in this glowing cave",
    color: "#8b5cf6",
    difficulty: "Medium",
    gameActions: ["crystals", "lights", "portal"],
    tasks: [
      {
        id: 1,
        title: "Reverse String",
        description: "Reverse the string 'Hello'",
        expectedOutput: "olleH",
        hints: "Print characters in reverse order",
        difficulty: "medium"
      },
      {
        id: 2,
        title: "Palindrome Check",
        description: "Check if 'racecar' is a palindrome",
        expectedOutput: (output) => /yes|true|palindrome/i.test(output),
        hints: "Check if string reads same forwards and backwards",
        difficulty: "medium"
      },
      {
        id: 3,
        title: "Count Vowels",
        description: "Count vowels in 'programming'",
        expectedOutput: "3",
        hints: "Check each character if it's a vowel",
        difficulty: "medium"
      },
      {
        id: 4,
        title: "Uppercase",
        description: "Convert 'hello world' to uppercase",
        expectedOutput: "HELLO WORLD",
        hints: "Use string conversion function",
        difficulty: "medium"
      },
      {
        id: 5,
        title: "String Length",
        description: "Find length of 'CodeVerse'",
        expectedOutput: "9",
        hints: "Count number of characters",
        difficulty: "medium"
      }
    ]
  },
  {
    id: 5,
    name: "Logic Mountain",
    theme: "mountain",
    description: "Climb the peaks of logic and algorithms",
    color: "#f59e0b",
    difficulty: "Medium",
    gameActions: ["platforms", "rope", "avalanche"],
    tasks: [
      {
        id: 1,
        title: "Prime Number",
        description: "Check if 17 is a prime number",
        expectedOutput: (output) => /yes|true|prime/i.test(output),
        hints: "A number is prime if only divisible by 1 and itself",
        difficulty: "medium"
      },
      {
        id: 2,
        title: "Fibonacci",
        description: "Print first 7 Fibonacci numbers",
        expectedOutput: "0\n1\n1\n2\n3\n5\n8",
        hints: "Each number is sum of previous two",
        difficulty: "medium"
      },
      {
        id: 3,
        title: "Factorial",
        description: "Calculate factorial of 5",
        expectedOutput: "120",
        hints: "5! = 5 × 4 × 3 × 2 × 1",
        difficulty: "medium"
      },
      {
        id: 4,
        title: "Leap Year",
        description: "Check if 2024 is a leap year",
        expectedOutput: (output) => /yes|true|leap/i.test(output),
        hints: "Leap year if divisible by 4 (except 100 unless 400)",
        difficulty: "medium"
      },
      {
        id: 5,
        title: "Armstrong Number",
        description: "Check if 153 is an Armstrong number",
        expectedOutput: (output) => /yes|true|armstrong/i.test(output),
        hints: "153 = 1³ + 5³ + 3³",
        difficulty: "medium"
      }
    ]
  },
  {
    id: 6,
    name: "Function Temple",
    theme: "temple",
    description: "Master functions in this futuristic temple",
    color: "#06b6d4",
    difficulty: "Medium+",
    gameActions: ["platforms", "laser"],
    tasks: [
      {
        id: 1,
        title: "Simple Function",
        description: "Create a function that adds two numbers and returns the result",
        expectedOutput: (output) => !output.includes("error") && output.trim() !== "",
        hints: "Define a function with two parameters",
        difficulty: "medium"
      },
      {
        id: 2,
        title: "Return Value",
        description: "Create a function that returns the square of a number",
        expectedOutput: (output) => !output.includes("error"),
        hints: "Function should multiply number by itself",
        difficulty: "medium"
      },
      {
        id: 3,
        title: "Multiple Parameters",
        description: "Create a function that multiplies three numbers",
        expectedOutput: (output) => !output.includes("error"),
        hints: "Function should have three parameters",
        difficulty: "medium"
      },
      {
        id: 4,
        title: "Max Function",
        description: "Create a function to find maximum of two numbers",
        expectedOutput: (output) => !output.includes("error"),
        hints: "Use conditional statement inside function",
        difficulty: "medium"
      },
      {
        id: 5,
        title: "Function Practice",
        description: "Create a function that checks if a number is even",
        expectedOutput: (output) => !output.includes("error"),
        hints: "Use modulo operator",
        difficulty: "medium"
      }
    ]
  },
  {
    id: 7,
    name: "Recursion Dungeon",
    theme: "dungeon",
    description: "Master recursion in this fiery dungeon",
    color: "#ef4444",
    difficulty: "Medium-Hard",
    gameActions: ["lava", "chains", "fire"],
    tasks: [
      {
        id: 1,
        title: "Recursive Factorial",
        description: "Calculate 5! using recursion",
        expectedOutput: "120",
        hints: "5! = 5 * factorial(4)",
        difficulty: "hard"
      },
      {
        id: 2,
        title: "Recursive Fibonacci",
        description: "Calculate 6th Fibonacci number using recursion",
        expectedOutput: "8",
        hints: "Each number is sum of previous two",
        difficulty: "hard"
      },
      {
        id: 3,
        title: "Countdown",
        description: "Print numbers from 5 to 1 using recursion",
        expectedOutput: "5\n4\n3\n2\n1",
        hints: "Base case when number reaches 0",
        difficulty: "hard"
      },
      {
        id: 4,
        title: "Power Calculation",
        description: "Calculate 2 to the power of 5 using recursion",
        expectedOutput: "32",
        hints: "power(2,5) = 2 * power(2,4)",
        difficulty: "hard"
      },
      {
        id: 5,
        title: "Recursive Sum",
        description: "Calculate sum from 1 to 10 using recursion",
        expectedOutput: "55",
        hints: "sum(n) = n + sum(n-1), base case when n=0",
        difficulty: "hard"
      }
    ]
  },
  {
    id: 8,
    name: "Sorting City",
    theme: "cyberpunk",
    description: "Organize chaos in this neon cyberpunk city",
    color: "#ec4899",
    difficulty: "Hard",
    gameActions: ["machines", "elevators", "traffic"],
    tasks: [
      {
        id: 1,
        title: "Bubble Sort",
        description: "Sort [64, 34, 25, 12, 22, 11, 90] using bubble sort",
        expectedOutput: "11\n12\n22\n25\n34\n64\n90",
        hints: "Compare adjacent elements and swap if needed",
        difficulty: "hard"
      },
      {
        id: 2,
        title: "Ascending Order",
        description: "Sort [5, 2, 8, 1, 9] in ascending order",
        expectedOutput: "1\n2\n5\n8\n9",
        hints: "Use any sorting algorithm",
        difficulty: "hard"
      },
      {
        id: 3,
        title: "Descending Order",
        description: "Sort [5, 2, 8, 1, 9] in descending order",
        expectedOutput: "9\n8\n5\n2\n1",
        hints: "Sort from largest to smallest",
        difficulty: "hard"
      },
      {
        id: 4,
        title: "Swap Elements",
        description: "Swap elements at positions 0 and 3 in [1, 2, 3, 4, 5]",
        expectedOutput: "4\n2\n3\n1\n5",
        hints: "Exchange values of two array positions",
        difficulty: "hard"
      },
      {
        id: 5,
        title: "Second Largest",
        description: "Find the second largest element in [45, 12, 89, 3, 56]",
        expectedOutput: "56",
        hints: "Sort array and pick second from end",
        difficulty: "hard"
      }
    ]
  },
  {
    id: 9,
    name: "Debug Lab",
    theme: "laboratory",
    description: "Fix corrupted code in this glitchy laboratory",
    color: "#6366f1",
    difficulty: "Hard",
    gameActions: ["system", "glitches", "ai"],
    tasks: [
      {
        id: 1,
        title: "Syntax Error",
        description: "Fix this code:\nprint('Hello World'",
        expectedOutput: "Hello World",
        hints: "Missing closing parenthesis",
        difficulty: "hard"
      },
      {
        id: 2,
        title: "Loop Bug",
        description: "Fix infinite loop: while(true) { print(i); }",
        expectedOutput: "1\n2\n3",
        hints: "Add increment and proper exit condition",
        difficulty: "hard"
      },
      {
        id: 3,
        title: "Array Index Error",
        description: "Fix index out of bounds in array access",
        expectedOutput: (output) => !/error|exception|index/i.test(output),
        hints: "Check array boundaries",
        difficulty: "hard"
      },
      {
        id: 4,
        title: "Condition Bug",
        description: "Fix logic that should print numbers 1-5",
        expectedOutput: "1\n2\n3\n4\n5",
        hints: "Check loop condition",
        difficulty: "hard"
      },
      {
        id: 5,
        title: "Output Mismatch",
        description: "Make code output exactly '42'",
        expectedOutput: "42",
        hints: "Ensure correct calculation and output",
        difficulty: "hard"
      }
    ]
  },
  {
    id: 10,
    name: "Final Core",
    theme: "digital",
    description: "Ultimate challenge: Prove you're a CodeVerse Master!",
    color: "#3b82f6",
    difficulty: "Hard",
    gameActions: ["bridge", "portal", "cinematic"],
    tasks: [
      {
        id: 1,
        title: "Loop Challenge",
        description: "Print the first 10 even numbers",
        expectedOutput: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20",
        hints: "Use loop to multiply i by 2",
        difficulty: "hard"
      },
      {
        id: 2,
        title: "Array Algorithm",
        description: "Find sum of all elements in [10, 20, 30, 40, 50]",
        expectedOutput: "150",
        hints: "Iterate and accumulate",
        difficulty: "hard"
      },
      {
        id: 3,
        title: "String Puzzle",
        description: "Reverse and count characters in 'CodeVerse'",
        expectedOutput: (output) => output.includes("esreVedoC") || output.includes("9"),
        hints: "Reverse string and show length",
        difficulty: "hard"
      },
      {
        id: 4,
        title: "Function + Logic",
        description: "Create function to check if number is prime",
        expectedOutput: (output) => !output.includes("error"),
        hints: "Combine functions with loops",
        difficulty: "hard"
      },
      {
        id: 5,
        title: "Mixed Concepts",
        description: "Sort array and find middle element of [7, 2, 9, 1, 5, 8, 3]",
        expectedOutput: "5",
        hints: "Sort first, then access middle index",
        difficulty: "hard"
      }
    ]
  }
];

export const CODE_TEMPLATES = {
  python: `# Write your code below:\n`,
  java: `public class Main {\n    public static void main(String[] args) {\n        // Write your code below:\n        \n    }\n}`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code below:\n    \n    return 0;\n}`,
  javascript: `// Write your code below:\n`
};

