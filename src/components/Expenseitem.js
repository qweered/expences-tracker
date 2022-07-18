import React from 'react';
import './ExpenseItem.css'

function ExpenseItem({date, title, amount}) {

    return (
        <div className='expense-item'>
            <div className='expense-item__description'>{date.toISOString()}</div>
            <div>c
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;