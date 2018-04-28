import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {characters} from './characters'
import {Card, Card2, Card3, Card4, Card5, Card6, Card7, Card8} from './Card'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
<App/>
<Card 
name = {characters[0].name}/>
<Card2
name = {characters[1].name}/>
<Card3
name = {characters[2].name}/>
<Card4
name = {characters[3].name}/>
<Card5 
name = {characters[4].name}/>
<Card6 
name = {characters[5].name}/>
<Card7
name = {characters[6].name}/>
<Card8 
name = {characters[7].name}/>
</div>,
     document.getElementById('root'));
registerServiceWorker();
