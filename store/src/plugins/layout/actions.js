export const LAYOUT_FORM_VISIBILITY_CHANGE = 'LAYOUT_FORM_VISIBILITY_CHANGE';
export const LAYOUT_TODO_FILTER_CHANGE = 'LAYOUT_TODO_FILTER_CHANGE';

export const setFormVisibility = flag => {
	return {
		type: LAYOUT_FORM_VISIBILITY_CHANGE,
		payload: flag
	}
}

export const setTodoFilter = (filterFlag) => {
	return {
		type: LAYOUT_TODO_FILTER_CHANGE,
		payload: filterFlag
	}
}