import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();

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
          setPost(res.data.post);
          console.log(res.data.post);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const { orderID, symbol,topic, description, postCategory, side, status } = post;

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>{topic}</h4>
      <hr />
      <dl className="row">
        <dt className="col-sm-3">Order ID</dt>
        <dd className="col-sm-9">{orderID}</dd>
        <dt className="col-sm-3">Symbol</dt>
        <dd className="col-sm-9">{symbol}</dd>
        <dt className="col-sm-3">Description</dt>
        <dd className="col-sm-9">{description}</dd>
        <dt className="col-sm-3">Post Category</dt>
        <dd className="col-sm-3">{postCategory}</dd>
        <dt className="col-sm-3">Side</dt>
        <dd className="col-sm-3">{side}</dd>
        <dt className="col-sm-3">Order Status</dt>
        <dd className="col-sm-3">{status}</dd>
      </dl>
    </div>
  );
};

export default PostDetails;



// import React, { Component } from 'react'
// import axios from 'axios';


// export default class PostDetails extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       post:[] // array for get posts
//     };
//   }
//   componentDidMount(){
//     // this.retrievePosts();
//     const id = this.props.match.params.id;
//     axios.get(`/post/${id}`).then(res=>{
//       if(res.data.success){ //if success is true
//         this.setState({
//           post:res.data.post
//         });
//         console.log(this.state.post);
//       }
//     });
//   }
//   // retrievePosts(){
    
//   // }
//   render() {
//     const {topic,description,postCategory}=this.state.post;
//     return (
//       <div style={{marginTop:'20px'}}>
//         <h4>{topic}</h4>
//         <hr/>
//         <dl className="row">
//           <dt className="col-sm-3">Description</dt>
//           <dd className="col-sm-9">{description}</dd>
//           <dt className="col-sm-3">Post Category</dt>
//           <dd className="col-sm-3">D{PostDetails}</dd>
//         </dl>
//       </div>
//     )
//   }
// }

