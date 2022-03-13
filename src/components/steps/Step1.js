import { useState } from "react";

export default function Step1({ types, setType, assets, setAssets }) {
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

  return (
    <div className="flex flex-col font-cabinet">
      <p className="font-bold text-2xl mb-8">Pick a STOCK/ETF/CRYPTO</p>
      {stocks.map((choice) => {
        return (
          <label
            key={choice.name}
            className="bg-white px-4 py-2  border-2 border-black rounded-md mb-4"
          >
            <input
              key={choice.ticker}
              type="checkbox"
              className="mr-4"
              value={choice.name}
              name={choice.name}
              onChange={() => {
                if (types.includes(choice.name)) {
                  types.splice(types.indexOf(choice.name), 1);
                  setType([...types]);
                  let newCities = [...stocks];
                  let city = newCities[choice.ticker - 1];
                  city.isChecked = false;
                  newCities[choice.ticker - 1] = city;
                  setStocks([...newCities]);
                } else {
                  types.push(choice.name);
                  setType([...types]);
                  let newCities = [...stocks];
                  let city = newCities[choice.ticker - 1];
                  city.isChecked = true;
                  newCities[choice.ticker - 1] = city;
                  setStocks([...newCities]);
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