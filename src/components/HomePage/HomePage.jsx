import React, {Component} from 'react';
import '../../App.css';
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo.jsx";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm.jsx";
import Rank from "../Ranks/Rank.jsx";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognize from "../FaceRecognize/FaceRecognize.jsx";


const app = new Clarifai.App({
    apiKey: '8051425abdb743aaa341e9c9c0374175'
});

const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imgUrl: '',
            box: {}
        }
    }

    calcFaceLocation = (data) => {
        const faceLocation = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width, height);
        return {
            leftCol: faceLocation.left_col * width,
            topRow: faceLocation.top_row * height,
            rightCol: width - (faceLocation.right_col * width),
            bottomRow: height - (faceLocation.bottom_row * height),

        }
    };

    displayFaceBox = (box) => {
        this.setState({box: box})
    };
    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };
    onSubmit = () => {
        this.setState({
            imgUrl: this.state.input
        });
        console.log("click");
        app.models
            .predict(Clarifai.FACE_DETECT_MODEL, `${this.state.input}`)
            .then(response => {
                console.log(response);
                this.displayFaceBox(this.calcFaceLocation(response))
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions}/>
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <FaceRecognize box={this.state.box} image={this.state.input}/>

            </div>
        );
    }
}

export default HomePage;
