import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getBreedFilter} from '../../redux/actions';

function FilterBreed({setdogsCurrent}) {
    
    const dogsSeconds = useSelector(state => state.dogsSecond);
    
    const dispatch = useDispatch();
    
    const handleChangeBreed = ({ target }) => {
        setdogsCurrent(1)
        dispatch(getBreedFilter(target.value))
    }

    return (
        <>
            <label className='FontWeight'>Filter by Breed: </label>
            <div className='select'>
                <select onChange={handleChangeBreed}>
                    <option value='allBreed'>All race</option>
                    {
                     dogsSeconds.length && dogsSeconds?.map(d => (
                            <option
                                value={d.name}
                                key={d.id}
                            >
                                {d.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default FilterBreed;
