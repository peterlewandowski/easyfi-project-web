import { useState } from "react";
import { Radio } from "antd";

export default function Step1({ types, setType, assets, setAssets }) {
  const [value, setValue] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [stocks, setStocks] = useState([
    { ticker: "AAPL", name: "Apple Inc.", isChecked: false },
    { ticker: "FB", name: "Meta Platforms, Inc.", isChecked: false },
    { ticker: "AMZN", name: "Amazon.com, Inc.", isChecked: false },
    { ticker: "NFLX", name: "Netflix, Inc.", isChecked: false },
    { ticker: "GOOGL", name: "Alphabet Inc.", isChecked: false },
    { ticker: "SPOT", name: "Spotify Technology S.A", isChecked: false },
    { ticker: "TSLA", name: "Tesla, Inc.", isChecked: false },
    { ticker: "MSFT", name: "Microsoft Corp.", isChecked: false },
  ]);
  const [etfs, setEtfs] = useState([
    { ticker: "SPY", name: "SPDR S&P 500 ETF Trust", isChecked: false },
    { ticker: "VTI", name: "Vanguard Total Stock Market ETF", isChecked: false },
    { ticker: "QQQ", name: "Invesco QQQ Trust", isChecked: false },
    { ticker: "IEFA", name: "iShares Core MSCI EAFE ETF", isChecked: false },
    { ticker: "AGG", name: "iShares Core U.S. Aggregate Bond ETF", isChecked: false },
    { ticker: "BND", name: "Vanguard Total Bond Market ETF", isChecked: false },
    { ticker: "GLD", name: "SPDR Gold Shares", isChecked: false },
    { ticker: "ARKK", name: "ARK Innovation ETF", isChecked: false },
  ]);
  const [cryptos, setCryptos] = useState([
    { ticker: "BTC", name: "Bitcoin", isChecked: false },
    { ticker: "ETH", name: "Ethereum", isChecked: false },
    { ticker: "XRP", name: "XRP (Ripple)", isChecked: false },
    { ticker: "LUNA", name: "Terra", isChecked: false },
    { ticker: "ADA", name: "Cardano", isChecked: false },
    { ticker: "SOL", name: "Solana", isChecked: false },
    { ticker: "DOT", name: "Polkadot", isChecked: false },
    { ticker: "DOGE", name: "Dogecoin", isChecked: false },
    { ticker: "ATOM", name: "Cosmos", isChecked: false },
    { ticker: "ALGO", name: "Algorand", isChecked: false },
  ]);

  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">I would like to invest in:</p>
      <p>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Stock</Radio>
          <Radio value={2}>ETF</Radio>
          <Radio value={3}>Crypto</Radio>
        </Radio.Group>
      </p>
      <p>

      </p>
      
      {stocks.map((choice) => {
        return (
          <label
            key={choice.name}
            className="bg-white px-4 py-2  border-2 border-black rounded-md mb-4"
          >
            <input
              key={choice.ticker}
              type="radio"
              className="mr-4"
              value={choice.name}
              name={choice.name}
              onChange={() => {
                if (types.includes(choice.name)) {
                  types.splice(types.indexOf(choice.name), 1);
                  setType([...types]);
                  let newStocks = [...stocks];
                  let stock = newStocks[choice.ticker - 1];
                  stock.isChecked = false;
                  newStocks[choice.ticker - 1] = stock;
                  setStocks([...newStocks]);
                } else {
                  types.push(choice.name);
                  setType([...types]);
                  let newStocks = [...stocks];
                  let stock = newStocks[choice.ticker - 1];
                  stock.isChecked = true;
                  newStocks[choice.ticker - 1] = stock;
                  setStocks([...newStocks]);
                }
              }}
            />
            {choice.name}
          </label>
        );
      })}
    </div>
  );
}
