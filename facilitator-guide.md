# Workshop Facilitator Guide
## Mastering Bob: Your AI Coding Partner

---

## 📋 Pre-Workshop Checklist

### 1 Week Before
- [ ] Send workshop invitation with prerequisites
- [ ] Share installation instructions for VS Code and Bob
- [ ] Request participants test their setup
- [ ] Prepare backup environment (cloud IDE if needed)

### 1 Day Before
- [ ] Test all exercises in a fresh environment
- [ ] Verify sample files are ready
- [ ] Prepare screen sharing setup
- [ ] Test audio/video equipment
- [ ] Review common troubleshooting scenarios

### 1 Hour Before
- [ ] Open all workshop materials
- [ ] Start recording (if applicable)
- [ ] Test Bob in all modes
- [ ] Have backup examples ready
- [ ] Prepare Q&A document

---

## 🎯 Workshop Delivery Guide

### Introduction (5 minutes)

**Opening Script:**
> "Welcome to Mastering Bob! Today, you'll learn to work with an AI coding partner that can help you write, debug, and refactor code more efficiently. By the end of this session, you'll have built several projects with Bob's assistance and understand how to integrate AI into your development workflow."

**Key Points to Cover:**
1. What Bob is and isn't
   - Bob IS: An intelligent coding assistant, pair programmer, code reviewer
   - Bob ISN'T: A replacement for learning, a magic solution, always perfect

2. Workshop structure
   - 4 hands-on exercises
   - Progressive difficulty
   - Learn by doing

3. Ground rules
   - Ask questions anytime
   - Experiment freely
   - Share discoveries
   - Help each other

**Ice Breaker (Optional):**
Ask participants: "What's the most frustrating coding task you face regularly?"
Connect their answers to how Bob can help.

---

## 🏋️ Exercise 1: Quick Start (8 minutes)

### Setup (1 min)
- Ensure everyone has Bob open
- Verify they can see the mode selector
- Quick demo of switching modes

### Task 1.1: First Request (3 min)

**Facilitator Demo:**
1. Show switching to Code mode
2. Type the request clearly
3. Wait for Bob's response
4. Review the generated code together

**Common Issues:**
- **Issue:** Bob creates file in wrong location
  - **Fix:** Specify full path: "Create src/calculateDiscount.js"
  
- **Issue:** Code doesn't match expectations
  - **Fix:** Be more specific: "Use arrow function syntax" or "Add TypeScript types"

**Discussion Points:**
- Notice how Bob adds JSDoc comments automatically
- Observe the error handling Bob includes
- Point out the clean code structure

### Task 1.2: Ask Mode (2 min)

**Teaching Moment:**
Explain that Ask mode is for learning, not coding. It's like having a senior developer explain concepts.

**Expected Questions from Participants:**
- "Can I ask Bob anything?"
  - Yes, but it's optimized for technical questions
  
- "How detailed should my questions be?"
  - More context = better answers

### Task 1.3: Plan Mode (3 min)

**Key Teaching Point:**
"Always plan before coding complex features. Bob's Plan mode helps you think through architecture before writing a single line of code."

**What to Highlight:**
- The structured breakdown Bob provides
- File organization suggestions
- Feature prioritization
- How this saves time in the long run

**Pro Tip to Share:**
"For any task taking more than 30 minutes, start in Plan mode."

---

## 💻 Exercise 2: Code Generation & Testing (10 minutes)

### Task 2.1: Password Validator (4 min)

**Before Starting:**
Explain the importance of clear requirements. Show how Bob interprets the request.

**Live Coding Tips:**
1. Read the request aloud before sending
2. Point out the specific requirements
3. Show Bob's response
4. Review the generated code together

**Code Review Points:**
- Validation logic clarity
- Error message quality
- Return value structure
- Edge case handling

**Common Participant Questions:**
- "Can I modify the requirements?"
  - Yes! Just ask Bob to adjust: "Change minimum length to 12 characters"
  
- "What if I want different validation rules?"
  - Be specific: "Add requirement for no repeated characters"

### Task 2.2: Unit Tests (3 min)

**Teaching Moment:**
"Bob can generate comprehensive tests, but you should always review them. Tests are documentation of how your code should behave."

**What to Highlight:**
- Test coverage
- Edge cases Bob includes
- Test naming conventions
- Arrange-Act-Assert pattern

