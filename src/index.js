import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import App from './App';
import reportWebVitals from './reportWebVitals';

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: process.env.REACT_APP_LD_CLIENT_SIDE_ID,
  });

  ReactDOM.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
