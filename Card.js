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
 
     const Card2 = (characters) => {
      return (
              <div className = 'charcards'>
                <div>
                <img className= 'pic' alt = 'Thor'
                src = 'https://pre00.deviantart.net/fa03/th/pre/f/2012/152/e/c/thor_portrait_by_dicemanart-d51ygfn.jpg'/>
                   </div>
                   <hr/>
            <h2 className = "name1">{characters.name}</h2>
           </div>
         );
       }


       const Card3 = (characters) => {
        return (
                <div className = 'charcards'>
                  <div>
                  <img className= 'pic' alt = 'Hulk'
                  src = 'https://cdn.movieweb.com/img.news.tops/NEH7D1gHenspKJ_1_b/Thor-3-Ragnarok-Hulk-Bruce-Banner-Fight.jpg'/>
                     </div>
                     <hr/>
              <h2 className = "name1">{characters.name}</h2>
             </div>
           );
         }

         const Card4 = (characters) => {
          return (
                  <div className = 'charcards'>
                    <div>
                    <img className= 'pic' alt = 'Steve Rogers'
                    src = 'http://static.comicvine.com/uploads/original/12/122233/3779435-captain_america__the_first_avenger_ipod_wallpaper_by_stephencanlas-d53esbp.jpg'/>
                       </div>
                       <hr/>
                <h2 className = "name1">{characters.name}</h2>
               </div>
             );
           }

           
           const Card5 = (characters) => {
            return (
                    <div className = 'charcards'>
                      <div>
                      <img className= 'pic' alt = 'Black Panther'
                      src = 'https://i.ebayimg.com/images/g/BBwAAOSwrfVZXgVF/s-l300.jpg'/>
                         </div>
                         <hr/>
                  <h2 className = "name1">{characters.name}</h2>
                 </div>
               );
             }
  
             const Card6 = (characters) => {
              return (
                      <div className = 'charcards'>
                        <div>
                        <img className= 'pic' alt = 'Spiderman'
                        src = 'https://pm1.narvii.com/6746/6d27bb586b89f48e11b3250d7ba3a9799c7973c3v2_hq.jpg'/>
                           </div>
                           <hr/>
                    <h2 className = "name1">{characters.name}</h2>
                   </div>
                 );
               }

               const Card7 = (characters) => {
                return (
                        <div className = 'charcards'>
                          <div>
                          <img className= 'pic' alt = 'Loki'
                          src = 'https://a.wattpad.com/cover/21661678-352-k210992.jpg'/>
                             </div>
                             <hr/>
                      <h2 className = "name1">{characters.name}</h2>
                     </div>
                   );
                 }
  

  const Card8 = (characters) => {
                  return (
                          <div className = 'charcards'>
                            <div>
                            <img className= 'pic' alt = 'Dr.Strange'
                            src = 'https://i.pinimg.com/236x/e3/f9/32/e3f932125cd145e06da15bafa2793a9b.jpg'/>
                               </div>
                               <hr/>
                        <h2 className = "name1">{characters.name}</h2>
                       </div>
                      
                       const Card9 = (characters) => {
                    return (
                            <div className = 'charcards'>
                              <div>
                              <img className= 'pic' alt = 'Scarlet Witch'
                              src = 'https://i.pinimg.com/originals/1a/d3/4c/1ad34ca37c6043fa8c35fb5a08d2773d.jpg'/>
                                 </div>
                                 <hr/>
                          <h2 className = "name1">{characters.name}</h2>
                         </div>
                       );
                     }
                      
                     );
                   }
     export {Card, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9 }
