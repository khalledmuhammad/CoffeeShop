import {useEffect } from "react";

import "./App.css";
import Router from "./components/Router";
import Header from "./components/header/Header";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { fetchCoffee } from "./store/DrinkStore";
AOS.init({
  duration: 800,
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer draggable={true} transition={Bounce} autoClose={2000} />
      <Header />

      <Router />
    </div>
  );
}

export default App;
