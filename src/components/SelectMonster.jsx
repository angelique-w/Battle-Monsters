import React, { useState } from 'react';
import { Select, Option } from 'antd';

function SelectMonster({ monsters, getMonster }) {
    const [monster, setMonster] = useState("Choose your monster to customize")
    const { Option } = Select;
    return (
        <Select style={{ width: 300 }} value={monster} onChange={e => getMonster(e)}>
            {
                monsters.map(monster => {
                    return <Option value={monster}>{monster.name}</Option>
                })
            }

        </Select>
    )
}

export default SelectMonster;



// .then( () => {
//     const arrayMonsters = this.state.listMonsters;
//     arrayMonsters.forEach(function() {
//     return (
//     <Option value={this.state.listMonsters.name}>{this.state.listMonsters.name}</Option>)
//     })})