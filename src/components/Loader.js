import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <>
                <div className="container text-center">
                    <img className="my-3" src="duck.gif" alt="" />
                    {this.load}
                    <strong>Loading.....</strong>
                </div>
            </>
        );
    }
}

export default Loader;
