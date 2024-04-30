import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    username: "Mango",
    age: 2,
    isOnline: true,
  });

  const changeUser = () => {
    setUser({
      ...user,
      age: 3,
    });
  };

  const getUser = () => {
    setUser(user + 1);
  };

  useEffect(() => {
    console.log("code inside useEffect", user);
    window.localStorage.setItem("number-of-clicks", user);
  }, [user]);
  // useEffect =
  //   (() => {
  //     alert(user);
  //   },
  //   [user]);

  return (
    <div style={{ padding: 4, border: "1px solid black" }}>
      <button onClick={changeUser}>Change user</button>
      <button onClick={getUser}>Get user</button>
    </div>
  );
};

export default App;
