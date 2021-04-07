import React from 'react'
import css from './Card.module.css'

export const Card = ({image, title,price}) => {
    return <div className={css.card} >
        <img src={image}  alt=""/>
        <h3>{title}</h3>
        <h2>{price}</h2>

    </div>
}
