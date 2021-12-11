import React from 'react'

const ItemTitle = ({title}) => {
    // return (
    //     <div>
    //         Title : {title}
    //     </div>
    // )
    return React.createElement('div', {}, `Title : ${title}`)
}

export default ItemTitle
