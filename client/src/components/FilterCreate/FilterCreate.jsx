import React from 'react'

const FilterCreate = ({ handlerFilterCreate }) => {
    return (
        <>
            <label>Filter by created or existing</label>
            <select onChange={handlerFilterCreate}>
                <option value='creados'>Created</option>
                <option value='existentes'>Existing</option>
            </select>
        </>
    )
}

export default FilterCreate
