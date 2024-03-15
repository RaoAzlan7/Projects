import React,{useState} from "react";
export default function TextArea(props){
    const handleChange=(event)=>{
        setText(event.target.value)

    }
    const handleHiClick= ()=>
    {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick= ()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy=()=>{
        let txt = document.getElementById('textBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Copied to Clipboard","success");
        
    }
    const handleClearClick=()=>
    {
        setText("");
    }
    const handleReverseClick=()=>{
        let newText =text.split(" ");
        newText = newText.reverse();
        newText = newText.join(" ");
        setText(newText);
    }
    const [text,setText]=useState("Enter Text here");
    return(
    <>
    <div style={{color: props.mode==='light'?'black':'white'}} className="container">
        
        <div className=" mb-3">
          <h1 >Enter the text to analyze below</h1>
          <textarea style={{resize: "none",
          backgroundColor:props.mode==='light'?'white':'#2c6cc9',
          border:props.mode==='light'?'':'2px solid black',
          color:props.mode==='light'?'black':'cyan'} } className="form-control" onChange={handleChange} id="textBox" value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleHiClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <br/>
        <button className="btn btn-primary my-1" onClick={handleReverseClick}>ɘƨɿɘvɘЯ</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>

        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {Math.round((1/300)*text.split(" ").length*1000)/1000} <b>minutes to read.</b></p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</>
    );
}
