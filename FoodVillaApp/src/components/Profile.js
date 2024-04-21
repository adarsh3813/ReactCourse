import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <img src="https://cdn3.vectorstock.com/i/1000x1000/98/67/cool-guy-vector-3819867.jpg" />
        <h3>Adarsh Dubey</h3>
      </div>
    );
  }
}

export default Profile;
