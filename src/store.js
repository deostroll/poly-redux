window["ReduxApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SHOW_ALL = exports.SHOW_ALL = 'all';
var SHOW_COMPLETED = exports.SHOW_COMPLETED = 'completed';
var SHOW_PENDING = exports.SHOW_PENDING = 'pending';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var TODO_EDIT = exports.TODO_EDIT = 'TODO_EDIT';
var TODO_ADD = exports.TODO_ADD = 'TODO_ADD';
var TODO_DELETE = exports.TODO_DELETE = 'TODO_DELETE';
var TODO_MARK_COMPLETE = exports.TODO_MARK_COMPLETE = 'TODO_MARK_COMPLETE';

var updateItem = exports.updateItem = function updateItem(id, text) {
	return {
		type: TODO_EDIT,
		payload: {
			id: id, text: text
		}
	};
};

var addItem = exports.addItem = function addItem(text) {
	return {
		type: TODO_ADD,
		payload: text
	};
};

var deleteItem = exports.deleteItem = function deleteItem(id) {
	return {
		type: TODO_DELETE,
		payload: id
	};
};
var markItem = exports.markItem = function markItem(id, flag) {
	return {
		type: TODO_MARK_COMPLETE,
		payload: { id: id, flag: flag }
	};
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function(root) {

  function isObject(v) {
    if (!v) return false;
    return (v).toString() === '[object Object]';
  }

  function deepExtend(/* obj1, obj2.. */) {
    var args = [].slice.call(arguments);
    var ret = {};

    function dExtend(obj1, obj2) {
      for (var key in obj2) if (obj2.hasOwnProperty(key)) {

          if (isObject(obj2[key])) {
            if (isObject(obj1[key])) {
              dExtend(obj1[key], obj2[key]);
            } else {
              obj1[key] = obj2[key];
            }
          } else if (Array.isArray(obj2[key])) {
            if (Array.isArray(obj1[key])) {
              dExtend(obj1[key], obj2[key]);
            } else {
              obj1[key] = obj2[key];
            }
          } else {
            obj1[key] = obj2[key];
          }

      }

      return obj1;
    }


    for (var i = 0; i < args.length; i++) {
      if (!isObject(args[i])) {
        throw new TypeError('argument "' + args[i] + '" must be an object.');
      }
      ret = dExtend((i===0?{}:ret), args[i]);
    }

    return ret;
  }

  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = deepExtend;
    }
    exports.deepExtend = deepExtend;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return deepExtend;
    });
  } else {
    root.deepExtend = deepExtend;
  }

})(this);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.Reselect = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.defaultMemoize = defaultMemoize;
  exports.createSelectorCreator = createSelectorCreator;
  exports.createStructuredSelector = createStructuredSelector;
  function defaultEqualityCheck(a, b) {
    return a === b;
  }

  function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }

    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  }

  function defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

    var lastArgs = null;
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    return function () {
      if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
        // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
      }

      lastArgs = arguments;
      return lastResult;
    };
  }

  function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

    if (!dependencies.every(function (dep) {
      return typeof dep === 'function';
    })) {
      var dependencyTypes = dependencies.map(function (dep) {
        return typeof dep;
      }).join(', ');
      throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
    }

    return dependencies;
  }

  function createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptions[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }

      var recomputations = 0;
      var resultFunc = funcs.pop();
      var dependencies = getDependencies(funcs);

      var memoizedResultFunc = memoize.apply(undefined, [function () {
        recomputations++;
        // apply arguments instead of spreading for performance.
        return resultFunc.apply(null, arguments);
      }].concat(memoizeOptions));

      // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
      var selector = defaultMemoize(function () {
        var params = [];
        var length = dependencies.length;

        for (var i = 0; i < length; i++) {
          // apply arguments instead of spreading and mutate a local list of params for performance.
          params.push(dependencies[i].apply(null, arguments));
        }

        // apply arguments instead of spreading for performance.
        return memoizedResultFunc.apply(null, params);
      });

      selector.resultFunc = resultFunc;
      selector.recomputations = function () {
        return recomputations;
      };
      selector.resetRecomputations = function () {
        return recomputations = 0;
      };
      return selector;
    };
  }

  var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

  function createStructuredSelector(selectors) {
    var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

    if (typeof selectors !== 'object') {
      throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
    }
    var objectKeys = Object.keys(selectors);
    return selectorCreator(objectKeys.map(function (key) {
      return selectors[key];
    }), function () {
      for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }

      return values.reduce(function (composition, value, index) {
        composition[objectKeys[index]] = value;
        return composition;
      }, {});
    });
  }
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var LAYOUT_FORM_VISIBILITY_CHANGE = exports.LAYOUT_FORM_VISIBILITY_CHANGE = 'LAYOUT_FORM_VISIBILITY_CHANGE';
var LAYOUT_TODO_FILTER_CHANGE = exports.LAYOUT_TODO_FILTER_CHANGE = 'LAYOUT_TODO_FILTER_CHANGE';

