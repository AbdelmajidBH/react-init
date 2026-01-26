import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting.jsx";
import Counter from "./Counter.jsx";
import JokeFetcher from "./JokeFetcher.jsx";
import RealTimeForm from "./RealTimeForm.jsx";

const name = "Fabrizio";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR (Hot Module
          Replacement).
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2 className="font-bold">Hello, {name}!</h2>

      <Greeting name="World" />
      <JokeFetcher />
      <RealTimeForm />
    </>
  );
}

export default App;
