import React ,{useState} from 'react'
export default function Form(props){        
    const setUpper=(event)=>{
        setText(event.target.value);
    } 
    const SetUpper=()=>{
       let newtext=text.toUpperCase();
       setText(newtext);
       props.showAlert('Converted to Uppercase ','success');
    } 
    const SetLower=()=>{
       let newtext=text.toLowerCase();
       setText(newtext);
       props.showAlert('Converted to Lowerrcase ','success');
    } 
    const SetClear=()=>{
       let newtext='';
       setText(newtext);
       props.showAlert('Cleared ','success');
    } 
    const Random=()=>{
        let num;
       num= prompt('Enter the limit ');
        console.log(num);
         let result = '';
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < num) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
      } setText(result);
      props.showAlert("Created random text ","success");
    } 
    const [text, setText] = useState("");
return(
        <>
        <h2 className={`heading my-2 text-${props.mode==='dark'?'light':'dark'}`} >Enter text to Analyze below</h2>
    <div className={`mb-3 my-3 text-${props.mode==="dark"?"light":"dark"}`}>
   <textarea className={`form-control text-${props.mode==="dark"?"light":"dark"} bg-${props.mode==="dark"?"secondary":"light"}` } value={text} onChange={setUpper} id="exampleFormControlTextarea1" rows="6"></textarea>
   <button className="btn btn-primary m-2" onClick={SetUpper}>To UpperCase</button>
   <button className="btn btn-primary m-2" onClick={SetLower}>To LowerCase</button> <button className="btn btn-primary mx-2" onClick={Random}>Random</button>
   <button className="btn btn-primary m-2" onClick={SetClear}>To Clear</button>
  </div>
  <div className={`container text-${props.mode}`}>
    <h2 className={` text-${props.mode==='dark'?'light':'dark'}`}>Text Summary</h2>
    <p className={` text-${props.mode==='dark'?'light':'dark'}`}>Words {text.split(' ').filter((element)=>{ return element.length!==0

    }).length} and Characters {text.length}</p>
    <p className={` text-${props.mode==='dark'?'light':'dark'}`}>Minutes taken to read words { 0.0042*text.split(' ').filter((element)=>{ return element.length!==0}).length}</p>
  </div>
  <div className="container"></div>
  <h2 className={` text-${props.mode==='dark'?'light':'dark'}`}>Preview</h2>
  <p className={` text-${props.mode==='dark'?'light':'dark'}`}>{text}</p>
</>
    );
};