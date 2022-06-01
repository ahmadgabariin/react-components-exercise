import React, { Component } from 'react';

export class Dummy extends Component {
    render(){

        return (
            <div>
                <input placeHolder={`Enter a text`}></input>
                <button>{`Click !`}</button>
            </div>
        )
    }
}