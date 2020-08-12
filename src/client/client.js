//startup point for the client side application
import React from "react";
import ReactDom from "react-dom";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from "./redux/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducers,
  window.INITIAL_STATE,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
