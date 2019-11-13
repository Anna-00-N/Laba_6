import React from "react";
import UserAvatar from "./UserAvatar";

class UserCard extends React.Component {
  F1(pol) {
    if (pol === "male") return "Мужской";
    else return "Женский";
  }
  F2(birth) {
    return birth.slice(0, 10);
  }
  render() {
    const { user } = this.props;
    return (
      <div class="container">
        <div class="col-12">&nbsp;</div>
        <div class="card bg-info mb-3">
          <div class="card-body text-light">
            <p class="card-text">
              <div class="row">
                <div class="col-12 col-sm-6 text-center">
                  <p>&nbsp;</p>
                  <UserAvatar
                    way={user.picture.large}
                    wdth="200px"
                    hght="200px"
                  />
                </div>
                <div class="col-12 col-sm-6 text-center">
                  <p>
                    Фамилия и имя:{" "}
                    <i>
                      {user.name.first} {user.name.last}
                    </i>
                  </p>
                  <p>
                    Пол: <i>{this.F1(user.gender)}</i>
                  </p>
                  <p>
                    Адрес:{" "}
                    <i>
                      {user.location.country},{user.location.city},
                      {user.location.street.name},{user.location.street.number}
                    </i>
                  </p>
                  <p>
                    E-mail: <i>{user.email}</i>
                  </p>
                  <p>
                    Дата рождения: <i>{this.F2(user.dob.date)}</i>
                  </p>
                  <p>
                    Возраст: <i>{user.dob.age}</i>
                  </p>
                  <p>
                    Телефон: <i>{user.phone}</i>
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
