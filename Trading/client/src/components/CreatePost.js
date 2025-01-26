// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreatePost = () => {
//   const { id } = useParams();
  const [state, setState] = useState({
    // intOrderID: '',
    // orderID: '',
    symbol: '',
    topic: '',
    description: '',
    postCategory: '',
    side: '',
    // status: ''
  });

  const { symbol, topic, description, postCategory, side } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSelectSymbol = (symbol) => {
    setState({
      ...state,
      symbol: symbol,
    });
  };
  const handleSelectSide = (side) => {
    setState({
      ...state,
      side: side,
    });
  };
  // const handleSelectStatus = (status) => {
  //   setState({
  //     ...state,
  //     status: status,
  //   });
  // };
  
  const onSubmit = async (e) => {
    // fetchMaxOrderID();
    setState({
      ...state,
      // intOrderID,
      // orderID: "ORD", //+String(intOrderID),
      // status: "NEW"
    });
    // state.orderID= "s",
    e.preventDefault();
    const data = {
      // intOrderID,
      // orderID,
      symbol,
      topic,
      description,
      postCategory,
      side,
      // status,
    };
  

    try {
      
      const res = await axios.post('/post/save', data);

      
    
      if (res.data.success) {
        alert('Post Created Successfully');
        setState({
          // intOrderID: '',
          // orderID: '',
          symbol: '',
          topic: '',
          description: '',
          postCategory: '',
          side: '',
          // status: '',
        });
      }
    } catch (error) {
      
      console.error('Error creating post:', error);
    }
    
  };



  
  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Create new Post</h1>
      <form className="needs-validation" noValidate>

      <div className="dropdown" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }}>Symbol</label>
        <div>
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            style={{ marginBottom: '15px' }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {state.symbol || 'Select Symbol'}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('MSI')}
                
              >
                MSI
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Asus')}
                
              >
                Asus
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Apple')}
                
              >
                Apple
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('HP')}
                
              >
                HP
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Dell')}
                
              >
                Dell
              </a>
            </li>
            
          </ul>
        </div>
      </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Username</label>
          <input
            type="text"
            className="form-control"
            name="topic"
            placeholder="Enter Username"
            value={topic}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Size</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Enter Size"
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Price</label>
          <input
            type="text"
            className="form-control"
            name="postCategory"
            placeholder="Enter Price"
            value={postCategory}
            onChange={handleInputChange}
          />
        </div>
        <div className="dropdown" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }}>Side</label>
        <div>
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            style={{ marginBottom: '15px' }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {state.side || 'Select Side'}
          </button>
          <ul className="dropdown-menu">
            
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSide('BUY')}
                

              >
                BUY
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSide('SELL')}
                

              >
                SELL
              </a>
            </li>
          </ul>
        </div>
      </div>
 
 
        <button
          className="btn btn-success"
          type="submit"
          style={{ marginBottom: '15px' }}
          onClick={onSubmit}
        >
          <i className="far fa-check-square"></i>
          &nbsp; Save
        </button>
      </form>
    </div>
  );
};

export default CreatePost;