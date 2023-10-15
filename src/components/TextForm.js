import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to uppercase!", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(" Converted to lowercase!", "success");
  }

  const handleClearClick = () => {
    let newText = ("");
    setText(newText)
    props.showAlert(" Text has been cleared!", "success");

  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" Text copied on clipboard!", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces has been removed from the text!", "success");
  }

  const hendleFLUC = () => { 
      let newtext = text.replace(/(^\w{1}|\.\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
      setText(newtext);
      props.showAlert(
        " The first letter of Sentence has been converted to Uppercase", "success"
      );
  };

  const handleReadText = () => {
    const speech = new SpeechSynthesisUtterance()
    speech.text = text

    window.speechSynthesis.speak(speech)
    props.showAlert(' Reading Texts', 'success')
  }

  const handleTalktoType = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.onresult = (event) => {
        const current = event.resultIndex
        const transcript = event.results[current][0].transcript
        setText(text + transcript)
    }
    recognition.start()        
    props.showAlert(' Say something to write in textbox', 'success')
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}} >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#12467e":"white", color: props.mode==="dark"?"white":"#042743" }} id="myBox" rows="6"></textarea>
        </div>
        <button style={{marginTop:"10px", marginBottom:"10px"}} disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleUpClick}>Uppercase</button>
        <button style={{marginTop:"10px", marginBottom:"10px"}} disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleLoClick}>Lowercase</button>
        <button style={{marginTop:"10px", marginBottom:"10px"}} disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
        <button style={{marginTop:"10px", marginBottom:"10px"}} disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
        <button style={{marginTop:"10px", marginBottom:"10px"}} disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button style={{marginTop:"10px", marginBottom:"10px"}} disabled={text.length===0} className='btn btn-primary mx-1' onClick={hendleFLUC}>Sentence Form</button>
        <button style={{marginTop:"10px", marginBottom:"10px"}} disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleReadText}>Read Text</button>
        <button style={{marginTop:"10px", marginBottom:"10px"}} className='btn btn-primary mx-1' onClick={handleTalktoType}>Speak to type</button>

    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h4>Your text summary</h4>
      <p className="my-1">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p className="my-1">{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h4 className="my-3">Preview</h4>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
