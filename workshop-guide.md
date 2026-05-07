# Mastering Bob: Your AI Coding Partner
## A 45-Minute Hands-On Workshop

---

## 🎯 Workshop Overview

**Duration:** 45 minutes  
**Level:** Intermediate developers  
**Prerequisites:** Basic programming knowledge, VS Code installed

### Learning Objectives

By the end of this workshop, you will be able to:
- ✅ Navigate Bob's different modes and understand when to use each
- ✅ Effectively communicate tasks and requests to Bob
- ✅ Use Bob's tools for file operations, code editing, and debugging
- ✅ Build a complete project with Bob's assistance
- ✅ Apply best practices for AI-assisted development

---

## 📋 Workshop Timeline

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 | Introduction & Setup | 5 min |
| 0:05 | Exercise 1: Quick Start | 8 min |
| 0:13 | Exercise 2: Code Generation | 10 min |
| 0:23 | Exercise 3: Debugging & Refactoring | 10 min |
| 0:33 | Exercise 4: Multi-file Project | 10 min |
| 0:43 | Wrap-up & Q&A | 2 min |

---

## 🚀 Introduction (5 minutes)

### What is Bob?

Bob is an AI-powered coding assistant that works directly in VS Code. Think of Bob as your intelligent pair programmer who can:
- Write and edit code across multiple files
- Debug and refactor existing code
- Plan complex projects before implementation
- Execute commands and interact with your development environment
- Browse documentation and test your applications

### Bob's Modes

Bob operates in different modes, each optimized for specific tasks:

| Mode | Icon | Purpose | Best For |
|------|------|---------|----------|
| **Plan** | 📝 | Strategic planning and design | Breaking down complex tasks, creating architecture |
| **Code** | 💻 | Fast code implementation | Writing and modifying code efficiently |
| **Advanced** | 🛠️ | Full-featured development | Complex tasks requiring MCP servers or browser testing |
| **Ask** | ❓ | Questions and explanations | Learning, documentation, code analysis |
| **Orchestrator** | 🔀 | Multi-step coordination | Large projects requiring multiple specialties |

### Quick Tips for Working with Bob

1. **Be specific** - Clear instructions lead to better results
2. **Provide context** - Share relevant files or explain the project structure
3. **Iterate** - Bob works step-by-step; review and refine as you go
4. **Use the right mode** - Switch modes based on your current need
5. **Ask questions** - Use Ask mode when you need clarification

---

## 🏋️ Exercise 1: Quick Start with Bob (8 minutes)

### Objective
Learn to interact with Bob and understand its basic capabilities.

### Tasks

#### Task 1.1: Your First Request (3 min)
**Goal:** Create a simple utility function

**Instructions:**
1. Open Bob in Code mode (💻)
2. Type the following request:
   ```
   Create a JavaScript function called calculateDiscount that takes a price and discount percentage, 
   and returns the final price. Include input validation and JSDoc comments.
   ```
3. Observe how Bob:
   - Creates the file
   - Writes the function with proper documentation
   - Adds error handling

**Expected Outcome:** A file named `calculateDiscount.js` with a well-documented function

#### Task 1.2: Ask Bob Questions (2 min)
**Goal:** Learn to use Ask mode for explanations

**Instructions:**
1. Switch to Ask mode (❓)
2. Ask: "Explain the time complexity of the calculateDiscount function and suggest any optimizations"
3. Review Bob's analysis

**Expected Outcome:** Clear explanation of the function's performance characteristics

#### Task 1.3: Plan Before Coding (3 min)
**Goal:** Use Plan mode to design a solution

**Instructions:**
1. Switch to Plan mode (📝)
2. Request: "I need to build a simple task manager. Plan the structure, files needed, and key features."
3. Review the plan Bob creates

**Expected Outcome:** A structured plan with file organization and feature breakdown

### ✅ Success Criteria
- [ ] Successfully created a function using Code mode
- [ ] Received a detailed explanation in Ask mode
- [ ] Generated a project plan in Plan mode
- [ ] Understand when to use each mode

---

## 💻 Exercise 2: Code Generation & Testing (10 minutes)

### Objective
Build a complete module with tests using Bob's assistance.

