import { LAYOUT_FORM_VISIBILITY_CHANGE, LAYOUT_TODO_FILTER_CHANGE } from './actions'

export default {
	[LAYOUT_FORM_VISIBILITY_CHANGE] : (state, action) => {
		// console.log(state)
		return Object.assign({}, state, { allowAdd: action.payload })
	},

	[LAYOUT_TODO_FILTER_CHANGE] : (state, action) => {
		return Object.assign(state, { visibilityFlag: action.payload });
	}
}