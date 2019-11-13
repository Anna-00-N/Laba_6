import React from "react";

class UserAvatar extends React.Component {
  render() {
    const { way, wdth, hght } = this.props;
    return (
      <div>
        <img src={way} width={wdth} height={hght} alt="UserAvatar" />
      </div>
    );
  }
}

export default UserAvatar;
