import "./index.scss"
import React from 'react'
//comment just to add some new stuff
export const RedDiv = (props) => {
    return (<div className="red-div">{props.children}</div>)
}

export const GreenDiv = (props) => {
    return (<div className="green-div">{props.children}</div>)
}