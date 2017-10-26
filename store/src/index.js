import plugins from './plugins'

import { 
	createStore, 
	bindActionCreators, 
	combineReducers, 
	applyMiddleware, 
	compose
} from 'redux';

// import { fromJS, Map } from 'immutable'
import * as VisibilityFlags from './plugins/layout/layout-flags'
import deepExtend from 'deepextend';

let idFn = a => a;

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let app = {
	state : {
		layout: {
			allowAdd : false,
			visibilityFlag: VisibilityFlags.SHOW_ALL
		},
		todo: []
	},
	statePlugins: {},
	VisibilityFlags
}



let appThunkMiddleware = () => {
	return ({ dispatch, getState }) => next => action => {
		if (typeof action === 'function') {
			return action(dispath, getState)
		}
		return next(action);
	}
};

let reduxStore = createStore(idFn, app.state, composeEnhancers(applyMiddleware(appThunkMiddleware())));

app.getStore = () => reduxStore;

function makeReducer(reduerObj) {
	return (state = new Map(), action) => {
		console.log(reducerObj)
		if (!reduerObj) {
			return state;
		}

		let fn = reducerObj[action.type];

		if(fn) {
			return fn(state, action);
		}

		return state;
	}
}

function combinePlugins(plugins) {
	if (typeof plugins === 'object' && !Array.isArray(plugins)) {
		return plugins
	}

	if (typeof plugins === 'function') {
		return combinePlugins(plugins());
	}

	if (typeof plugins === 'object' && Array.isArray(plugins)) {
		return plugins.map(plugin => combinePlugins(plugin)).reduce(appExtend, {})
	}
}

function appExtend(dest = {}, src = {}){
	return deepExtend(dest, src)
}

function register(plugins, rebuild = true) {
	let pluginSystem = combinePlugins(plugins)
	appExtend(app, pluginSystem)
}


function buildActions(actions, stateBranch) {
	const key = stateBranch + 'Actions';
	const dispatch = reduxStore.dispatch;

	let cache = {};
	Object.keys(actions).forEach(actionKey => {
		const action = actions[actionKey];
		if (typeof action === 'function') {
			cache[actionKey] = bindActionCreators(action, dispatch);
		}
	});

	app = deepExtend(app, { [key] : cache });
}

function prepareReducers(reducers, stateBranch) {
	if (!app.reducers) {
		app.reducers = {};
	}
	app.reducers[stateBranch] = reducers;
}

function buildSelectors(selectors, stateBranch) {
	const key = stateBranch + 'Selectors';
	let cache = {};

	Object.keys(selectors).forEach(fnName => {
		const fn = selectors[fnName];

		if (typeof fn === 'function') {
			cache[fnName] = (...args) => {
				const getState = reduxStore.getState;
				return fn.apply(null, [getState(), ...args])
			}
		}
	});

	app = deepExtend(app, { [key] : cache });
}

function buildPartition(partition, statePartition) {
	Object.keys(partition).forEach(storeParameter => {
		if (storeParameter === 'actions') {
			buildActions(partition[storeParameter], statePartition);
		}
		else if(storeParameter === 'reducers') {
			prepareReducers(partition[storeParameter], statePartition);
		}
		else if (storeParameter === 'selectors') {
			buildSelectors(partition[storeParameter], statePartition);
		}
	})
}

function buildReducers() {
	const reducersCache = app.reducers;
	const finalReducers = Object.keys(reducersCache).reduce((hash, stateBranch) => {
		let reducers = reducersCache[stateBranch];

		//making your reducer
		hash[stateBranch] = (state = {}, action) => {
			// console.log(reducers)
			let fn = reducers[action.type];
			if (fn) {
				return fn(state, action)
			}
			return state
		};

		return hash;
	}, {});

	if (Object.keys(finalReducers).length) {
		reduxStore.replaceReducer(combineReducers(finalReducers))	
	}
	else {
		reduxStore.replaceReducer(a => a)
	}
	
}

function build() {
	let statePlugins = app.statePlugins
	Object.keys(statePlugins).forEach(statePartition => {
		const value = statePlugins[statePartition];
		buildPartition(value, statePartition);
	});
	buildReducers();
}

export default function () {
	if ('TodoRedux' in window && typeof TodoRedux !== 'undefined') {
		
		return window.TodoRedux;
	}
	else {
		
		register(plugins);
		build();
		return app;
	}
}