import { Tickers } from "../types/types";


export const LOAD_TICKERS = 'LOAD_TICKERS';
export const SHOW_ALL_TICKERS = 'SHOW_ALL_TICKERS';
export const DELETE_TICKER = 'DELETE_TICKER';

export const loadTickersAction = (tickers: Tickers[]) => ({
  type: LOAD_TICKERS,
  tickersList: tickers,
});