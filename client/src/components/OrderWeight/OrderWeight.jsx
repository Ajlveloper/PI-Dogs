import React from 'react'

const OrderWeight = ({ handleWeight }) => {
    return (
        <>
            <div className='Order_SideBar'>
                <select onChange={handleWeight}>
                    <option>Weight</option>
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                </select>
            </div>
        </>
    )
}

export default OrderWeight;
