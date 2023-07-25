import './App.css';
import Navbar from './/Components/Navbar'
import Form from './/Components/Form'
import React, { useState } from 'react'
import Alert from './Components/Alert';
function App() {
  const [mode,setmode]=useState('light');
const toggle=()=> {
  
   if (mode==='light' ) {
    setmode('dark');
    document.body.style.backgroundColor='#0a3057';
    showAlert('Dark mode has been enabled ','success');
  }
  else if (mode==='dark') {
   setmode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode has been enabled ','success');
  }
}
  

const[alert,setAlert]=useState(null);
const showAlert=(msg,st)=>{
  setAlert({
    message:msg,
    state:st,
  })
  setTimeout(()=>{
    setAlert(null);},1400
  )
}
 return (  
 <>
{/* <BrowserRouter> */}
  <Navbar title='TextUtils' about='About' mode={mode} toggle={toggle}    />
 <Alert alert={alert} mode={mode} />
<div className="container">
      {/* <Switch> */}
    <Form mode={mode} showAlert={showAlert} />
      {/* <About/> */}
        {/* </Switch>     */}
</div>
{/* </BrowserRouter> */}
   </>
  );
}
export default App;