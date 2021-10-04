import React from 'react'

const Order = ({ handleAscendent }) => {
    return (
        <>
            <select onChange={handleAscendent}>
                <option>Asc/Desc</option>
                <option value="ascendent">Ascendent</option>
                <option value="descendente">Descendente</option>
            </select>
        </>
    )
}

export default Order;
