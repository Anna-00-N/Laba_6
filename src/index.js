import React from "react";
import ReactDOM from "react-dom";
import MyButton from "./MyButton";
import UsersList from "./UsersList";
import Preloader from "./Preloader";
import "bootstrap/dist/css/bootstrap.css";

/*npm install --save reactstrap react react-dom */
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lalelText: "Сформировать анкеты",
      showClass: "collapse",
      error: null,
      isLoaded: true,
      users: []
    };
  }
  makeQuery() {
    fetch(
      "https://randomuser.me/api/?results=10&inc=picture,name,gender,location,email,dob,phone"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            lalelText: "Спрятать анкеты",
            isLoaded: true,
            showClass: "collapse show",
            users: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  handleClick() {
    //alert("По кнопке кликнули");
    if (this.state.lalelText === "Спрятать анкеты")
      this.setState({
        lalelText: "Сформировать анкеты",
        isLoaded: true,
        showClass: "collapse"
      });
    else {
      this.setState({
        isLoaded: false
      });

      setTimeout(
        function() {
          this.makeQuery();
        }.bind(this),
        1000
      );
    }
  }
  render() {
    const { error, isLoaded, users } = this.state;

    if (isLoaded)
      return (
        <div>
          <MyButton
            label={this.state.lalelText}
            MyClick={() => this.handleClick()}
          />
          <div class={this.state.showClass}>
            <UsersList users={users} />
          </div>
        </div>
      );
    else if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Preloader />
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
