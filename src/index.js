import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SampleComponent from './SampleComponent';

ReactDOM.render(<SampleComponent />, document.getElementById('root'));

serviceWorker.unregister();
