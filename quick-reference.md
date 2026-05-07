# Bob Quick Reference Card
## Essential Commands & Tips for Workshop Participants

---

## 🎯 Bob's Modes

| Mode | Icon | Use When | Example Request |
|------|------|----------|-----------------|
| **Plan** | 📝 | Designing solutions, breaking down tasks | "Plan a REST API with authentication" |
| **Code** | 💻 | Writing or editing code quickly | "Create a React component for user login" |
| **Advanced** | 🛠️ | Using MCP servers, browser testing | "Test this website in the browser" |
| **Ask** | ❓ | Learning, getting explanations | "Explain how async/await works" |
| **Orchestrator** | 🔀 | Managing complex multi-step projects | "Build a full-stack e-commerce site" |

---

## 💬 Communication Patterns

### ✅ Good Requests (Specific & Clear)

```
✅ "Create a JavaScript function called validateEmail that checks if an email 
   is valid using regex. Include JSDoc comments and error handling."

✅ "Refactor the getUserData function in api.js to use async/await instead 
   of promises. Add try-catch error handling."

✅ "Add a dark mode toggle to the navbar in index.html. Use CSS variables 
   for colors and save preference to localStorage."
```

### ❌ Vague Requests (Too General)

```
❌ "Make a function"
❌ "Fix the code"
❌ "Add a feature"
❌ "Make it better"
```

### 🎯 How to Improve Requests

| Vague | Specific |
|-------|----------|
| "Create a website" | "Create a portfolio website with HTML, CSS, and JavaScript. Include sections for About, Projects, and Contact." |
| "Fix this bug" | "The login button in auth.js isn't working. When clicked, it should validate the form and call the API. Please debug and fix." |
| "Add tests" | "Create Jest unit tests for the calculateTotal function in cart.js. Test valid inputs, edge cases, and error conditions." |

---

## 🛠️ Common Commands

### File Operations

```
📄 Create a file
"Create a file called config.json with default settings for the app"

📖 Read a file
"Show me the contents of src/utils.js"

✏️ Edit a file
"In app.js, change the port from 3000 to 8080"

🔍 Search files
"Find all TODO comments in the src directory"

📋 List files
"List all JavaScript files in the components folder"
```

### Code Operations

```
⚡ Generate code
"Create a Node.js Express server with routes for GET and POST /users"

🔧 Refactor code
"Refactor the UserService class to use dependency injection"

🐛 Debug code
"Debug the calculateDiscount function - it's returning NaN"

✅ Add tests
"Write Jest tests for the authentication middleware"

📝 Add documentation
"Add JSDoc comments to all functions in utils.js"
```

### Analysis & Learning

```
❓ Explain code
"Explain how the useEffect hook works in this component"

🔍 Review code
"Review auth.js for security vulnerabilities"

⚡ Optimize code
"Analyze the performance of this sorting algorithm and suggest improvements"

📊 Compare approaches
"Compare using Redux vs Context API for state management in this app"
```

---

## 🎨 Request Templates

### Creating New Features

```
"Create a [component/function/class] called [name] that:
- Does [primary function]
- Accepts [parameters]
- Returns [output]
- Includes [error handling/validation/tests]
- Uses [specific technology/pattern]"
```

**Example:**
```
"Create a React component called UserCard that:
- Displays user name, email, and avatar
- Accepts a user object as props
- Shows a loading state while data fetches
- Includes PropTypes validation
- Uses CSS modules for styling"
```

### Debugging Issues

```
"Debug [file/function] - [describe the problem]:
- Expected behavior: [what should happen]
- Actual behavior: [what's happening]
- Error message: [if any]
- Steps to reproduce: [how to trigger the bug]"
```

**Example:**
```
"Debug the login function in auth.js - users can't log in:
- Expected: Redirect to dashboard after successful login
- Actual: Page refreshes but stays on login screen
- Error: 'Cannot read property token of undefined'
- Steps: Enter valid credentials and click Login button"
```

### Refactoring Code

```
"Refactor [file/function/class] to:
- Improve [readability/performance/maintainability]
- Follow [specific pattern/best practice]
- Add [error handling/logging/validation]
- Maintain [existing functionality/tests]"
```

**Example:**
```
"Refactor the data fetching logic in Dashboard.js to:
- Use React Query instead of useEffect
- Improve error handling with user-friendly messages
- Add loading and retry states
- Maintain all existing functionality"
```

---

## 🚀 Pro Tips

### 1. Start with Planning
```
📝 Plan Mode → 💻 Code Mode → 🛠️ Advanced Mode (if needed)
```
For complex tasks, always plan first!

