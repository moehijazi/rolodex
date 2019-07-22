import React from 'react';

export const CreatureSelector = props  => (
    <div className='creature' >
          <p>Pick your preffered Creature:</p>
          <select onChange={props.handleChange}>
            <option value="1">Robots</option>
            <option value="2">Monsters</option>
            <option value="4">Cats</option>
            <option value="5">Humans</option>
          </select>
    </div>
    )