// src/pages/_app.js
import '@/styles/globals.css'; // Already imported

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
