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
// retrievePosts(){
//   axios.get("/Apple/posts").then(res=>{
//     if(res.data.success){ //if success is true
//       this.setState({
//         posts:res.data.existingPosts
//       });
//       console.log(this.state.posts)
//     }
//   });
// }
retrievePosts() {
  const stringData = 'Apple';
  axios.get("/posts", {
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

onDelete=(id)=>{
  axios.delete(`/Apple/post/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
  const result=posts.filter((post)=>
  post.topic.toLowerCase().includes(searchKey)||
  post.orderID.toLowerCase().includes(searchKey)||
  post.status.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}
handleSearchArea=(e)=>{
  const searchKey=e.currentTarget.value;
  const stringData = 'Apple';
  axios.get("/posts", {
    params: {
      symbol: stringData
    }
  }).then(res=>{
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
          <h4 class="text-primary bg-subtle">Apple</h4>
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
              <th scope="col">Order ID</th>
              <th scope="col">Symbol</th>
              <th scope="col">Username</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Side</th>
              <th scope="col">Order Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`/Apple/post/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.orderID}
                  </a>
                </td>
                <td>{posts.symbol}</td>
                <td>{posts.topic}</td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>{posts.side}</td>
                <td>{posts.status}</td>
                <td>
                <a className="btn btn-warning" href={`/Apple/edit/${posts._id}`}> 
                    <i className="fas fa-edit"></i>&nbsp;Edit  
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}> 
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Order</a></button>
      </div>
    )
  }
}



























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
