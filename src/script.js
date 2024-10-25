document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');

    let expenses = [];

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (description && !isNaN(amount)) {
            const expense = { description, amount };
            expenses.push(expense);
            updateExpenseList();
            updateTotalAmount();
            expenseForm.reset();
        }
    });

    function updateExpenseList() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${expense.description}: ${expense.amount.toFixed(2)} <button onclick="deleteExpense(${index})">Delete</button>`;
            expenseList.appendChild(li);
        });
    }

    function updateTotalAmount() {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalAmount.textContent = total.toFixed(2);
    }

    window.deleteExpense = function(index) {
        expenses.splice(index, 1);
        updateExpenseList();
        updateTotalAmount();
    };
});
