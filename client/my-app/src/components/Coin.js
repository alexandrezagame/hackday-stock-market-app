import React from "react";
import "../stylesheet/coin.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Coin = ({
  image,
  name,
  price,
  symbol,
  priceChange,
  priceChange1Y,
  marketcap,
}) => {
  const initInv = 1000;
  const change = (initInv * priceChange1Y) / 100;
  const invWorthToday = (initInv + change).toFixed(2);
  console.log("console log ", invWorthToday);

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-date">
          <p className="coin-price">${price}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">
              <BsArrowDown />
              {priceChange.toFixed(3)}%
            </p>
          ) : (
            <p className="coin-percent green">
              <BsArrowUp />
              {priceChange}%
            </p>
          )}
          <p className="coin-marketcap">
            {priceChange1Y === null || priceChange1Y === undefined ? (
              <p>
                No data <br /> available
              </p>
            ) : (
              <p>{priceChange1Y.toFixed(2)}%</p>
            )}
          </p>
          <p className="coin-marketcap">${marketcap.toLocaleString()}</p>

          {invWorthToday < 0 ? (
            <p className="coin-worth">-</p>
          ) : (
            <p className="coin-worth">${invWorthToday}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
