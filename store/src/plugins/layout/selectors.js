import { createSelector } from 'reselect'
import * as flags from './layout-flags';

const layoutState = state => state.layout;
const todoList = state => state.todo;
const currentFilter = state => state.layout.visibilityFlag;

export const getTodosVisibility = createSelector(layoutState, function(state) {
	return state.get("visibilityFilter")
});

export const hasTodos = createSelector(todoList, function(todos) {
	// console.log('hasTodos', todos)
	return !!todos.length;
});

export const getCurrentFilter = createSelector(currentFilter, value => value)


export const canShowItem = (state, idx) => {
	let todos = state.todo;
	let item = todos[idx];
	let currentFlag = state.layout.visibilityFlag;

	if (currentFlag === flags.SHOW_ALL) {
		return true;
	}
	else if (currentFlag === flags.SHOW_COMPLETED && item.completed) {
		return true;
	}
	else if (!item.completed) {
		return true;
	}

}