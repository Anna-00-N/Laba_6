import React from "react";
import { Button } from "reactstrap";

class MyButton extends React.Component {
  render() {
    const { label, MyClick } = this.props;
    return (
      <div class="container">
        <div class="col-12">&nbsp;</div>
        <div class="text-center">
          <Button class="text-center" color="info" onClick={MyClick}>
            {label}
          </Button>
        </div>
      </div>
    );
  }
}

export default MyButton;
