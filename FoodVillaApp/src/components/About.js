import { Component } from "react";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileVisible: false,
    };
  }
  componentDidMount() {}

  render() {
    const { isProfileVisible } = this.state;
    return (
      <div>
        <h1>About Us</h1>
        <h2>
          This page is a about page for my demo foddvilla app 🍇🍈🍉🍊🍌🍒😋
        </h2>
        <h2>
          Logged in User:{" "}
          <UserContext.Consumer>
            {(data) => {
              // console.log(data);
              return <>{data.loggedInUser}</>;
            }}
          </UserContext.Consumer>
        </h2>
        {isProfileVisible ? (
          <>
            <button
              onClick={() => {
                this.setState({ isProfileVisible: false });
              }}
            >
              Hide
            </button>
            <Profile />
          </>
        ) : (
          <button
            onClick={() => {
              this.setState({ isProfileVisible: true });
            }}
          >
            Show Profile
          </button>
        )}
      </div>
    );
  }
}

export default About;
