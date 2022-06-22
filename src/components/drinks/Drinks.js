import React from "react";
import "./Drinks.css";
import ListDrinks from "../drinks/ListDrinks"
const Drinks = () => {
  return (
    <div className="drink_container">
      <div className="row h-100 align-items-center">
        <div data-aos={"slide-right"} className="col-sm-6 coffeText d-flex   p-5">
          <h3>
            its not just <b>COFFEE</b>
          </h3>
          <span>
            Tanked up on <b>coffee</b> , I can now face the <b>day,</b> <br />{" "}
            Taking on anything that may come my <b>way.</b>
          </span>
        </div>
        <div className=" anime-Container col-sm-6  d-flex align-items-center justify-content-center">
          <div className="  coffeAnime" data-aos={"zoom-in"}>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_naadwwio.json"
              background="transparent"
              speed="1"
              loop
         
              autoplay
            ></lottie-player>
          </div>
          <div className="circle" data-aos={"zoom-out"}>

          </div>
        </div>
      </div>
      <ListDrinks  />

    </div>
  );
};

export default Drinks;
