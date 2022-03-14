import React, { useState, useEffect } from "react";
import { Button, Cascader } from 'antd'

export default function Step2({ assets, setAssets }) {
    const stocks = [
        { value: "AAPL", label: "Apple Inc."},
        { value: "AMZN", label: "Amazon.com, Inc."},
        { value: "FB", label: "Meta Platforms, Inc."},
        { value: "GOOGL", label: "Alphabet Inc."},
        { value: "MSFT", label: "Microsoft Corp."},
        { value: "NFLX", label: "Netflix, Inc."},
        { value: "SPOT", label: "Spotify Technology S.A"},
        { value: "TSLA", label: "Tesla, Inc."},
      ];

      const etfs = [
        { value: "SPY", label: "SPDR S&P 500 ETF Trust"},
        { value: "VTI", label: "Vanguard Total Stock Market ETF"},
        { value: "QQQ", label: "Invesco QQQ Trust"},
        { value: "IEFA", label: "iShares Core MSCI EAFE ETF"},
        { value: "AGG", label: "iShares Core U.S. Aggregate Bond ETF"},
        { value: "BND", label: "Vanguard Total Bond Market ETF"},
        { value: "GLD", label: "SPDR Gold Shares"},
        { value: "ARKK", label: "ARK Innovation ETF"},
      ];

      const cryptos = [
        { value: "BTC", label: "Bitcoin"},
        { value: "ETH", label: "Ethereum"},
        { value: "XRP", label: "XRP (Ripple)"},
        { value: "LUNA", label: "Terra"},
        { value: "ADA", label: "Cardano"},
        { value: "SOL", label: "Solana"},
        { value: "DOT", label: "Polkadot"},
        { value: "DOGE", label: "Dogecoin"},
        { value: "ATOM", label: "Cosmos"},
        { value: "ALGO", label: "Algorand"},
      ];

      return (
        <Cascader
          placeholder="Take your pick"
          options={stocks}
          onChange={(value) => setAssets(value)}
        />
      );
}