import React,{useState} from 'react'
export default function About() {
const [mode,nextMode]=useState('Enable dark mode');
const [style,myStyle]=useState({
            color:'black',
            backgroundColor:'white'
    });
   
  function toggleMode(){
    if (style.color==='white') {
        myStyle({color:'black',
        backgroundColor:'white'})
        nextMode('Enable dark mode');
    }
    else{
        myStyle({color:'white',
        backgroundColor:'black',})
    nextMode('Enable light mode');
    }
    }
  return (
    <div className='container' style={style}>
    <div style={style} className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div style={style} id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={style}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div style={style} className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo" style={style}>
      <button className="accordion-button collapsed" type="button" style={style}data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div style={style} id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div style={style} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div style={style} className="accordion-item">
    <h2 style={style} className="accordion-header" id="flush-headingThree">
      <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div style={style} id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={style}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className="container">
    <button onClick={toggleMode} className='btn btn-primary my-3'>{mode}</button>
</div>
    </div>
  )
}
