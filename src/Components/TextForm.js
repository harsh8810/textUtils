import React, {useState} from 'react'



export default function TextForm(props) {
  const[alert,setAlert]=useState(false);
  const[alertText,setAlertText]=useState("");
    const handleUpClick = async()=>{
        console.log(text)
        let newText = text.toUpperCase();
        setText(newText);
        setAlertText("Converted to Uppercase");
          await setTimeout(() => {
           setAlert(true);
         }, 300);
        await setTimeout(()=>{
          setAlert(false)
        },1500);
    }
    const handleLowClick = async()=>{

      console.log(text)
      let newText = text.toLowerCase();
      setText(newText);
      setAlertText("Converted to Lowercase");
          await setTimeout(() => {
           setAlert(true);
         }, 300);
        await setTimeout(()=>{
          setAlert(false)
        },1500);
  }
    const handleClear = async()=>{
      // console.log(text)
      let newText = "";
      setText(newText);
      setAlertText("Text cleared");
      await setTimeout(() => {
        setAlert(true);
      }, 300);
      await setTimeout(() => {
        setAlert(false);
      }, 1500);
  }
    const handleOnChange = (event)=>{
        // console.log("onchange")
        setText(event.target.value)
    }
    const handleCopy = async() => {
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      setAlertText("Text Copied");
          await setTimeout(() => {
           setAlert(true);
         }, 300);
        await setTimeout(()=>{
          setAlert(false)
        },1500);
    }

     async function removeExtraSpaces() {
      // Replace multiple spaces with single space
      let newText = (text.replace(/\s+/g, " "));
      setText(newText);
      setAlertText("Extra Spaces Removed");
      await setTimeout(() => {
        setAlert(true);
      }, 300);
      await setTimeout(() => {
        setAlert(false);
      }, 1500);
    }


    const [text, setText] = useState("");
  return (
    <>
      <div className="mystyle">
        {alert && (
          <div
            class="alert alert-primary fixed-top"
            role="alert"
            style={{ top: "68px", animation: "slide-in-top 1s forwards" }}
          >
            {alertText}
          </div>
        )}
        <div
          className="container"
          style={{ position: "relative", top: "4rem" }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              value={text}
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
          <div className="button-grid">
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
              Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>
              LowerCase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>
              Clear Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>
              Copy Text
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={removeExtraSpaces}
            >
              Remove extra space
            </button>
          </div>
        </div>
        <div  className="summary-container">
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <p>{(text.split(" ").length - 1) * 0.008} Minutes to Read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter some text to preview"}</p>
        </div>
      </div>
    </>
  );
}
