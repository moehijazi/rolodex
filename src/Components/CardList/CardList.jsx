import React from 'react';
import './CardListStyles.css';
import {Card} from '../Card/Card';

export const CardList = props => {

    return(
        <div className='card-list'>
            {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} set={props.set} />
          ))}
        </div>
    )
}