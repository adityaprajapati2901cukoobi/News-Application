import React from 'react';

export default function NewsDisplay(props) {
    let { title, desc, image, more, source, date } = props;
    return (
        <>
            <div className="flexbox">
                <div className="card" style={{ width: "25rem", height: "35rem" }}>
                    <label className="position-absolute top-5 translate-middle  badge rounded-pill bg-warning text-dark" style={{ zIndex: "1", left: "90%" }} >{source}</label>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text text-success">{new Date(date).toGMTString()}</p>
                        <a href={more} className="btn btn-sm btn-dark text-warning">more..</a>
                    </div>
                </div>
            </div>
        </>
    );
}

