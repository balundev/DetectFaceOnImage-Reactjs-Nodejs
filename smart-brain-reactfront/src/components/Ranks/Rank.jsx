import React from "react";

class Rank extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        if(this.props.entries==='unranked'){
            return (
                <div className="text-center">
                    <div className="white f3">
                        Please login to submit your rank!
                    </div>
                </div>
            )
        }else {
            return (
                <div className="text-center">
                    <div className="white f3">
                        {` ${this.props.name} Your current rank is ...`}
                    </div>
                    <div className="white f1">
                        {`${this.props.entries}`}
                    </div>
                </div>
            )
        }
    }
}

export default Rank