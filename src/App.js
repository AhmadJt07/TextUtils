import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode has been enabled", "success");
      // document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      showAlert("light Mode has been enabled", "success");
      // document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          Title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                TitleForm="Enter the Text to Analyze Below"
                showAlert={showAlert}
                // mode={mode}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
