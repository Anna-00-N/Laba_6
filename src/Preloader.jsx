import React from "react";
import { Spinner } from "reactstrap";

class Preloader extends React.Component {
  render() {
    return (
      <div class="container text-center">
        <div class="col-12">&nbsp;</div>
        <Spinner color="info" style={{ width: "5rem", height: "5rem" }} />
        <p class="text-info">Идёт загрузка...</p>
      </div>
    );
  }
}

export default Preloader;
