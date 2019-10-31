import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

function SelectMonster({ monsters, getMonster }) {
    const [monster, setMonster] = useState("Choose your monster to customize")

        return (
        <>
        {/* <Select style={{ width: 300 }} value={monster} onChange={e => getMonster(e)}>
            {
                monsters.map(monster => {
                    return <Option value={monster}>{monster.name}</Option>
                })
            }

        </Select> */}
        
        <FormGroup>
        <Label for="selectMonster">Choose your monster to customize :</Label>
        <select value={monster} onChange={e => getMonster(e.target.value)}>
          {
              monsters.map(monster => {
                  return <option value={monster.id}>{monster.name}</option>
              })
          }
        </select>
      </FormGroup>
      </>
    )
}

export default SelectMonster;