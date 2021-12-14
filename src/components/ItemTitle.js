import React from 'react'
import "./Expense.css";

const ItemTitle = ({title}) => {
    // return (
    //     <div>
    //         Title : {title}
    //     </div>
    // )
    return React.createElement(
      "div",
      { className: "expense-item__description" },
      `Title : ${title}`
    );
}

export default ItemTitle
