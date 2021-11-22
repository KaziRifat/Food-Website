import React,{userstate,usereffect, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import {css} from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {
  const [loading,setLoading]=useState(false);
  const override = css`
  display: block;
  border-color:red;
  margin-top: 20%;
  `;

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000);
  },[])
  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3D2514"} Loading={loading} css={override} size={40}/>
        :
        <>
        <Navbar/>
        <Header/>
        </>
      }
      
    </div>
  );
}

export default App;
