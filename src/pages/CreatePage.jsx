import React from "react"

function Create({location}){
    const {name, attack, defense} = location.state
    return (
        <div>{name}</div>
    )
}

export default Create;