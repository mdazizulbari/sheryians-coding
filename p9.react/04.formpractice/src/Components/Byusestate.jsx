import { useState } from "react";

const Byusestate = () => {
  const [value, setValue] = useState({ name: "", email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        onChange={(event) => setValue({ ...value, name: event.target.value })}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(event) => setValue({ ...value, email: event.target.value })}
        type="text"
        placeholder="email"
      />
      <input type="submit" />
    </form>
  );
};
export default Byusestate;
