import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [state, setState] = useState({
    orderID: '',
    symbol: '',
    topic: '',
    description: '',
    postCategory: '',
    side: '',
    status: ''
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSelectSide = (side) => {
    setState({
      ...state,
      side: side,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      orderID: state.orderID,
      symbol: state.symbol,
      topic: state.topic,
      description: state.description,
      postCategory: state.postCategory,
      side: state.side,
      status: state.status,
    };

    axios.put(`/post/update/${id}`, data,{
      params: {
        symbol: "Dell",
        id: id
      }
    }).then((res) => {
      if (res.data.success) {
        alert('Post Updated Successfully');
        setState({
          // symbol: '',
          topic: '',
          description: '',
          postCategory: '',
          side: '',
          // status: '',
        });
        navigate('/Dell/home')
      } else if(res.data.unsuccess) {
        alert('Cannot Update the Post');
      };
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/post/${id}`,{
          params: {
            symbol: "Dell",
            id: id
          }
        });
        if (res.data.success) {
          const { orderID, symbol, topic, description, postCategory, side, status } = res.data.post;
          setState({
            orderID,
            symbol,
            topic,
            description,
            postCategory,
            side,
            status,
          });
          
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
      <form className="needs-validation" noValidate>


      
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Username</label>
          <input
            type="text"
            className="form-control"
            name="topic"
            placeholder="Enter Username"
            value={state.topic}
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
            value={state.description}
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
            value={state.postCategory}
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
          &nbsp; Update
        </button>
      </form>
    </div>
  );
};

export default EditPost;
