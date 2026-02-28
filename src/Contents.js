import { Routes,Route } from 'react-router-dom';
import './Content.css';
import Home from './Home.js';
import About from './About.js';
import Sites from './Sites';
import Skills from './Skills.js';
import Awards from './Awards.js';
const Contents = () => {
  return (
    <div className='Contents'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About"element={<About/>}></Route>
          <Route path="Sites" element={<Sites/>}/>
          <Route path="Skills" element={<Skills/>}/>
          <Route path="Awards" element={<Awards/>}/>
        </Routes>
          
    </div>
  )
}

export default Contents;
