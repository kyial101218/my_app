import React from 'react'
import { Card } from '../Card'
import { Card2 } from '../Card2'
import css from './Main.module.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'




export const Main = () => {
    const [data, setData] = React.useState([
        {
            image: img1,
            title: 'Coca-Cola',
            price: '35'
        },
        {
            image: img2,
            title: 'Fanta',
            price: '36'
        },
        {
            image: img3,
            title: 'Sprite',
            price: '37'
        },
        {
            image: img4,
            title: 'Pepsi',
            price: '40'
        }
    ])


    const data2 = [{
        title: 'Coca-cola',
        quantity: 'i',
        sum: 'k'
    },
    {
        title: 'Fanta',
        quantity: 'i',
        sum: 'k'
    },{
        title: 'Sprite',
        quantity: 'i',
        sum: 'k'
    },
    {
        title: 'Pepsi',
        quantity: 'i',
        sum: 'k'
    }]

    const myOrders = () => {
        
        console.log('yes')
        return setData()
    }


    return (<div className={css.main} >
        <div className={css.block} onClick={myOrders}>
            {
                data.map((elem,id) => {
                    return <Card image={elem.image}
                        title={elem.title}
                        price={elem.price}
                        key={id}
                    />
                })
            }
        </div>

           <div className={css.block2}>
              {
                  data2.map((elem,id) => {
                      return <Card2 title={elem.title}
                      quantity={elem.quantity}
                      sum={elem.sum}
                      key={id}/>
                  })
              }
            
        </div>
    </div>

    );

}