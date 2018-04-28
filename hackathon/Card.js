import React from 'react'
import './App.css'
import {characters} from './characters'




const Card = (characters) => {
    return (
            <div className = 'charcards'>
              <div>
              <img className= 'pic' alt = 'Tony'
              src = 'https://pbs.twimg.com/profile_images/685915759055351808/ILeBa4II_400x400.png'/>
                 </div>
                 <hr/>
          <h2 className = "name1">{characters.name}</h2>
         </div>
       );
     }
 
     export {Card}