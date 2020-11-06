import React, { useState, useEffect } from "react";
import axios from "axios";
import "./stylesheet/App.css";
import "./stylesheet/coin.css";
import Coin from "./components/Coin";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [coins, setCoins] = useState([]);
  const [state, setState] = useState({
    data: null,
    error: false,
    loading: true,
  });
  const [search, setSearch] = useState("");
  // const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("updated");
      setState((state) => ({ data: state.data, error: false, loading: true }));
      // setSeconds((seconds) => seconds + 10);
      axios
        .get("/getCoins")
        .then((res) => {
          setCoins(res.data);
        })
        .catch((error) => console.log(error));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin-app">
      <Header />
      <div className="sticky-info">
        <div className="coin-search">
          <form className="coin-form">
            <input
              type="text"
              placeholder="Search for a coin"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="coin-info-table">
          <div className="coin-name">
            <h3>Coin</h3>
          </div>
          <div className="coin-shortname">
            <h3>Coin</h3>
          </div>
          <div className="price">
            <h3>Price</h3>
          </div>
          <div className="change1H">
            <h3>Last 24H</h3>
          </div>
          <div className="change1Y">
            <h3>Last 1Y</h3>
          </div>
          <div className="market-cap">
            <h3>Mkt Cap</h3>
          </div>
          <div className="worth">
            <h3>1K$ 1Y ago</h3>
          </div>
        </div>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            priceChange1Y={coin.price_change_percentage_1y_in_currency}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App;
