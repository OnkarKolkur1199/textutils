import React,{ useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle]=useState({
        color: "black",
        backgroundColor: "white",
        borderRadius : "20px"
    })

    const [ btntext, setBtnText]=useState("Enable Dark Mode")

    const toggleStyle = () =>{
        if (myStyle.color === "black"){
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                borderRadius : "20px"
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                borderRadius : "20px"
            })
            setBtnText("Enable Dark Mode")
        }
    }
    
  return (
    <div className='container' style={myStyle}>
        <h3 className='my-2' style={{paddingBottom:"30px", paddingTop:"30px"}} >About Us</h3>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Software Engineer
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Software engineer working in IT sector as web developer. This application is build from reactJS. Ex : </strong>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt architecto velit ea veniam repudiandae at minus culpa repellat ut inventore qui in tenetur officiis maxime nihil veritatis, perferendis omnis cupiditate quaerat magni.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Location
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Remote! Working from home. State : Maharashtra ; Country : India. Ex :</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eos provident facilis ut consequuntur, atque officiis doloremque nobis neque a ratione, id dolores in mollitia eum tenetur veritatis ipsam laboriosam ipsa corporis error.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Contact Info
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Mobile number : 987654321 Email : 987654321@omk.com. Ex : </strong> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sunt nisi. Blanditiis accusamus omnis, vel ullam praesentium veniam illo, architecto quasi nemo pariatur distinctio soluta, voluptates perspiciatis incidunt a adipisci hic nostrum ab.
                </div>
                </div>
            </div>
        </div>
        <div className="container my-2" style={{paddingBottom:"30px", paddingTop:"30px"}}>
             <button onClick={toggleStyle} type="button" className="btn btn-primary" >{btntext}</button>
        </div>
    </div>
  )
}
