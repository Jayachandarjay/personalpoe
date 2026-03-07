import React, { useEffect, useState } from 'react'
import Photo from "./1000065584.png";
 import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub  } from "react-icons/fi";

// npx update-browserslist-db@latest
const datas=["Software Developer","Backend Developer","Java Developer","Java Full Stack Developer"];
let i=0;
let j=0;
const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < datas[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + datas[roleIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 200);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % datas.length);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);




  const namechanger=(namedata)=>{
      if(i<namedata.length){
        
      setTimeout(() => {
        namechanger(namedata)
      },200);
      i++;
      }else{
        i=0;
        j++;
        setTimeout(()=>{staller()},1000); 
    }
      
  }
  const staller=()=>{
      if(j>=datas.length){
        j=0;
      }
      namechanger(datas[j]);
  }
  staller();
  

  return (
     
      <main className='Mains'>
      <div className='contenttext'>
        <h2>HELLO this is <span>J.JAYACHANDAR</span></h2>
        <h3>I am a <span id='rolename'> {text}</span></h3>
        <h4>
        I design and develop modern, responsive, and user-friendly applications.<br/> 
        I am passionate about clean code, problem-solving, and continuous learning.
        </h4>
        <div className='Contactpath'>

          <FaLinkedinIn  className="pics" onClick={()=>{window.open("https://www.linkedin.com/in/jayachandar-jayaraman-26b000280")}}/>
          <FiGithub   className="pics"onClick={()=>{window.open("https://github.com/Jayachandarjay")}}/>
          <SiLeetcode className="pics"  onClick={()=>{window.open("https://leetcode.com/u/jayachandarjayaraman")}}/>
          <LiaHackerrank  className="pics"  onClick={()=>{window.open("https://www.hackerrank.com/profile/bugal890")}}/>
      </div>
      </div>
      <div>
        <img src={Photo} alt="docterimage"/>    
      </div>
    </main>
   
  )
}

export default Home
