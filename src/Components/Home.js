import React, { useState } from "react";

const Home = (props) => {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to Uppercased", "success");
    // console.log("text");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to Lowercased", "success");
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-4 "
        // style={{ Color: "white" }}
        // style={{ Color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.TitleForm}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          // style={{
          //   backgroundColor: props.mode === "dark" ? "gray" : "white",
          //   Color: props.mode === "dark" ? "white" : "black",
          // }}
          id="myBox"
          rows="8"
        ></textarea>
        <div className="my-3">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
        <div
          className="container my-4"
          style={{ Color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview yet."}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
