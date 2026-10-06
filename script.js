
// Store the user's budget
let budget = 0;

// Array used to store multiple expense records
let expenses = [];

// Get elements from the HTML
const budgetInput = document.getElementById("budgetInput");
const setBudgetBtn = document.getElementById("setBudgetBtn");

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const budgetMessage = document.getElementById("budgetMessage");
const expenseList = document.getElementById("expenseList");

// Set the user's budget
setBudgetBtn.addEventListener("click", function () {
    const enteredBudget = Number(budgetInput.value);

    if (enteredBudget <= 0) {
        budgetMessage.textContent = "Please enter a valid budget.";
        return;
    }

    budget = enteredBudget;

    updateDashboard();

    budgetMessage.textContent = "Your budget has been set successfully.";

    budgetInput.value = "";
});

// Add a new expense
addExpenseBtn.addEventListener("click", function () {
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    if (name === "" || amount <= 0) {
        budgetMessage.textContent = "Please enter a valid expense name and amount.";
        return;
    }

    // Add the expense to the array
    expenses.push({
        name: name,
        amount: amount
    });

    expenseName.value = "";
    expenseAmount.value = "";

    updateDashboard();
});

// Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// Update all dashboard information
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = budget - totalExpenses;

    // Update the DOM
    budgetDisplay.textContent = `KSh ${budget.toLocaleString()}`;
    expenseDisplay.textContent = `KSh ${totalExpenses.toLocaleString()}`;
    balanceDisplay.textContent = `KSh ${remainingBalance.toLocaleString()}`;

    // Conditional statements for budgeting feedback
    if (budget === 0) {
        budgetMessage.textContent = "Please set your budget.";
    } else if (remainingBalance < 0) {
        budgetMessage.textContent = "Warning: You have exceeded your budget!";
    } else if (remainingBalance === 0) {
        budgetMessage.textContent = "You have used your entire budget.";
    } else if (remainingBalance < budget * 0.2) {
        budgetMessage.textContent = "Be careful! You have less than 20% of your budget left.";
    } else {
        budgetMessage.textContent = "Good job! You are within your budget.";
    }

    // Display expense records
    displayExpenses();
}

// Display expenses using a loop
function displayExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = "<li>No expenses added yet.</li>";
        return;
    }

    for (let i = 0; i < expenses.length; i++) {
        const listItem = document.createElement("li");

        listItem.textContent =
            `${expenses[i].name}: KSh ${expenses[i].amount.toLocaleString()}`;

        expenseList.appendChild(listItem);
    }
}

// Display the initial dashboard
updateDashboard();