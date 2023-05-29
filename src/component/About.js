import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfilefunctionalComponent from "./Profile";

//---------------------functional component----------------------//
// const About = () => {
//   return (
//     <div>
//       <h2>This is my About Page</h2>
//       <ProfilefunctionalComponent />
//       <Profile name={"xyz"} />
//     </div>
//   );
// };
// export default About;

//----------------class component-----------------------------//
import React from "react";
class About1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }
  componentDidMount() {
    console.log("parent-componentdidmount");
  }
  render() {
    console.log("parent-render");
    return (
      <div>
        <h2>This is my About Page</h2>
        {/* <ProfilefunctionalComponent /> */}
        <Profile name={"First child"} />
        <Profile name={"Second child"} />
      </div>
    );
  }
}
export default About1;
