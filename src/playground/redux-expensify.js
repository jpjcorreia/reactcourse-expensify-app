import { createStore, combineReducers } from "redux";

// Expenses reducer

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Store creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
	})
);

console.log(store.getState());

const demoState = {
	expenses: [
		{
			id: "fksagfjdskg",
			description: "rent",
			note: "This was final payment",
			amount: 54500,
			createdAt: 0,
		},
	],
	filters: {
		text: "rent",
		sortBy: "amount", // date or amount
		startDate: undefined,
		endDate: undefined,
	},
};
