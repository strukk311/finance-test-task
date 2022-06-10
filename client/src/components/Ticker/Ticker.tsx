import React from 'react';
import { Tickers } from '../../types/types';
import './Ticker.scss';

type Props = Tickers;

export const Ticker: React.FC<Props> = ({ 
    ticker, 
    exchange,
    price, 
    change, 
    change_percent,
    dividend,
    last_trade_time
}) => {
  return (
    <tr className="Ticker">
      <td className="Ticker__data Ticker__data--column">{ticker}</td>
      <td className="Ticker__data">{exchange}</td>
      <td className="Ticker__data Ticker__data--currency">{price}</td>
      <td className="Ticker__data Ticker__data--currency">{change}</td>
      <td className="Ticker__data">{change_percent}</td>
      <td className="Ticker__data">{dividend}</td>
      <td className="Ticker__data Ticker__data--size">{last_trade_time}</td>
    </tr>
  )
}