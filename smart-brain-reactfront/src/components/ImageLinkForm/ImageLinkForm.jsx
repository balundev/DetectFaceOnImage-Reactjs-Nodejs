import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
                <p className='f3 text-center'> This Brain detect faces for you!</p>
            <div className="form w-40 pa4 br3 shadow-5 center">
                <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
                <button className='btn-detect w-30 grow f4 link ph3 pv2 white bg-light-purple' onClick={onSubmit}>Detect</button>
            </div>
        </div>
    )
};

export default ImageLinkForm