import logo from './logo.svg';
import './App.css';
import Homepage from './Screens/Homepage';
import About from './Screens/About';
import Contacts from './Screens/Contacts';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/about"  element={<About />}>
          </Route>
          <Route path="/contacts"  element={<Contacts />}>
          </Route>
          <Route path="/"  element={<Homepage/>}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
