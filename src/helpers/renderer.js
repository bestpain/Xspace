import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../client/routes";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

export default (req, store, context, sheet) =>
  //convert the react component to string and send as HTML to client
  renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )
  );