var setFormVisibility = exports.setFormVisibility = function setFormVisibility(flag) {
	return {
		type: LAYOUT_FORM_VISIBILITY_CHANGE,
		payload: flag
	};
};

var setTodoFilter = exports.setTodoFilter = function setTodoFilter(filterFlag) {
	return {
		type: LAYOUT_TODO_FILTER_CHANGE,
		payload: filterFlag
	};
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// import { fromJS, Map } from 'immutable'


exports.default = function () {
	if ('TodoRedux' in window && typeof TodoRedux !== 'undefined') {

		return window.TodoRedux;
	} else {

		register(_plugins2.default);
		build();
		return app;
	}
};

var _plugins = __webpack_require__(7);

var _plugins2 = _interopRequireDefault(_plugins);

var _redux = __webpack_require__(14);

var _layoutFlags = __webpack_require__(0);

var VisibilityFlags = _interopRequireWildcard(_layoutFlags);

var _deepextend = __webpack_require__(2);

var _deepextend2 = _interopRequireDefault(_deepextend);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var idFn = function idFn(a) {
	return a;
};

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var app = {
	state: {
		layout: {
			allowAdd: false,
			visibilityFlag: VisibilityFlags.SHOW_ALL
		},
		todo: []
	},
	statePlugins: {},
	VisibilityFlags: VisibilityFlags
};

var appThunkMiddleware = function appThunkMiddleware() {
	return function (_ref) {
		var dispatch = _ref.dispatch,
		    getState = _ref.getState;
		return function (next) {
			return function (action) {
				if (typeof action === 'function') {
					return action(dispath, getState);
				}
				return next(action);
			};
		};
	};
};

var reduxStore = (0, _redux.createStore)(idFn, app.state, composeEnhancers((0, _redux.applyMiddleware)(appThunkMiddleware())));

app.getStore = function () {
	return reduxStore;
};

function makeReducer(reduerObj) {
	return function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
		var action = arguments[1];

		console.log(reducerObj);
		if (!reduerObj) {
			return state;
		}

		var fn = reducerObj[action.type];

		if (fn) {
			return fn(state, action);
		}

		return state;
	};
}

function combinePlugins(plugins) {
	if ((typeof plugins === 'undefined' ? 'undefined' : _typeof(plugins)) === 'object' && !Array.isArray(plugins)) {
		return plugins;
	}

	if (typeof plugins === 'function') {
		return combinePlugins(plugins());
	}

	if ((typeof plugins === 'undefined' ? 'undefined' : _typeof(plugins)) === 'object' && Array.isArray(plugins)) {
		return plugins.map(function (plugin) {
			return combinePlugins(plugin);
		}).reduce(appExtend, {});
	}
}

function appExtend() {
	var dest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return (0, _deepextend2.default)(dest, src);
}

function register(plugins) {
	var rebuild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	var pluginSystem = combinePlugins(plugins);
	appExtend(app, pluginSystem);
}

function buildActions(actions, stateBranch) {
	var key = stateBranch + 'Actions';
	var dispatch = reduxStore.dispatch;

	var cache = {};
	Object.keys(actions).forEach(function (actionKey) {
		var action = actions[actionKey];
		if (typeof action === 'function') {
			cache[actionKey] = (0, _redux.bindActionCreators)(action, dispatch);
		}
	});

	app = (0, _deepextend2.default)(app, _defineProperty({}, key, cache));
}

