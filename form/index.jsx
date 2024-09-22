import { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ fname: "", lname: "" });
  console.log(name);

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ ...name, fname: e.target.value })}
          type="text"
          value={name.fname}
        />
        <input
          type="text"
          value={name.lname}
          onChange={(e) => setName({ ...name, lname: e.target.value })}
        />
      </form>

      <h1>{name.fname}</h1>- <h1>{name.lname}</h1>
    </div>
  );
};

export default Form;
