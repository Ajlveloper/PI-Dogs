import React from 'react'

const Order = ({ handleAscendent }) => {
    return (
        <>
            <div className='Order_SideBar'>
                <select onChange={handleAscendent}>
                    <option>Asc/Desc</option>
                    <option value="ascendent">Ascendant</option>
                    <option value="descendente">Descendant</option>
                </select>
            </div>
        </>
    )
}

export default Order;
