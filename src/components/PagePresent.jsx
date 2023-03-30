import React from 'react'

const PagePresent = (props) => {
    return (
        <div style={{ height: "400px", backgroundColor: "#1f1f1f", display: "flex", justifyContent: 'center', alignItems: "center" }}>
            <h1 style={{ color: "white", textAlign: "center" }}>{props.title}</h1>
        </div>
    )
}

export default PagePresent