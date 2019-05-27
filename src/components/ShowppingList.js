import React from 'react';

class ShowppingList extends React.Component{
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default ShowppingList;