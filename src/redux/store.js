import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'react-redux'
import reducer from './reducer';

// const composeEnhancer = window.
// __REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore (reducer(applyMiddleware(thunkMiddleware))
);

export default store;