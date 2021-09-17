/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
