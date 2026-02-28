import React, { useEffect } from 'react'
import './About.css';
import { useState } from 'react';
 const About = () => {
  const API_URL="http://localhost:3500/data";
  const[rawdata,Setrawdata]=useState([]);
const[Showform,setShowform]=useState(true);
const[name,setName]=useState("");
const[email,setemail]=useState("");
const[company_name,setcompany_name]=useState("");
const[text,settext]=useState("");

useEffect(()=>{async function apifuns() {
  try{
  const res=await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rawdata)
    }); 
  const data=await res.json();
  console.log(data); 
}catch(error){
console.error(error);  
}
}
 apifuns()
},[rawdata])

  const onsubmitFunction=(e)=>{
    e.preventDefault();
    setShowform(false);
    const tempdata={id:rawdata.length,name,email,company_name,text};
    Setrawdata(tempdata);
    console.log("button clicked");
  }
  const feedback=(e)=>{
    e.preventDefault();
    setShowform(true);
  }
  
  return (
    <div className='About'>
      {Showform?(
        <form className="Form_info" onSubmit={onsubmitFunction}>
          <label htmlFor="name"></label>
          <input id="name" type='text' placeholder='enter name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <label htmlFor="company_name"></label>
          <input id="company_name" type='text' placeholder='enter company name ' required value={company_name} onChange={(e)=>{setcompany_name(e.target.value)}}/>
          <label htmlFor="gmail" ></label>
          <input id='gmail' type='gmail' placeholder='Enter your gmail ' required value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          <label htmlFor="information"></label>
          <textarea id="information"  placeholder='enter context' required value={text} onChange={(e)=>{settext(e.target.value)}}/>
          <button id='submit' type='submit'>Submit</button>
          </form> ):(<div className="Feedbacks"><h3>Application sent successfully!</h3><button onClick={feedback}>close</button></div>)
}     
    </div>
  )
}

export default About
