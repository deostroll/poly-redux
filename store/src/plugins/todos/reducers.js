// import { fromJS } from 'immutable';
import deepExtend from 'deepextend';

import {
	TODO_EDIT,
	TODO_ADD,
	TODO_DELETE,
	TODO_MARK_COMPLETE,
	TODO_CHANGE_VISIBILITY
} from './actions'

let idm = (state, action) => state

export default {
	[TODO_EDIT] : idm,

	[TODO_ADD] : (state, action) => {
		const task = {
			text: action.payload,
			completed: false
		}
		
		return [...state, task];
	},

	[TODO_DELETE] : idm,

	[TODO_MARK_COMPLETE] : (state, action) => {
		let { id, flag } = action.payload;
		let item = state[id];
		return state.map((todo, idx) => {
			if (idx === id) {
				return { ...todo, completed: flag}
			}
			return todo;
		});
	},

	[TODO_CHANGE_VISIBILITY] : idm
}