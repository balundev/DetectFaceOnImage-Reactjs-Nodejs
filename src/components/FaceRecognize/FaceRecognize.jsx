import React from "react";
import './FaceRecognize.css'

const FaceRecognize = ({image, box}) => {
    return (
        <div className='center face-recognize'>
            <img alt="" id="inputImage" src={image}/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
        </div>
    )
};

export default FaceRecognize