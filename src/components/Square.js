import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <button className="square"
                    onClick={this.setValue}>
                {this.state.value}
            </button>
        )
    }
    setValue = () =>{
       this.setState(
           {
               value: 'X'
           }
       )
    }
}

export default Square;