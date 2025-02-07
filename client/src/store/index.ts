import { reducer } from '../store/reducer';
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  reducer,
  composeWithDevTools(),
);
