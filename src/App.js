import React, { useEffect, useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

	useEffect(() => {
		setExpenses(JSON.parse(localStorage.getItem('Expenses') || '[]'));
	}, []);

	const addExpenseHandler = (expense) => {
		const updatedExpense = [expense, ...expenses];
		setExpenses(updatedExpense);
		localStorage.setItem('Expenses', JSON.stringify(updatedExpense));
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses item={expenses} />
		</div>
	);
};
export default App;
