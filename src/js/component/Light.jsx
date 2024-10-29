import React from "react";

function Light({color, handleClick, shadow}) {
    return (
    <div className="d-flex justify-content-center">
        <div 
        onClick={handleClick} 
        accessKey={color}
        className={`light ${color} ${shadow == color ? "shadow-light" : ""}`}    
        ></div>
    </div>
    )
}

export default Light;