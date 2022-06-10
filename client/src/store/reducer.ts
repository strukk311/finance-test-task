import { LOAD_TICKERS } from "./actions";
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from "../types/types";

const initialState: RootState = {
  tickersList: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_TICKERS:
      return ({
        ...state,
        tickersList: action.tickersList,
      });
    
    default:
      return state;
  }
};
