import React, { useState } from 'react'

const Sites = () => {
  const[Sitedata,Setsitedata]=useState([{
      id:1,
      name:"Weather cast",
      imagename:"./OIP.jpg",
  },{
      id:2,
      name:"Hospital info",
      imagename:"./OIP.jpg",  
  },{
      id:3,
      name:"Student information System",  
      imagename:"./OIP.jpg",
  }
]);

  return (
    <div className="Sites">
        <ul>{
          Sitedata.map(item=>(
            <li key={item.id} tabIndex={0}>
              <div className="li-back" style={{ backgroundImage: `url(${item.imagename})`
                                                   
            }}>

              </div>
                <h1>{item.name}</h1>

            </li>
          ))
        }
        </ul>
    </div>
  )
}

export default Sites
