import React, { useState } from "react";

export default function Textform(props) {
  //handleOnClick define
  const handleOnClick = () => {
    // console.log("Uppercase Was clicked");
    //Uppercase function
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  //handleOnChange define
  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value); //using event type text in textbox if event not use then not type....
  };
  //lowercase function
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  //copy function
  const handlecopy = () => {
    console.log("i am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handlespace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Convet to Uppercase{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlespace}>
          Remove Extra space
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>WORD & CHARACTER COUNTER , READING TIME & PREVIEW</h2>
        <p>
          {text.split(" ").length} WORDS & {text.length} CHARACTERS{" "}
        </p>
        <p>READING TIME = {0.008 * text.split(" ").length}</p>

        <p>{text.length > 0 ? text : "Enter Your Information in Textbox"}</p>
      </div>
    </>
  );
}
