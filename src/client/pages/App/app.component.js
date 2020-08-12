import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "../../components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        {renderRoutes(this.props.route.routes)}
      </>
    );
  }
}

export default { component: App };
