import * as actions from './actions';
import reducers from './reducers';
import * as selectors from './selectors';
// console.log(reducers)
export default () => {
	return {
		statePlugins: {
			layout: {
				actions,
				reducers,
				selectors	
			}			
		}
	}
}