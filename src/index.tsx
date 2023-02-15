import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Helmet>
			<meta charSet="utf-8"/>
			<link rel="icon" href="%PUBLIC_URL%/favicon-32x32.png" />
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta name="theme-color" content="#000000"/>
			<link rel="apple-touch-icon" href="%PUBLIC_URL%/android-chrome-192x192.png"/>
			<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
			<title>Rick and Morty - Characters</title>
			<meta
				name="description"
				content="Web site to study frontend on example of an open API"
			/>
		</Helmet>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
