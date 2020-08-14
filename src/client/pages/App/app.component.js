import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </>
    );
  }
}

export default { component: App };
