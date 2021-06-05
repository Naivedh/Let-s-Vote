import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import Main from "./Components/Main";
import firebase from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userids: [],
      voter_id: "",
      password: "",
      user: false,
      allUsers: [],
      msg: "",
      vote: "",
    };
  }

  componentDidMount() {
    this.getuser();
  }

  // vote
  onVote = (val) => {
    // push to database
    this.setState({ vote: val });
    for (const [i, id] of this.state.userids.entries()) {
      if (this.state.allUsers[i].Voter_id === this.state.voter_id) {
        // console.log(i, id);
        firebase.firestore().collection("users").doc(id).update({Vote: val});
      }
    }
  };

  //all uers
  setUser = (data) => {
    this.setState({ allUsers: data });
  };
  setUserId = (data) => {
    this.setState({ userids: data });
  };

  getuser = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((data) => {
        const items = [];
        const id = [];
        data.forEach((doc) => {
          items.push(doc.data());
          id.push(doc.id);
        });
        this.setUser(items);
        this.setUserId(id);
      });
  };

  //input data
  onChangevoterid = (event) => {
    this.setState({ voter_id: event.target.value });
  };
  onChangepass = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.allUsers.forEach((user) => {
      if (
        user.Voter_id === this.state.voter_id &&
        user.Password === this.state.password
      ) {
        this.setState({ user: true });
        this.setState({ vote: user.Vote });
      } else {
        this.setState({ msg: "Invalid User" });
      }
    });
  };

  //logout
  logout = () => {
    this.setState({
      user: false,
      voter_id: "",
      password: "",
      msg: "",
    });
  };

  //render

  render() {
    if (!this.state.user) {
      return (
        <div className="App">
          <Login
            state={this.state}
            onChangevoterid={this.onChangevoterid}
            onChangepass={this.onChangepass}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Main logout={this.logout} state={this.state} onVote={this.onVote} />
      </div>
    );
  }
}

export default App;
