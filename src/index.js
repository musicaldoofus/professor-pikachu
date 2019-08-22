import React from 'react';
import ReactDOM from 'react-dom';
import appWithRouter from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<appWithRouter/>, document.getElementById('root'));
serviceWorker.unregister();