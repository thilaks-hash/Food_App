import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    console.log("child constructor" + this.props.name);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/thilaks-hash");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("child componentDidmount" + this.props.name);
  }
  render() {
    console.log("child render" + this.props.name);
    return (
      <div>
        <h1>Profile class component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>name:{this.state.userInfo.name}</h2>
        <h2>location:{this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default Profile;
