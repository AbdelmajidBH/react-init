import { useEffect } from "react";

function Greeting({ name }) {
  useEffect(() => {
    console.log(`Name changed to ${name}`);
  }, [name]);

  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
