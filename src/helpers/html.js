import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

const helmet = Helmet.renderStatic();

const Html = ({ content, styles, store }) => `
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
      ${styles}
      <body style="margin:0;background-color:rgb(241, 241, 241);overflow-x:hidden;height:100%;display:flex">
        <div id="root" style="width:100%;display:flex;flex-direction:column;">${content}</div>
        <script>
          window.INITIAL_STATE=${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
`;

export default Html;
