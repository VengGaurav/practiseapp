import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  //Dark Mode & Light Mode
  const [mode, setMode] = useState("light");
  //Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextOpera" about="About Us" /> */}
      <Navbar title="TextOpera" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Textform heading="Enter Your Text Here" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
