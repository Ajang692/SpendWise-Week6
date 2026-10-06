````markdown
# SpendWise

SpendWise is an interactive budgeting application that helps users set a budget, add expenses, view total spending, and monitor their remaining balance.

## Improvements Made This Week

This week, SpendWise was improved by adding JavaScript interactivity. The application can now accept user input, store multiple expenses, calculate total expenses, provide budgeting feedback, and update the dashboard automatically.

The application now demonstrates:

- Conditional statements
- Arrays
- Loops
- DOM manipulation
- Event listeners
- User interaction
- Dynamic dashboard updates

## Conditional Statements

Conditional statements are used to evaluate the user's budgeting situation.

For example, the application checks whether the user has exceeded the budget:

```javascript
if (remainingBalance < 0) {
    budgetMessage.textContent = "Warning: You have exceeded your budget!";
}
````

Other conditions check whether the user has used the entire budget, has less than 20% remaining, or is still within the budget.

## Arrays

An array is used to store multiple expense records.

```javascript
let expenses = [];
```

When the user adds an expense, it is stored in the array using:

```javascript
expenses.push({
    name: name,
    amount: amount
});
```

This allows SpendWise to manage multiple expenses instead of storing each expense in a separate variable.

## Loops

A `for` loop is used to process all expense records and calculate the total amount spent.

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

Another loop is used to display all expense records on the webpage.

## DOM Manipulation

DOM manipulation is used to update the webpage dynamically.

For example:

```javascript
budgetDisplay.textContent = `KSh ${budget.toLocaleString()}`;
```

The application also creates expense list items and adds them to the webpage:

```javascript
const listItem = document.createElement("li");
expenseList.appendChild(listItem);
```

This means the results are displayed directly on the webpage instead of only appearing in the browser console.

## Event Listeners

Event listeners allow the application to respond to user actions.

For example:

```javascript
setBudgetBtn.addEventListener("click", function () {
    // Set budget
});
```

The Add Expense button also uses an event listener:

```javascript
addExpenseBtn.addEventListener("click", function () {
    // Add expense
});
```

These events allow users to interact with the application through buttons and forms.

## How Everything Works Together

The user first enters a budget and clicks the Set Budget button.

The application then:

1. Reads the user's input.
2. Stores the budget.
3. Updates the dashboard.

The user can then enter an expense and click Add Expense.

The application:

1. Reads the expense information.
2. Stores the expense in an array.
3. Uses a loop to calculate total expenses.
4. Calculates the remaining balance.
5. Uses conditional statements to provide feedback.
6. Updates the webpage using DOM manipulation.

This creates a complete flow from user interaction to JavaScript processing and dynamic dashboard updates.

## Challenges and Solutions

One challenge was managing multiple expenses instead of using separate variables for every expense.

This was solved by using an array to store expense objects.

Another challenge was displaying updated information on the webpage.

This was solved by using DOM manipulation to update the dashboard and expense list whenever the user performs an action.

## Technologies Used

* HTML
* CSS
* JavaScript

## Project Purpose

The purpose of SpendWise is to demonstrate how JavaScript can make a webpage interactive by using decision making, arrays, loops, DOM manipulation, and event listeners.

```
```
