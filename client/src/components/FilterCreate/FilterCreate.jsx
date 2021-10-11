import React from 'react'

const FilterCreate = ({ handlerFilterCreate }) => {
    return (
        <>
            <label className='FontWeight'>Filter by created or existing</label>
            <div className='select'>
                <select onChange={handlerFilterCreate}>
                    <option >Created or existing:</option>
                    <option value='creados'>Created</option>
                    <option value='existentes'>Existing</option>
                </select>
            </div>
        </>
    )
}

export default FilterCreate
