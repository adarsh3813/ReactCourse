import { Component } from "react";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileVisible: false,
    };
    console.log("About constructor");
  }
  componentDidMount() {
    console.log("Aout componentDidMount");
  }

  render() {
    console.log("About Render");
    const { isProfileVisible } = this.state;
    return (
      <div>
        <h1>About Us</h1>
        <h2>
          This page is a about page for my demo foddvilla app 🍇🍈🍉🍊🍌🍒😋
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