**Interactive Element:**
Ask participants: "What test case would you add?" 
Demonstrate adding it with Bob.

### Task 2.3: Documentation (3 min)

**Key Point:**
"Good documentation is as important as good code. Bob can help maintain both."

**Quality Checks:**
- Is the README clear for new users?
- Are examples practical?
- Is installation straightforward?
- Are edge cases documented?

---

## 🐛 Exercise 3: Debugging & Refactoring (10 minutes)

### Setup
Ensure everyone has the buggyCalculator.js file ready.

### Task 3.1: Debug Broken Code (4 min)

**Facilitator Strategy:**
1. Don't reveal the bugs upfront
2. Let Bob discover them
3. Discuss each bug as a learning opportunity

**Bug Discussion Guide:**

**Bug 1: Division by Zero**
- Why it matters: Runtime errors
- Real-world impact: Application crashes
- Best practice: Always validate divisor

**Bug 2: Missing Return**
- Why it matters: Silent failures
- Real-world impact: Unexpected undefined values
- Best practice: Consistent return statements

**Bug 3: Operator Precedence**
- Why it matters: Logic errors
- Real-world impact: Wrong calculations
- Best practice: Use parentheses for clarity

**Bug 4: Type Coercion**
- Why it matters: JavaScript quirks
- Real-world impact: "1" + "1" = "11" not 2
- Best practice: Explicit type conversion

**Bug 5: Naming Inconsistency**
- Why it matters: Code readability
- Real-world impact: Confusion, maintenance issues
- Best practice: Follow naming conventions

**Bug 6: Logic Error**
- Why it matters: Incorrect results
- Real-world impact: Wrong business logic
- Best practice: Unit tests catch these

**Group Discussion:**
"Which bug would be hardest to find without Bob? Why?"

### Task 3.2: Refactoring (3 min)

**Teaching Points:**
- Refactoring vs. rewriting
- When to refactor
- How Bob helps maintain functionality

**Before/After Comparison:**
Show the code side-by-side and discuss improvements.

### Task 3.3: Performance (3 min)

**Advanced Topic:**
Explain that Bob can analyze performance, but human judgment is still needed.

**Discussion:**
"When does performance matter? When is 'good enough' actually good enough?"

---

## 🌐 Exercise 4: Multi-file Web App (10 minutes)

### Task 4.1: Planning (2 min)

**Emphasize:**
"This is where Plan mode shines. Bob helps you think through the entire application structure."

**Review the Plan Together:**
- File organization
- Component breakdown
- Data flow
- Styling approach

**Ask Participants:**
"Does this plan make sense? What would you change?"

### Task 4.2: Implementation (6 min)

**Facilitator Role:**
- Monitor progress
- Help stuck participants
- Share interesting approaches
- Point out good practices

**Things to Watch For:**
- File organization
- Code quality
- Responsive design
- Accessibility considerations

**Mid-Exercise Check-in (3 min mark):**
"How's everyone doing? Any interesting discoveries?"

**Common Challenges:**

**Challenge:** "My HTML isn't rendering correctly"
- **Solution:** Check file paths, verify file names, review browser console

**Challenge:** "The styling looks different than expected"
- **Solution:** Ask Bob to adjust: "Make the design more modern" or "Use a different color scheme"

**Challenge:** "JavaScript isn't working"
- **Solution:** Check browser console, verify script tag, ask Bob to debug

### Task 4.3: Testing & Enhancement (2 min)

**Live Demo:**
1. Open the app in browser
2. Test all features
3. Identify an improvement
4. Ask Bob to implement it

**Feature Ideas to Suggest:**
- Copy quote to clipboard
- Favorite quotes
- Dark mode toggle
- Quote search
- Animation effects

**Wrap-up Discussion:**
"What surprised you about building this with Bob?"

---

## 🎓 Wrap-up & Q&A (2 minutes)

### Key Takeaways to Reinforce

**1. Mode Selection Matters**
- Plan for strategy
- Code for implementation
- Ask for learning
- Advanced for complex tasks

**2. Clear Communication**
- Be specific
- Provide context
- Iterate on results

**3. Review Everything**
- Bob is a tool, not a replacement for judgment
- Always test generated code
- Understand what Bob creates

