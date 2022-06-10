import { RootState } from '../types/types';

export const getTickersSelector = (state: RootState) => {
  return state.tickersList;
};

