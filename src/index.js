import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoComponent from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoComponent />, document.getElementById('root'));
registerServiceWorker();
