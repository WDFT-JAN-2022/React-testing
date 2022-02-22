import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import RandomNumber from "./components/RandomNumber";
import Count from "./components/Count";
import InputName from "./components/InputName";
import Signup from "./components/Signup";

function App() {
  //Until the return, all of this space is raw JS

  return (
    <div className="App">
      <Count />
      <InputName />
      <Signup />
    </div>
  );
}

export default App;
