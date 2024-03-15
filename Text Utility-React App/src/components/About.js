import React, { useState } from 'react'

export const About = () => {
    const[btnText,setBtnText]=useState("Enable Dark Mode");
    const[btnColor,setBtnColor]=useState('dark');
    const toggleDarkMode=()=>{
        if( defaultStyle.backgroundColor==='white'){
            setDefaultStyle({
                backgroundColor:'black',
                color:'white',
            });
            setBtnColor("primary");
            setBtnText("Enable Light Mode")
        }
        else{
            setDefaultStyle({
                backgroundColor:'white',
                color:'black',
                border:'none'
            });
            setBtnColor("dark");
            setBtnText("Enable Dark Mode")

        }
    }
    const[defaultStyle,setDefaultStyle]=useState({
        color:'black',
        backgroundColor:'white'
    });
  return (
    <>
    <div style={defaultStyle} className="accordion" id="accordionExample">
  <div style={defaultStyle} className="accordion-item">
    <h2 className="accordion-header">
      <button style={defaultStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div style={defaultStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div style={defaultStyle}  className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={defaultStyle} className="accordion-item">
    <h2 className="accordion-header">
      <button style={defaultStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div style={defaultStyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={defaultStyle} className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={defaultStyle} className="accordion-item">
    <h2 style={defaultStyle} className="accordion-header">
      <button style={defaultStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div style={defaultStyle}  id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={defaultStyle} className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button className={`btn btn-${btnColor} my-2`} onClick={toggleDarkMode}>{btnText}</button>
    </>
  )
}
