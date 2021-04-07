import React from 'react'
import css from './Card2.module.css'

export const Card2 = ({title, quantity, sum}) => {

    return (<div className={css.card2}>
           <h3>{title}</h3>
           <p>{quantity}</p>
           <p>{sum}</p>

    </div>)
}