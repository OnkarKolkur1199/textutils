import React from "react";
import { Link } from "react-router-dom";

export const NoMatch = () => {
    return (
        <div>
            <strong>Sorry !! No Match Found...</strong>
            {/* <h3 style={{color:"Green"}} >Welcome to TextUtils :</h3>
            <p style={{fontFamily:"cursive", fontSize:"20px", color:"Green"}}>TextUtils is a utility which can be used to manipulate your text</p> */}
            <Link to="/textutils" style={{color:"Red", textDecoration:"none"}} ><p>Go to homepage</p></Link>
        </div>
    )
}