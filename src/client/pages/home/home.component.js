import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

const helmet = Helmet.renderStatic();

const Html = ({ content, styles, store }) => `

<style>
*{
  scrollbar-width: thin;
  scrollbar-color: var(--bg-secondary) var(--bg-primary);
}
  body{
    background-color: rgb(241, 241, 241);
    margin:0;
    box-sizing:border-box;
    font-size: 16px;
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,Oxygen,Cantarell,sans-serif;
    font-weight: 400;
    --transition-speed: 300ms;
    --border: 0px;
   
  }
  
  #root{
    height:100vh;
    display: grid;
    grid-template-rows: 40px 1fr 60px;
  }

</style>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${styles} 
    </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE=${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
`;

export default Html;

