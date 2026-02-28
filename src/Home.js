import React from 'react'
import Photo from "./1000065584.png";
 import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub  } from "react-icons/fi";

// npx update-browserslist-db@latest
const Home = () => {
  return (
     
      <main className='Mains'>
      <div className='contenttext'>
        <h2>HELLO this is <span>J.JAYACHANDAR</span></h2>
        <h3>I am a <span>Software Developer</span></h3>
        <h4>
        I design and develop modern, responsive, and user-friendly applications.<br/> 
        I am passionate about clean code, problem-solving, and continuous learning.
        </h4>
        <div className='Contactpath'>

          <FaLinkedinIn  className="pics" onClick={()=>{window.open("https://www.linkedin.com/in/jayachandar-jayaraman-26b000280/")}}/>
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
