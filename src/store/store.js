import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import categoryReducer from '../reducers/categoryReducers';
import userReducer from '../reducers/userReducers';

const initialState = {

};

const middleware = [thunk];

const store = createStore(
    combineReducers({
        categoryReducer,
        userReducer
    }),
    initialState,
    applyMiddleware(...middleware),

);
let currentValue;
function select(state) {
    return state
}
function handleChange() {
    let previousValue = currentValue;
    currentValue = select(store.getState());


      console.log(
          'Store:',
          previousValue,
          'to',
          currentValue
      )

}
store.subscribe(handleChange);
export default store;