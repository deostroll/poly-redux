export const TODO_EDIT = 'TODO_EDIT';
export const TODO_ADD = 'TODO_ADD';
export const TODO_DELETE = 'TODO_DELETE';
export const TODO_MARK_COMPLETE = 'TODO_MARK_COMPLETE';

export const updateItem = (id, text) => {
	return {
		type: TODO_EDIT,
		payload: {
			id, text
		}
	}
}

export const addItem = (text) => {
	return {
		type: TODO_ADD,
		payload: text
	}
}

export const deleteItem = (id) => {
	return {
		type: TODO_DELETE,
		payload: id
	}
}
export const markItem = (id, flag) => {
	return {
		type: TODO_MARK_COMPLETE,
		payload: { id, flag }
	}
}