### Scenario
You're building a user authentication system and need a password validator.

### Tasks

#### Task 2.1: Generate the Validator (4 min)
**Instructions:**
1. Switch to Code mode (💻)
2. Request:
   ```
   Create a password validator module in JavaScript that checks:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one lowercase letter
   - At least one number
   - At least one special character
   
   Export a function validatePassword that returns an object with:
   - isValid: boolean
   - errors: array of error messages
   
   Save as passwordValidator.js
   ```

**Expected Outcome:** A complete validator with clear error messages

#### Task 2.2: Generate Unit Tests (3 min)
**Instructions:**
1. Request:
   ```
   Create comprehensive unit tests for passwordValidator.js using Jest.
   Include test cases for:
   - Valid passwords
   - Each validation rule failure
   - Edge cases (empty string, very long password)
   
   Save as passwordValidator.test.js
   ```

**Expected Outcome:** A test suite with multiple test cases

#### Task 2.3: Add Documentation (3 min)
**Instructions:**
1. Request:
   ```
   Create a README.md for the password validator that includes:
   - Usage examples
   - API documentation
   - Installation instructions
   ```

**Expected Outcome:** Professional documentation ready for users

### ✅ Success Criteria
- [ ] Password validator with all required checks
- [ ] Comprehensive test suite
- [ ] Clear documentation
- [ ] All files properly organized

---

## 🐛 Exercise 3: Debugging & Refactoring (10 minutes)

### Objective
Learn to use Bob for fixing bugs and improving code quality.

### Scenario
You've inherited some buggy code that needs fixing and refactoring.

### Tasks

#### Task 3.1: Debug Broken Code (4 min)
**Instructions:**
1. Bob will create a file with intentional bugs: `buggyCalculator.js`
2. Request:
   ```
   Review buggyCalculator.js and identify all bugs. 
   Fix them and explain what was wrong.
   ```
3. Review Bob's fixes and explanations

**Expected Outcome:** Fixed code with detailed explanation of issues

#### Task 3.2: Refactor for Quality (3 min)
**Instructions:**
1. Request:
   ```
   Refactor the calculator code to follow best practices:
   - Add proper error handling
   - Improve naming conventions
   - Add JSDoc comments
   - Make it more maintainable
   ```

**Expected Outcome:** Clean, professional-grade code

#### Task 3.3: Performance Optimization (3 min)
**Instructions:**
1. Switch to Ask mode (❓)
2. Ask: "Analyze the refactored calculator for performance bottlenecks and suggest optimizations"
3. Switch back to Code mode (💻)
4. Request: "Implement the suggested optimizations"

**Expected Outcome:** Optimized code with performance improvements

### ✅ Success Criteria
- [ ] All bugs identified and fixed
- [ ] Code refactored to best practices
- [ ] Performance optimizations applied
- [ ] Understanding of debugging workflow with Bob

---

## 🌐 Exercise 4: Build a Multi-file Web App (10 minutes)

### Objective
Create a complete mini web application using Bob's project management capabilities.

### Scenario
Build a simple "Quote of the Day" web app with HTML, CSS, and JavaScript.

### Tasks

#### Task 4.1: Plan the Project (2 min)
**Instructions:**
1. Switch to Plan mode (📝)
2. Request:
   ```
   Plan a "Quote of the Day" web app with:
   - Clean, modern UI
   - Random quote display
   - Category filter (motivational, funny, wisdom)
   - Responsive design
   
   List all files needed and their purposes.
   ```

**Expected Outcome:** Detailed project plan with file structure

#### Task 4.2: Build the Application (6 min)
**Instructions:**
1. Switch to Code mode (💻)
2. Request:
   ```
   Implement the Quote of the Day app based on the plan.
   Create all necessary files:
   - index.html with semantic structure
   - styles.css with modern, responsive design
   - app.js with quote data and functionality
   
   Include at least 10 quotes across different categories.
   ```

**Expected Outcome:** Complete working web application

#### Task 4.3: Test and Refine (2 min)
**Instructions:**
1. Open `index.html` in your browser
2. Test the functionality
3. If issues arise, describe them to Bob and request fixes
4. Request: "Add a feature to share quotes on social media"

