import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-c0o5nczg3hak61ax.us.auth0.com
// O9070akCxMuQoYIKj72R3wuCvdrXOevL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-c0o5nczg3hak61ax.us.auth0.com"
      clientId="kkMEtX7XjTFwhEyP0XFkE6cIM3Hgn2gM"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    // authorizationParams={{
    //   redirect_uri: window.location.origin
    // }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode >
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
