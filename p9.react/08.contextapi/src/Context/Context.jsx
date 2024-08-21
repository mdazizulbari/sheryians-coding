import { createContext } from "react";

export const userContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, name: "John", city: "USA" },
    { id: 1, name: "Jane", city: "UK" },
    { id: 2, name: "Sam", city: "Australia" },
  ]);
  console.log(props);
  return (
    <userContext.Provider value={{ users, setUsers }}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
