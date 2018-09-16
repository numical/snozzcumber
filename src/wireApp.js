import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './view/App.js';

render(<App />, document.getElementById('app'));
