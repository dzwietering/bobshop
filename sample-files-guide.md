# Workshop Sample Files Guide

This document describes all sample files needed for the workshop exercises. These files should be created before the workshop begins.

---

## Exercise 3: Debugging & Refactoring

### File: `sample-files/buggyCalculator.js`

**Purpose:** Intentionally buggy code for participants to debug with Bob's help.

**Bugs included:**
1. Division by zero not handled
2. Missing return statement in one function
3. Incorrect operator precedence
4. Type coercion issues
5. Variable naming inconsistency

**Content:**
```javascript
/**
 * Calculator module with intentional bugs for workshop Exercise 3
 * Participants will use Bob to identify and fix these issues
 */

class Calculator {
  constructor() {
    this.result = 0;
  }

  // Bug 1: Division by zero not handled
  divide(a, b) {
    return a / b;
  }

  // Bug 2: Missing return statement
  multiply(a, b) {
    const result = a * b;
    // Missing return!
  }

  // Bug 3: Incorrect operator precedence
  calculate(a, b, c) {
    // Should be (a + b) * c, but missing parentheses
    return a + b * c;
  }

  // Bug 4: Type coercion issues
  add(a, b) {
    // String concatenation instead of addition
    return a + b;
  }

  // Bug 5: Inconsistent naming and logic error
  Subtract(num1, num2) {
    // Wrong operation
    return num1 + num2;
  }

  // Bug 6: Modifying parameter
  power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      base = base * base; // Modifying base instead of result
    }
    return base;
  }
}

module.exports = Calculator;
```

---

## Additional Sample Files

### File: `sample-files/quotes-data.json`

**Purpose:** Sample data for Exercise 4 (Quote of the Day app)

**Content:**
```json
{
  "quotes": [
    {
      "id": 1,
      "text": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs",
      "category": "motivational"
    },
    {
      "id": 2,
      "text": "Code is like humor. When you have to explain it, it's bad.",
      "author": "Cory House",
      "category": "funny"
    },
    {
      "id": 3,
      "text": "First, solve the problem. Then, write the code.",
      "author": "John Johnson",
      "category": "wisdom"
    },
    {
      "id": 4,
      "text": "Experience is the name everyone gives to their mistakes.",
      "author": "Oscar Wilde",
      "category": "wisdom"
    },
    {
      "id": 5,
      "text": "In order to be irreplaceable, one must always be different.",
      "author": "Coco Chanel",
      "category": "motivational"
    },
    {
      "id": 6,
      "text": "Java is to JavaScript what car is to Carpet.",
      "author": "Chris Heilmann",
      "category": "funny"
    },
    {
      "id": 7,
      "text": "Knowledge is power.",
      "author": "Francis Bacon",
      "category": "wisdom"
    },
    {
      "id": 8,
      "text": "Simplicity is the soul of efficiency.",
      "author": "Austin Freeman",
      "category": "motivational"
    },
    {
      "id": 9,
      "text": "It works on my machine.",
      "author": "Every Developer Ever",
      "category": "funny"
    },
    {
      "id": 10,
      "text": "The best error message is the one that never shows up.",
      "author": "Thomas Fuchs",
      "category": "wisdom"
    }
  ]
}
```

---

## Workshop Preparation Checklist

Before running the workshop, ensure:

- [ ] Create `sample-files/` directory
- [ ] Create `buggyCalculator.js` with intentional bugs
- [ ] Create `quotes-data.json` with sample quotes
- [ ] Test that all sample files are accessible
- [ ] Verify bugs in calculator are challenging but fixable
- [ ] Ensure quote data covers all three categories

---

## Notes for Facilitators

### Exercise 3 Tips

When participants work on debugging:
- Encourage them to ask Bob to explain each bug
- Have them request fixes one at a time to understand each issue
- Discuss the importance of code review and testing

### Expected Debugging Session Flow

1. Participant requests: "Review buggyCalculator.js and identify all bugs"
2. Bob identifies 6 bugs with explanations
3. Participant requests: "Fix all the bugs"
4. Bob applies corrections
5. Participant requests: "Add unit tests to prevent these bugs"
6. Bob creates comprehensive test suite

### Common Issues

**Issue:** Participant doesn't understand a bug  
**Solution:** Switch to Ask mode and request detailed explanation

**Issue:** Too many bugs at once  
**Solution:** Ask Bob to fix bugs one at a time with explanations

**Issue:** Want to see different bug types  
**Solution:** Ask Bob to introduce specific types of bugs (security, performance, logic)