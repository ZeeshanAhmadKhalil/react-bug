import store from '@Store/index';
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  let persistor = persistStore(store);

  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )

}

export default MyApp;
