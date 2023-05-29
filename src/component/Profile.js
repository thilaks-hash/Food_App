import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile Functional component</h1>
      <h2>name:{props.name}</h2>
      <h3>count:{count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        SetCount
      </button>
    </div>
  );
};
export default Profile;