### 2. Be Incremental
```
✅ "Add a login form to index.html"
   → Wait for result
✅ "Now add validation to the login form"
   → Wait for result
✅ "Connect the form to the API endpoint"
```

### 3. Provide Context
```
❌ "Add error handling"
✅ "Add error handling to the API calls in userService.js. 
   Show user-friendly messages and log errors to console."
```

### 4. Review Before Accepting
- Read the generated code
- Test the functionality
- Ask for explanations if unclear
- Request changes if needed

### 5. Use Ask Mode for Learning
```
Switch to ❓ Ask Mode when you want to:
- Understand how something works
- Learn best practices
- Get recommendations
- Analyze existing code
```

---

## 🔄 Common Workflows

### Workflow 1: New Feature
```
1. 📝 Plan: "Plan a user authentication system"
2. 💻 Code: "Implement the login component"
3. 💻 Code: "Add the registration form"
4. 💻 Code: "Create the authentication service"
5. 🛠️ Advanced: "Test the login flow in browser"
```

### Workflow 2: Bug Fix
```
1. 💻 Code: "Debug the checkout function - payment fails"
2. ❓ Ask: "Explain why the payment API call is failing"
3. 💻 Code: "Fix the payment integration"
4. 💻 Code: "Add error handling for payment failures"
5. 💻 Code: "Write tests to prevent this bug"
```

### Workflow 3: Code Improvement
```
1. ❓ Ask: "Review this code for improvements"
2. 💻 Code: "Refactor based on the suggestions"
3. 💻 Code: "Add unit tests"
4. 💻 Code: "Update documentation"
```

---

## ⚡ Keyboard Shortcuts

| Action | Shortcut | Description |
|--------|----------|-------------|
| Open Bob | `Ctrl/Cmd + Shift + P` → "Bob" | Open Bob interface |
| Switch Mode | Click mode icon | Change Bob's mode |
| New Task | `Ctrl/Cmd + N` | Start new conversation |
| Clear Chat | Clear button | Reset conversation |

---

## 🎯 Exercise Quick Reference

### Exercise 1: Quick Start
```
💻 "Create a JavaScript function called calculateDiscount..."
❓ "Explain the time complexity of calculateDiscount"
📝 "Plan a simple task manager"
```

### Exercise 2: Code Generation
```
💻 "Create a password validator module..."
💻 "Create unit tests for passwordValidator.js..."
💻 "Create a README.md for the password validator..."
```

### Exercise 3: Debugging
```
💻 "Review buggyCalculator.js and identify all bugs"
💻 "Fix all the bugs"
💻 "Refactor the calculator to follow best practices"
```

### Exercise 4: Web App
```
📝 "Plan a Quote of the Day web app..."
💻 "Implement the Quote of the Day app..."
🛠️ "Test the app in browser"
```

---

## 🚨 Troubleshooting

### Bob isn't responding
- Check internet connection
- Refresh the Bob interface
- Verify Bob is active

### Code has errors
```
💻 "There's an error on line 15, please fix it"
❓ "Explain this error: [paste error message]"
```

### Wrong file location
```
💻 "Move config.json to the src folder"
```

### Need to undo changes
```
💻 "Revert the changes to app.js"
```

### Want different approach
```
💻 "Rewrite this using [different pattern/technology]"
```

---

## 📚 Remember

### Bob is a Tool, Not Magic
- ✅ Review all generated code
- ✅ Test everything
- ✅ Understand what Bob creates
- ✅ Ask questions when unclear

### Communication is Key
- ✅ Be specific
- ✅ Provide context
- ✅ Iterate on results
- ✅ Give feedback

### Learn as You Go
- ✅ Use Ask mode to understand
- ✅ Experiment with different approaches
- ✅ Build on what you learn
- ✅ Share discoveries with others

---

## 🎓 After the Workshop

### Practice Projects
1. Build a todo app with database
2. Create a weather dashboard
3. Develop a portfolio website
4. Make a Chrome extension
5. Build a REST API

### Keep Learning
- Explore Advanced mode features
- Try different programming languages
- Experiment with complex projects
- Join Bob community forums

---

## 📞 Need Help?

**During Workshop:**
- Raise your hand
- Ask in chat
- Help your neighbor

**After Workshop:**
- Review workshop materials
- Check documentation
- Join community forums
- Practice regularly

---

**Happy Coding with Bob! 🚀**

*Print this reference card or keep it open during the workshop for quick access to commands and tips.*