import React from "react";
import { Button } from "./components/button/Button";
import Form from "./components/form-group/Form";

function App() {
  return (
    <div className="container">
      <form>
        <Form type="text" text="What is Name?" />
        <Form type="email" text="What is email?" />
        <Form type="password" text="What is password?" />
        <Button type="submit" text="Submit" variant="primary" size="small" />
        <Button type="reset" text="Reset" variant="info" size="medium" />
        <Button type="button" text="Login" variant="success" size="large" />
      </form>
    </div>
  );
}

export default App;
