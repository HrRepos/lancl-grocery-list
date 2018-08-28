// import react
import React from 'react';

// import react-dom
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';  // This line also works, but the previous line is more concise for later

// import App
import App from './components/App.jsx';

//render App
render(<App />, document.getElementById('app'));
//render(<div>Hi</div>, document.getElementById('app'));