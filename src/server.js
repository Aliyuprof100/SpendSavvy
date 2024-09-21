const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware and routes
app.use(express.json());
app.use(express.static('public'));

// Expense routes
const expenseRoutes = require('./routes/expenses');
app.use('/api/expenses', expenseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});