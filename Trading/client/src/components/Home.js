import React, { Component } from 'react'
import axios from 'axios';
// const express =require('express');
// const cors =require('cors');
// const app = express();
// app.use(cors());

export default class Home extends Component {


  render() {
    return (
      <div className="container">
        <h1>Laptops Buy & Sell Trading</h1>
        <img
          src="./public/logo192.png"
          // alt="Description of the image"
          style={{ width: '50%', height: 'auto', margin: '0 auto' }}
        />
        <div>
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Order</a></button>
        </div>

        <div>
          <p style={{ fontWeight: 'bold' }}>Welcome to the Laptops Sell and Buy Trading Web App Service! Explore a seamless online marketplace where tech enthusiasts can effortlessly buy, sell, and trade laptops. Our user-centric platform prioritizes security, providing a secure environment for financial transactions and personal information. With detailed product listings, intuitive search and filter options, and a smart trading platform, users can easily connect, negotiate, and finalize deals. The inclusion of a robust rating and review system ensures a trustworthy community, while our responsive customer support is ready to assist with any inquiries. Join our dynamic community to discover a hassle-free and transparent way to navigate the world of laptop transactions.</p>
        </div>
      </div>
    )
  }
}


























