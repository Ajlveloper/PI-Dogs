import React from 'react';
import { useDispatch } from 'react-redux';
import { getFilterCreated } from '../../redux/actions';


const FilterCreate = ({ setdogsCurrent }) => {
    const dispatch = useDispatch()

    const handlerFilterCreate = ({ target }) => {
        setdogsCurrent(1)
        dispatch(getFilterCreated(target.value))
    }
    return (
        <>
            <label className='FontWeight'>Filter by created or existing</label>
            <div className='select'>
                <select onChange={handlerFilterCreate}>
                    <option disabled>Created or existing:</option>
                    <option value='existentes'>Existing</option>
                    <option value='creados'>Created</option>
                </select>
            </div>
        </>
    )
}

export default FilterCreate
