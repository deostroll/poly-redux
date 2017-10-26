import { createSelector } from 'reselect';
import * as VisibilityFlags from './../layout/layout-flags'

const todos = state => state.todo;
const uiState = state => state.layout;

// const visibilityFilter = function(state) { console.log(this); return state.layout.visibilityFlag }
const visibilityFilter = state => state.layout.visibilityFlag;

export const getTodos = createSelector(todos, visibilityFilter, function(todos, flag) {
	console.log('getTodos', todos, flag)
	if (flag === VisibilityFlags.SHOW_ALL) {
		return todos;
	}
	else if (flag === VisibilityFlags.SHOW_COMPLETED) {
		return todos.filter(t => t.completed)
	}
	else {
		return todos.filter(t => !t.completed)
	}
});

const getIndex = (state, idx) => idx

export const getTodoByIndex = createSelector(todos, getIndex, function(todoList, idx){
	console.log(todoList, idx)
	return todoList[idx]
});