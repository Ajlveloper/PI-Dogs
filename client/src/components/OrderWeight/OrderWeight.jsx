import React from 'react'

 const OrderWeight = ({ handleWeight }) => {
    return (
        <>
            <select onChange={handleWeight}>
                <option>Peso</option>
                <option value="min">Min</option>
                <option value="max">Max</option>
            </select>
        </>
    )
}

export default OrderWeight;
