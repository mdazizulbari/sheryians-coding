import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, name: "John", city: "USA" },
    { id: 1, name: "Jane", city: "UK" },
    { id: 2, name: "Sam", city: "Australia" },
  ]);
  console.log(props);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
