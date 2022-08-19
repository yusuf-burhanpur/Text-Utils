import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, {useState} from 'react';

function App(props) {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleHandler = (event) => {
    if (event.target.value === "rgb(4, 91, 98)") {
      document.body.style.backgroundColor = "rgb(4, 91, 98)"
      showAlert("mode is changed", "warning")
      setMode("dark")
    } else if (event.target.value === "#1B4F72") {
      document.body.style.backgroundColor = "#1B4F72"
      showAlert("mode is changed", "warning")
      setMode("dark")

    }else if (event.target.value === "#0B5345") {
        document.body.style.backgroundColor = "#0B5345"
        showAlert("mode is changed", "warning")
      setMode("dark")

    } else if (event.target.value === "#212F3C") {
      document.body.style.backgroundColor = event.target.value
      showAlert("mode is changed", "warning")
      setMode("dark")

    } else if (event.target.value === "#784212") {
      document.body.style.backgroundColor = event.target.value
      showAlert("mode is changed", "warning")
      setMode("dark")

    } else if (event.target.value === "#424949") {
      document.body.style.backgroundColor = event.target.value
      showAlert("mode is changed", "warning")
      setMode("dark")

    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled", "success")
    }
    console.log(event.target.value)
  }
  return (
    <div>
      <Navbar title='Text Utils' mode={mode} toggleHandler={toggleHandler}/>
      <Alert alert={alert} />
      <div className='container my-3'>
      <Routes>
          
          <Route exact path="/" element={<TextForm alert={showAlert} heading="Enter your Text here" mode={mode}/>}>
          </Route>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
        </Routes>
      </div>
      </div>
  );
}

export default App;
