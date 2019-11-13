import React from "react";
import UserCard from "./UserCard";

class UsersList extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map(user => (
          <UserCard user={user} />
        ))}
      </div>
    );
  }
}

export default UsersList;
