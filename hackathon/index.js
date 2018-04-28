import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {characters} from './characters'
import {Card} from './Card'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
<App/>
<Card 
name = {characters[0].name}/>
</div>,
     document.getElementById('root'));
registerServiceWorker();
