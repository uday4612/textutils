import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase!" , "success");
    }
    const handleLoclick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase!" , "success");
    }
    const handleclearclick = ()=>{
        let newText = '';
        setText(newText);
        props.showalert("Cleared The Text!" , "success");
    }
    const handlecopy =()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copy Text to Clipboard!" , "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something to preview it here!!"}</p>
    </div>
    </>
  )
}
