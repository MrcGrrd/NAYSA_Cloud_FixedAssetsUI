import React from 'react'
import ReactDOM from 'react-dom/client'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import App from './App.jsx'
import './index.css'
import HeaderDetail from './HeaderDetail.jsx';
import Sample from './sample.jsx';
import FixedAsset from './FixedAsset.jsx';
import FARR from './FARR.jsx';
import FA from './FA.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FARR/>
  </React.StrictMode>,
)
