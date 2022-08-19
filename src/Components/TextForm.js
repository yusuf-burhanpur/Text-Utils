import React, {useState} from "react";

const TextForm = (props) => {
    const [text, setText] = useState('')
    const [inverse, setInverse] = useState("")
    const changeHandler = (event) => {
        setText(event.target.value)
    }
    const clickUpHandler = () => {
        const uppperText = text.toUpperCase();
        setText(uppperText);
        setInverse("upper")
       
            props.alert("Text Changed to Uppercase!", "warning")
       
    }
    const clickLoHandler = () => {
        const lowerText = text.toLowerCase();
        setText(lowerText);
        setInverse("lower")
       
            props.alert("Text Changed to Lowercase!", "warning")
      
    }
    const clickAlHandler = () => {
        const  chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
          chars[i] = chars[i].toUpperCase();
        }
         setText(chars.join(""))
        setInverse("alternate")
       
            props.alert("Text Changed to Alternatecase!", "warning")
       
    } 
    const clickInHandler = () => {
        if (inverse === "upper") {
            const lowerText = text.toLowerCase();
            setText(lowerText)
            setInverse("lower")
        } else if (inverse === "lower") {
            const upperText = text.toUpperCase();
            setText(upperText)
            setInverse("upper")
        } else if (inverse === "alternate") {
            const  chars = text.toUpperCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
          chars[i] = chars[i].toLowerCase();
        }
         setText(chars.join(""))
         setInverse("reverseAlternate")
        } else if (inverse === "reverseAlternate") {
            const  chars = text.toLowerCase().split("");
            for (let i = 0; i < chars.length; i += 2) {
              chars[i] = chars[i].toUpperCase();
            }
             setText(chars.join(""))
             setInverse("alternate")
        }
       
            props.alert("Text Changed!", "warning")
        
    }  
    const clickCoHandler = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();

        
            props.alert("Text Copied!", "success")
      
    }
    const clickClHandler = () => {
        setText("");
       
            props.alert("Text Deleted Successfully!", "success")
       
    }
    return (
        <div style={{color: props.mode === "light" ? "black" : "white"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: "transparent", color: props.mode === "light" ? "black" : "white"}} value={text} id="myBox" rows="8" onChange={changeHandler}></textarea>
        </div>
      
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clickUpHandler}>Upper Case</button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={clickLoHandler}>Lower Case</button>
        <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={clickAlHandler}>Alternate Case</button>
        <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={clickInHandler}>Inverse Case</button>
        <button disabled={text.length === 0} className="btn btn-dark mx-1 my-1" onClick={clickCoHandler}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={clickClHandler}>Clear Text</button>
        <div className="container my-2" style={{color: props.mode === "light" ? "black" : "white"}}>
            <h3>Your text Summary</h3>
            <p>{text.length} characters, and {text.split(" ").filter((element) => {return element.length !== 0}).length} words</p>
            <p>{0.008 * (text.split(" ").filter((element) => {return element.length !== 0}).length)} Minutes to read</p>
            <p>{text.split(".").filter((element) => {return element.length !== 0}).length} sentences</p>
            {text.length > 0 ? <p>{text}</p> : <p>Enter text in text box to preview</p>}
        </div>
        </div>
    )
}

export default TextForm;