function prepareReducers(reducers, stateBranch) {
	if (!app.reducers) {
		app.reducers = {};
	}
	app.reducers[stateBranch] = reducers;
}

function buildSelectors(selectors, stateBranch) {
	var key = stateBranch + 'Selectors';
	var cache = {};

	Object.keys(selectors).forEach(function (fnName) {
		var fn = selectors[fnName];

		if (typeof fn === 'function') {
			cache[fnName] = function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				var getState = reduxStore.getState;
				return fn.apply(null, [getState()].concat(args));
			};
		}
	});

	app = (0, _deepextend2.default)(app, _defineProperty({}, key, cache));
}

function buildPartition(partition, statePartition) {
	Object.keys(partition).forEach(function (storeParameter) {
		if (storeParameter === 'actions') {
			buildActions(partition[storeParameter], statePartition);
		} else if (storeParameter === 'reducers') {
			prepareReducers(partition[storeParameter], statePartition);
		} else if (storeParameter === 'selectors') {
			buildSelectors(partition[storeParameter], statePartition);
		}
	});
}

function buildReducers() {
	var reducersCache = app.reducers;
	var finalReducers = Object.keys(reducersCache).reduce(function (hash, stateBranch) {
		var reducers = reducersCache[stateBranch];

		//making your reducer
		hash[stateBranch] = function () {
			var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var action = arguments[1];

			// console.log(reducers)
			var fn = reducers[action.type];
			if (fn) {
				return fn(state, action);
			}
			return state;
		};

		return hash;
	}, {});

	if (Object.keys(finalReducers).length) {
		reduxStore.replaceReducer((0, _redux.combineReducers)(finalReducers));
	} else {
		reduxStore.replaceReducer(function (a) {
			return a;
		});
	}
}

function build() {
	var statePlugins = app.statePlugins;
	Object.keys(statePlugins).forEach(function (statePartition) {
		var value = statePlugins[statePartition];
		buildPartition(value, statePartition);
	});
	buildReducers();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todos = __webpack_require__(8);

var _todos2 = _interopRequireDefault(_todos);

var _layout = __webpack_require__(11);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_todos2.default, _layout2.default];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(9);

var _reducers2 = _interopRequireDefault(_reducers);

var _selectors = __webpack_require__(10);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
	return {
		statePlugins: {
			todo: {
				actions: actions,
				reducers: _reducers2.default,
				selectors: selectors
			}
		}
	};
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TODO_EDIT$TODO_ADD$T;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deepextend = __webpack_require__(2);

var _deepextend2 = _interopRequireDefault(_deepextend);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // import { fromJS } from 'immutable';


var idm = function idm(state, action) {
	return state;
};

exports.default = (_TODO_EDIT$TODO_ADD$T = {}, _defineProperty(_TODO_EDIT$TODO_ADD$T, _actions.TODO_EDIT, idm), _defineProperty(_TODO_EDIT$TODO_ADD$T, _actions.TODO_ADD, function (state, action) {
	var task = {
		text: action.payload,
		completed: false
	};

	return [].concat(_toConsumableArray(state), [task]);
}), _defineProperty(_TODO_EDIT$TODO_ADD$T, _actions.TODO_DELETE, idm), _defineProperty(_TODO_EDIT$TODO_ADD$T, _actions.TODO_MARK_COMPLETE, function (state, action) {
	var _action$payload = action.payload,
	    id = _action$payload.id,
	    flag = _action$payload.flag;

	var item = state[id];
	return state.map(function (todo, idx) {
		if (idx === id) {
			return _extends({}, todo, { completed: flag });
		}
		return todo;
	});
}), _defineProperty(_TODO_EDIT$TODO_ADD$T, _actions.TODO_CHANGE_VISIBILITY, idm), _TODO_EDIT$TODO_ADD$T);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTodoByIndex = exports.getTodos = undefined;

var _reselect = __webpack_require__(3);

var _layoutFlags = __webpack_require__(0);

