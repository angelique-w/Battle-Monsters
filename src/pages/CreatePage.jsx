import React from "react"

export default function Create({location}){
    const {id, name, attack, level} = location.state
    return (
        <div>{name}</div>
    )
}