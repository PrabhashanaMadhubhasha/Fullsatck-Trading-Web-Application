import React, { Component } from 'react'
import axios from 'axios';
// const express =require('express');
// const cors =require('cors');
// const app = express();
// app.use(cors());

export default class Home extends Component {
constructor(props){
  super(props);
  this.state={
    posts:[] // array for get posts
  };
}
componentDidMount(){
  this.retrievePosts();
}
retrievePosts() {
  const stringData = 'HP';
  axios.get("/traders", {
    params: {
      symbol: stringData
    }
  }).then(res => {
    if (res.data.success) {
      this.setState({
        posts: res.data.existingPosts
      });
      console.log(this.state.posts);
    }
  });
}
// onDelete=(id)=>{
//   axios.delete(`/post/delete/${id}`).then((res)=>{
//     alert("Delete Successfully");
//     this.retrievePosts();
//   })
// }

filterData(posts,searchKey){
  const result=posts.filter((post)=>
  post.instrument.toLowerCase().includes(searchKey)||
  post.tradeID.toLowerCase().includes(searchKey)||
  post.status.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}
handleSearchArea=(e)=>{
  const searchKey=e.currentTarget.value;
  axios.get("/traders").then(res=>{
    if(res.data.success){ 
      this.filterData(res.data.existingPosts,searchKey);
    }
  });
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h4 class="text-primary bg-subtle">HP</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>

              </input>
            </div>
          </div>
        <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Trade ID</th>
              <th scope="col">Symbol</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">BuyClOrdID</th>
              <th scope="col">SellClOrdID</th>
              <th scope="col">Trading Status</th>
              <th scope="col">BuyOrdID</th>
              <th scope="col">SellOrdID</th>
              <th scope="col">Reason</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`/HP/trade/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.tradeID}
                  </a>
                </td>
                <td>{posts.instrument}</td>
                <td>{posts.quantity}</td>
                <td>{posts.price}</td>
                <td>{posts.buyClOrdID}</td>
                <td>{posts.sellClOrdID}</td>
                <td>{posts.status}</td>
                <td>{posts.buyOrdID}</td>
                <td>{posts.sellOrdID}</td>
                <td>{posts.reason}</td>
                <td>
                {/* <a className="btn btn-warning" href={`/edit/${posts._id}`}> 
                    <i className="fas fa-edit"></i>&nbsp;Edit  
                </a> */}
                {/* &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}> 
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Order</a></button> */}
      </div>
    )
  }
}









