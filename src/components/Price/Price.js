import React, { useEffect } from "react";
import "./Price.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

const Price = () => {

  useEffect(() => {
    const currency = this.props.match.params.currency;
    const url = `${coindeskURL}${currency}.json`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        let newPrice = response.bpi[currency].rate;
        this.props.setPrice(newPrice);
      })
      .catch(err => {
        console.error(err);
      });
  }, [])


    return (
      <div>
        <h1>Bitcoin price in {this.props.match.params.currency}</h1>
        <div className="price">{this.props.price}</div>
      </div>
    );
}

export default Price;
