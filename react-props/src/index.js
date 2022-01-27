import React from "react";
import ReactDOM from "react-dom";

// make object but its property
function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="byonce foto" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Cards
      name="Byonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+632020200"
      email="b@gaabds.com"
    />

    <Cards
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+894898423"
      email="b@jasjahd.com"
    />

    <Cards
      name="Chuck Nooris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+78327847287"
      email="ema@mail.com"
    />
  </div>,
  document.getElementById("root")
);
