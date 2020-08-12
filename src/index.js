import express from "express";
import renderer from "./helpers/renderer";
import "@babel/polyfill";
import { matchRoutes } from "react-router-config";
import Routes from "./client/routes";
import Html from "./helpers/html";
import CreateStore from "./helpers/createStore";
import { ServerStyleSheet } from "styled-components";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = CreateStore();
  //for each route call API if api method defined 
  const promises = matchRoutes(Routes, req.url).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    const context = {};
    const sheet = new ServerStyleSheet();
    const content = renderer(req, store, context, sheet);
    const styles = sheet.getStyleTags();
    if (context.notFound) {
      res.status(404);
    }
    res.send(
      Html({
        content,
        styles,
        store,
      })
    );
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
