import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddlewares(rootReducers);
