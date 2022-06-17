import React,{useState}from 'react';
import './App.css';
//import Abc from "./Abc";
//import Data from "./Data";
//import Heading from "./Heading";

/*function ncard(val)
{
  return (
    <Abc name={val.name} 
     age={val.age} 
    height={val.height}/>
         )
}

function App() {
  return (
    <>
      {Data.map(ncard)}
      <Heading/>
    </>

  )
}
 
export default App;*/
function App() {
  const [name,setName]=useState("nihar");
  const [sub,setSub]=useState();
  const abcd = (event)=>{
    
    setName(event.target.value);
   };
   const submit=()=>{
     setSub(name);
   }


  return (
    <>
       <h1> hell0</h1>
       <h1>hiii nihar</h1>
       <h1>{sub}</h1>
      <input type="text" placeholder="enter name" onChange={abcd} value={name}/>
      <button onClick={submit}>click me</button>
    </>

  )
}

export default App;