import React, { useState } from 'react';
import './App.css';
import Add_todo from './components/Add_todo';
import Add_post from './components/Add_post';

function App() {
  const mains = {
    height: '100vh',
    width: '85%',
    backgroundColor: 'lightblue',
    // marginLeft: '0.5rem'
    padding: '1rem'
  }
  const sidez = {
    height: '100vh',
    width: '15%',
    backgroundColor: 'skyblue'
  }
  const overall = {
    height: '100vh',
    width: '100vw',
  }
  const posts = {
    boxShadow: 'rgb(0,0,0,0.33) 1px 3px 2px 0px',
  }

  const post_list = {
    display: 'flex',
    // justifyContent: 'space-between',
    gap: '0.5rem',
    alignItems: 'center',
    padding: '0.5rem',
    margin: '0.5rem',
    // borderRadius: '0.5rem',
    backgroundColor: 'lightgreen',
    boxShadow: 'rgb(0,0,0,0.33) 1px 3px 2px 0px',
  }

  const members = ['vice president', 'speaker', 'accountance', 'chair person', 'guild president','Raymond'];
  return (
    <div className="d-flex justify-content-around" style={overall}>
    <side style={sidez}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
      </nav>
    </side>
    <main style={mains} className="d-flex justify-content-around">
      <section>
        <h1>Available Posts</h1>
        <div className="posts" style={posts}>
          {members.map((member,index) => (
            <div className="alert alert-primary" style={post_list} key={index}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                </svg>
                {member}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1>Add Post</h1>
        <Add_post/>
        <br />
        <h3>Add Post Requirements</h3>
        <Add_todo/>
      </section>
    </main>
    </div>
  )
}

export default App
