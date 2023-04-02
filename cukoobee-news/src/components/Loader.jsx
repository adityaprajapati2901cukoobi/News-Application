import React from 'react'

export default function Loader(props) {
    return (
        <>
            <div className="container text-center">
                <img className="my-3" src="duck.gif" alt="" />
                {props.load}
                <strong>Loading.....</strong>
            </div>
        </>

    )
}