var VisibilityFlags = _interopRequireWildcard(_layoutFlags);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var todos = function todos(state) {
	return state.todo;
};
var uiState = function uiState(state) {
	return state.layout;
};

// const visibilityFilter = function(state) { console.log(this); return state.layout.visibilityFlag }
var visibilityFilter = function visibilityFilter(state) {
	return state.layout.visibilityFlag;
};

var getTodos = exports.getTodos = (0, _reselect.createSelector)(todos, visibilityFilter, function (todos, flag) {
	console.log('getTodos', todos, flag);
	if (flag === VisibilityFlags.SHOW_ALL) {
		return todos;
	} else if (flag === VisibilityFlags.SHOW_COMPLETED) {
		return todos.filter(function (t) {
			return t.completed;
		});
	} else {
		return todos.filter(function (t) {
			return !t.completed;
		});
	}
});

var getIndex = function getIndex(state, idx) {
	return idx;
};

var getTodoByIndex = exports.getTodoByIndex = (0, _reselect.createSelector)(todos, getIndex, function (todoList, idx) {
	console.log(todoList, idx);
	return todoList[idx];
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(12);

var _reducers2 = _interopRequireDefault(_reducers);

var _selectors = __webpack_require__(13);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// console.log(reducers)
exports.default = function () {
	return {
		statePlugins: {
			layout: {
				actions: actions,
				reducers: _reducers2.default,
				selectors: selectors
			}
		}
	};
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _LAYOUT_FORM_VISIBILI;

var _actions = __webpack_require__(4);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_LAYOUT_FORM_VISIBILI = {}, _defineProperty(_LAYOUT_FORM_VISIBILI, _actions.LAYOUT_FORM_VISIBILITY_CHANGE, function (state, action) {
	// console.log(state)
	return Object.assign({}, state, { allowAdd: action.payload });
}), _defineProperty(_LAYOUT_FORM_VISIBILI, _actions.LAYOUT_TODO_FILTER_CHANGE, function (state, action) {
	return Object.assign(state, { visibilityFlag: action.payload });
}), _LAYOUT_FORM_VISIBILI);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.canShowItem = exports.getCurrentFilter = exports.hasTodos = exports.getTodosVisibility = undefined;

var _reselect = __webpack_require__(3);

var _layoutFlags = __webpack_require__(0);

var flags = _interopRequireWildcard(_layoutFlags);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var layoutState = function layoutState(state) {
	return state.layout;
};
var todoList = function todoList(state) {
	return state.todo;
};
var currentFilter = function currentFilter(state) {
	return state.layout.visibilityFlag;
};

var getTodosVisibility = exports.getTodosVisibility = (0, _reselect.createSelector)(layoutState, function (state) {
	return state.get("visibilityFilter");
});

var hasTodos = exports.hasTodos = (0, _reselect.createSelector)(todoList, function (todos) {
	// console.log('hasTodos', todos)
	return !!todos.length;
});

var getCurrentFilter = exports.getCurrentFilter = (0, _reselect.createSelector)(currentFilter, function (value) {
	return value;
});

var canShowItem = exports.canShowItem = function canShowItem(state, idx) {
	var todos = state.todo;
	var item = todos[idx];
	var currentFlag = state.layout.visibilityFlag;

	if (currentFlag === flags.SHOW_ALL) {
		return true;
	} else if (currentFlag === flags.SHOW_COMPLETED && item.completed) {
		return true;
	} else if (!item.completed) {
		return true;
	}
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Redux = global.Redux || {})));
}(this, (function (exports) { 'use strict';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */
var root$2;

if (typeof self !== 'undefined') {
  root$2 = self;
} else if (typeof window !== 'undefined') {
  root$2 = window;
} else if (typeof global !== 'undefined') {
  root$2 = global;
} else if (true) {
  root$2 = module;
} else {
  root$2 = Function('return this')();
}

var result = symbolObservablePonyfill(root$2);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = createStore;
exports.combineReducers = combineReducers;
exports.bindActionCreators = bindActionCreators;
exports.applyMiddleware = applyMiddleware;
exports.compose = compose;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(16)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
//# sourceMappingURL=store.js.map