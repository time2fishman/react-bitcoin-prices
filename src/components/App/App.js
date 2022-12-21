import { useState } from "react";
import { Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from "../Home/Home";
import Currencies from '../Currencies/Currencies'
import Price from '../Price/Price'
import "./App.css";

function App() {
  const [price, setPrice] = useState()

  return (
    <div>
      <nav>
        {/* // the link component produces an a element */}
        <Link to="/">
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="bitcoin logo" />
          <h1>Bitcoin Prices</h1>
        </Link>
        <Link to="/currencies">
          <h2>Currency List</h2>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
          { /* Navigate can redirect you to the correct URL if someone types the wrong one */}
          <Route path='/currency' element={<Navigate to='/currencies' />} />
          <Route path="/price/:currency" element={<Price setPrice={setPrice} price={price} />} />
          {/* <Route path='/*' element={<h1>Not a valid Route!</h1>} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App;
