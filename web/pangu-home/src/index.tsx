import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import ReactDOM from "react-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from "./locales";
// STYLE
import "./assets/styles/index.scss";
import "./index.css";
import "./assets/fonts/line-awesome-1.3.0/css/line-awesome.css";
import {pages} from "./routers";
import ScrollToTop from "./routers/ScrollToTop";
import MediaRunningContainer from "./containers/MediaRunningContainer/MediaRunningContainer";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import Page404 from "./containers/Page404/Page404";
import Footer from "./components/Footer/Footer";

ReactDOM.hydrate(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        {/*@ts-ignore*/}
        <PersistGate loading={null} persistor={persistor}>
          <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
            <BrowserRouter basename={"blog"}>
              <MediaRunningContainer />

              <ScrollToTop />
              <HeaderContainer />
              <Switch>
                {pages.map(({ component, path, exact }) => {
                  return (
                    <Route
                      key={path}
                      // @ts-ignore
                      component={component}
                      exact={!!exact}
                      path={path}
                    />
                  );
                })}
                <Route component={Page404} />
              </Switch>
              <Footer />
              {/* MEDIA */}
            </BrowserRouter>
          </div>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
