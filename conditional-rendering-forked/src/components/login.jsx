import React from "react";
import Input from "./input";

const Form = (props) => (
  <div>
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />

      <button type="submit">Login</button>
    </form>
  </div>
);

export default Form;
