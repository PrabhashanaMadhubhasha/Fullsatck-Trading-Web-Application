import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import EditPost_MSI from './components/EditPost_MSI.js';
import Home_MSI from './components/Home_MSI.js';
import NavBar_MSI from './components/NavBar_MSI.js';
import PostDetails_MSI from './components/PostDetails_MSI.js';
import Result_MSI from './components/Result_MSI.js';

import EditPost_Asus from './components/EditPost_Asus.js';
import Home_Asus from './components/Home _Asus.js';
import NavBar_Asus from './components/NavBar_Asus.js';
import PostDetails_Asus from './components/PostDetails_Asus.js';
import Result_Asus from './components/Result_Asus.js';

import EditPost_Apple from './components/EditPost_Apple.js';
import Home_Apple from './components/Home _Apple.js';
import NavBar_Apple from './components/NavBar_Apple.js';
import PostDetails_Apple from './components/PostDetails _Apple.js';
import Result_Apple from './components/Result _Apple.js';

import EditPost_HP from './components/EditPost_HP.js';
import Home_HP from './components/Home _HP.js';
import NavBar_HP from './components/NavBar_HP.js';
import PostDetails_HP from './components/PostDetails _HP.js';
import Result_HP from './components/Result _HP.js';

import EditPost_Dell from './components/EditPost_Dell.js';
import Home_Dell from './components/Home _Dell.js';
import NavBar_Dell from './components/NavBar_Dell.js';
import PostDetails_Dell from './components/PostDetails _Dell.js';
import Result_Dell from './components/Result _Dell.js';

import Home from './components/Home.js';
import MainNavBar from './components/MainNavBar.js';
import CreatePost from './components/CreatePost.js';
import Login from './login/Login';
import SignUp from './login/SignUp';
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/MSI/home"
            element={
              <>
                <MainNavBar />
                <NavBar_MSI />
                <Home_MSI />
              </>
            }
          />
          <Route
            path="/MSI/edit/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_MSI />
                <EditPost_MSI />
              </>
            }
          />
          <Route
            path="/MSI/post/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_MSI />
                <PostDetails_MSI />
              </>
            }
          />
          <Route
            path="/MSI/result"
            element={
              <>
                <MainNavBar />
                <NavBar_MSI />
                <Result_MSI />
              </>
            }
          />

          <Route
            path="/Asus/home"
            element={
              <>
                <MainNavBar />
                <NavBar_Asus />
                <Home_Asus />
              </>
            }
          />
          <Route
            path="/Asus/edit/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_Asus />
                <EditPost_Asus />
              </>
            }
          />
          <Route
            path="/Asus/post/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_Asus />
                <PostDetails_Asus />
              </>
            }
          />
          <Route
            path="/Asus/result"
            element={
              <>
                <MainNavBar />
                <NavBar_Asus />
                <Result_Asus />
              </>
            }
          />




          <Route
            path="/Apple/home"
            element={
              <>
                <MainNavBar />
                <NavBar_Apple />
                <Home_Apple />
              </>
            }
          />
          <Route
            path="/Apple/edit/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_Apple />
                <EditPost_Apple />
              </>
            }
          />
          <Route
            path="/Apple/post/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_Apple />
                <PostDetails_Apple />
              </>
            }
          />
          <Route
            path="/Apple/result"
            element={
              <>
                <MainNavBar />
                <NavBar_Apple />
                <Result_Apple />
              </>
            }
          />



          <Route
            path="/HP/home"
            element={
              <>
                <MainNavBar />
                <NavBar_HP />
                <Home_HP />
              </>
            }
          />
          <Route
            path="/HP/edit/:id"
            element={
              <>
                <NavBar_HP />
                <EditPost_HP />
              </>
            }
          />
          <Route
            path="/HP/post/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_HP />
                <PostDetails_HP />
              </>
            }
          />
          <Route
            path="/HP/result"
            element={
              <>
                <MainNavBar />
                <NavBar_HP />
                <Result_HP />
              </>
            }
          />



          <Route
            path="/Dell/home"
            element={
              <>
                <MainNavBar />
                <NavBar_Dell />
                <Home_Dell />
              </>
            }
          />
          <Route
            path="/Dell/edit/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_Dell />
                <EditPost_Dell />
              </>
            }
          />
          <Route
            path="/Dell/post/:id"
            element={
              <>
                <MainNavBar />
                <NavBar_Dell />
                <PostDetails_Dell />
              </>
            }
          />
          <Route
            path="/Dell/result"
            element={
              <>
                <MainNavBar />
                <NavBar_Dell />
                <Result_Dell />
              </>
            }
          />

          <Route
            path="/add"
            element={
              <>
                <MainNavBar />
                <CreatePost />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <MainNavBar />
                <Home />
              </>
            }
          />

          



          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};




export default App;

// import React, { Component } from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import CreatePost from './components/CreatePost';
// import EditPost from './components/EditPost';
// import Home from './components/Home';
// import NavBar from './components/NavBar';
// import PostDetails from './components/PostDetails';
// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//       <div className="container">
//         <NavBar/>
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/add" element={<CreatePost/>}/>
//           <Route exact path="/edit/:id" element={<EditPost/>}/>
//           <Route exact path="/post/:id" element={<PostDetails/>}/>
//         </Routes>
        


        
//       </div>
//       </BrowserRouter>
//     )
//   }
// }


