import React from 'react'
import './styles/itemdate.css'

const ItemDate = ({date}) => {
    return (
        <div>
            <h3 className="itemdate">Date : {date}</h3>
        </div>
    )
}

export default ItemDate