**4. Iterative Development**
- Start simple
- Build incrementally
- Refine as you go

### Quick Q&A Format

**Time Management:**
- Take 2-3 questions max
- Offer to stay after for more
- Share contact for follow-up

**Common Questions & Answers:**

**Q: "Can Bob work with [specific framework]?"**
A: Yes, Bob supports all major frameworks. Just specify it in your request.

**Q: "How do I handle Bob making mistakes?"**
A: Point out the issue and ask for a correction. Bob learns from feedback.

**Q: "Is there a limit to what Bob can do?"**
A: Bob is powerful but works best on focused tasks. Break large projects into smaller pieces.

**Q: "Can I use Bob for production code?"**
A: Yes, but always review, test, and understand the code Bob generates.

**Q: "How do I get better at working with Bob?"**
A: Practice! The more you use it, the better you'll get at communicating your needs.

### Closing Statement

> "Thank you for participating! Remember, Bob is your coding partner, not your replacement. The best results come from combining Bob's capabilities with your expertise and judgment. Keep experimenting, keep learning, and don't hesitate to reach out with questions. Happy coding!"

---

## 🚨 Troubleshooting Guide

### Technical Issues

**Issue: Bob isn't responding**
- Check internet connection
- Restart VS Code
- Verify Bob extension is active
- Check for error messages in output panel

**Issue: Generated code has errors**
- Ask Bob to fix: "There's an error on line X, please fix it"
- Provide error message to Bob
- Switch to Ask mode for explanation

**Issue: Files created in wrong location**
- Be explicit about paths
- Use relative paths from workspace root
- Ask Bob to move files if needed

**Issue: Mode switching not working**
- Refresh VS Code
- Check mode selector visibility
- Use command palette as backup

### Participant Issues

**Issue: Participant falling behind**
- Pair them with someone ahead
- Provide completed files to catch up
- Offer to review after workshop

**Issue: Participant racing ahead**
- Give bonus challenges
- Ask them to help others
- Encourage experimentation

**Issue: Participant confused about concepts**
- Use Ask mode for explanations
- Provide additional examples
- Schedule follow-up session

### Content Issues

**Issue: Exercise taking too long**
- Skip optional parts
- Provide completed code
- Adjust remaining exercises

**Issue: Exercise too easy**
- Add complexity on the fly
- Introduce advanced features
- Challenge with edge cases

**Issue: Technical difficulty too high**
- Simplify requirements
- Provide more guidance
- Work through example together

---

## 📊 Post-Workshop Activities

### Immediate Follow-up (Same Day)
- [ ] Send thank you email
- [ ] Share workshop materials
- [ ] Provide additional resources
- [ ] Send feedback survey

### Feedback Collection
- What worked well?
- What was confusing?
- What would you change?
- Would you recommend this workshop?

### Success Metrics
- Completion rate of exercises
- Participant confidence level
- Questions asked
- Post-workshop usage of Bob

### Continuous Improvement
- Review feedback
- Update materials
- Refine exercises
- Add new examples

---

## 📚 Additional Resources for Participants

### Recommended Next Steps
1. Build a personal project with Bob
2. Refactor existing code using Bob
3. Explore Advanced mode features
4. Try different programming languages
5. Join Bob community forums

### Practice Projects
- Todo list with database
- Weather app with API
- Portfolio website
- Command-line tool
- Chrome extension

### Learning Resources
- Bob documentation
- Video tutorials
- Community examples
- Best practices guide
- Advanced techniques

---

## 🎯 Facilitator Self-Assessment

After each workshop, reflect on:

**What went well?**
- Which exercises resonated?
- What explanations were clear?
- Where did participants engage most?

**What needs improvement?**
- Which parts were confusing?
- Where did timing fall short?
- What questions weren't anticipated?

**Action items for next time:**
- Specific changes to make
- New examples to add
- Better explanations needed
- Timing adjustments

---

## 📞 Support Contacts

**Technical Issues:**
- Bob support: [support contact]
- VS Code help: [help resources]

**Content Questions:**
- Workshop creator: [contact info]
- Documentation: [link]

**Community:**
- Discord/Slack: [invite link]
- Forum: [forum link]
- GitHub: [repo link]

---

**Good luck with your workshop! Remember: Your enthusiasm and expertise make the difference. Have fun and help participants discover the power of AI-assisted development!**