**Expected Outcome:** Polished, feature-complete application

### ✅ Success Criteria
- [ ] Project properly planned
- [ ] All files created and working together
- [ ] Responsive design implemented
- [ ] Additional feature successfully added
- [ ] Application runs without errors

---

## 🎓 Key Takeaways

### Best Practices for Working with Bob

1. **Start with Planning**
   - Use Plan mode for complex tasks
   - Break down large projects into steps
   - Review and approve plans before implementation

2. **Be Specific in Requests**
   - Provide clear requirements
   - Mention file names and locations
   - Specify coding standards or frameworks

3. **Iterate and Refine**
   - Review Bob's output
   - Request improvements or changes
   - Build incrementally

4. **Use the Right Mode**
   - Plan (📝) - Design and strategy
   - Code (💻) - Fast implementation
   - Advanced (🛠️) - Complex tasks with tools
   - Ask (❓) - Learning and analysis
   - Orchestrator (🔀) - Multi-phase projects

5. **Leverage Bob's Tools**
   - File operations (read, write, edit)
   - Code analysis and search
   - Command execution
   - Browser testing

### Common Patterns

**Pattern 1: Plan → Code → Test**
```
1. Plan mode: Design the solution
2. Code mode: Implement the code
3. Advanced mode: Test in browser
```

**Pattern 2: Ask → Code → Refine**
```
1. Ask mode: Understand requirements
2. Code mode: Write initial implementation
3. Code mode: Iterate based on feedback
```

**Pattern 3: Debug → Analyze → Fix**
```
1. Code mode: Identify the issue
2. Ask mode: Understand root cause
3. Code mode: Apply the fix
```

---

## 📚 Additional Resources

### Quick Reference Commands

**File Operations:**
- "Create a file named X with Y content"
- "Read the contents of file X"
- "Update file X to include Y"
- "Search for pattern X in directory Y"

**Code Operations:**
- "Generate a function that does X"
- "Add error handling to function X"
- "Refactor X to use Y pattern"
- "Write tests for module X"

**Analysis:**
- "Explain how X works"
- "What are the performance implications of X?"
- "Review X for security issues"
- "Suggest improvements for X"

### Tips for Success

✅ **DO:**
- Provide context about your project
- Review Bob's suggestions before applying
- Ask for explanations when unclear
- Use specific technical terms
- Break complex tasks into steps

❌ **DON'T:**
- Assume Bob knows your entire codebase
- Skip reviewing generated code
- Use vague or ambiguous requests
- Forget to test the results
- Hesitate to ask follow-up questions

---

## 🎯 Workshop Completion Checklist

Congratulations on completing the workshop! Verify you've accomplished:

- [ ] Created files using Code mode
- [ ] Used Ask mode for explanations
- [ ] Planned a project in Plan mode
- [ ] Generated a complete module with tests
- [ ] Debugged and refactored code
- [ ] Built a multi-file web application
- [ ] Understand Bob's different modes
- [ ] Know when to use each mode
- [ ] Can effectively communicate with Bob
- [ ] Feel confident using Bob for real projects

---

## 💬 Q&A and Next Steps

### Common Questions

**Q: Can Bob work with any programming language?**  
A: Yes! Bob supports all major programming languages and frameworks.

**Q: How do I switch between modes?**  
A: Use the mode selector in the Bob interface or request a mode switch directly.

**Q: What if Bob makes a mistake?**  
A: Simply point out the issue and request a correction. Bob learns from feedback.

**Q: Can Bob access external APIs or databases?**  
A: In Advanced mode, Bob can use MCP servers to interact with external services.

**Q: How do I get the most out of Bob?**  
A: Be specific, provide context, iterate on results, and don't hesitate to ask questions.

### Continue Learning

- Explore Bob's Advanced mode with MCP servers
- Try building larger projects with Orchestrator mode
- Experiment with different programming languages
- Practice debugging real-world code
- Build your own custom workflows

---

## 📝 Feedback

We'd love to hear about your experience! Please share:
- What worked well?
- What was challenging?
- What would you like to learn more about?
- How will you use Bob in your projects?

---

**Thank you for participating in this workshop!**  
**Happy coding with Bob! 🚀**