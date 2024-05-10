import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { Reducer as studentReducer } from "./StudenReducer/Reducer";
import { Reducer as OtherReducer } from "./OtherReducer/Reducer";

const rootReducer = combineReducers({
  studentReducer,
  OtherReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
